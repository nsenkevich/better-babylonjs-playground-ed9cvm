import * as BABYLON from 'babylonjs';

import 'babylonjs-loaders';
import { AreaCalc } from './core/AreaCalc';
import { Bridge } from './core/Bridge';
import { FloorPlan } from './core/FloorPlan';
import { RoofPlan } from './core/RoofPlan';
import SceneHelper from './core/SceneHelper';

export interface Opening {
  width: number;
  height: number;
}

export interface OpeningSpace {
  opening: Opening;
  left: number;
  top: number;
}

export interface Wall {
  corner: BABYLON.Vector3;
  windowSpaces: OpeningSpace[];
  doorSpaces: OpeningSpace[];
}

export interface Options {
  interiorUV: BABYLON.Vector4;
  exteriorUV: BABYLON.Vector4;
  interiorColor: BABYLON.Color4;
  exteriorColor: BABYLON.Color4;
  interior: boolean;
}
export interface RoofData {
  apexes: BABYLON.Vector2[];
  planes: string[][];
}

export default class App {
  public createMainHouse(
    scene,
    walls,
    objs,
    thickness,
    height,
    opt
  ): BABYLON.Mesh {
    // const ground = BABYLON.MeshBuilder.CreateGround(
    //   'ground',
    //   { width: 7.5, height: 15 },
    //   scene
    // );

    const floorData = this.addWallsAndOpenings(height, walls, objs);
    const masonry = new FloorPlan().build(
      floorData,
      thickness,
      height,
      opt,
      scene
    );

    masonry.material = new BABYLON.StandardMaterial('', scene);
    masonry.material.diffuseTexture = new BABYLON.Texture(
      'http://i.imgur.com/88fOIk3.jpg',
      scene
    );

    return masonry;
  }

  public createExtension(
    scene,
    walls,
    objects,
    thickness,
    height,
    opt
  ): BABYLON.Mesh {
    opt.interior = true;

    const extData = this.addWallsAndOpenings(height, walls, objects);

    const extMasonry = new FloorPlan().build(
      extData,
      thickness,
      height,
      opt,
      scene
    );
    extMasonry.material = new BABYLON.StandardMaterial('', scene);
    extMasonry.material.diffuseTexture = new BABYLON.Texture(
      'http://i.imgur.com/88fOIk3.jpg',
      scene
    );

    return extMasonry;
  }

  public createLeanOnRoof(
    scene,
    extMasonry,
    walls,
    thickness,
    height,
    roofType
  ): BABYLON.Mesh {
    // extension roof
    let extensionCorners = [];
    for (const wb of walls) {
      extensionCorners.push(
        new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100)
      );
    }

    const roofPlan = new RoofPlan();
    const extRoofprint = roofPlan.roofprint(
      extensionCorners,
      thickness + 0.1,
      height
    );
    roofPlan.buildCeiling(extRoofprint, scene);

    const extCenter = extMasonry.getBoundingInfo().boundingBox.center;
    const extMin = extMasonry.getBoundingInfo().minimum;
    const extMax = extMasonry.getBoundingInfo().maximum;

    const planes = [
      ['C0', 'C1', 'A1', 'A0'],
      ['C1', 'C2', 'A1'],
      ['C2', 'C3', 'A0', 'A1'],
      ['C3', 'C0', 'A0'],
    ];

    let extApex = [extMin.x, extMax.z, extMin.x, extMin.z];
    if (roofType === 'gable') {
      extApex = [extMin.x, extCenter.z, extMax.x, extCenter.z];
    }
    if (roofType === 'hip') {
      extApex = [extMin.x, extCenter.z, extMin.x, extCenter.z];
    }

    const extRoof = roofPlan.buildRoof(
      extRoofprint,
      this.createRoofData(extApex),
      planes,
      0.5,
      height,
      5.6,
      scene
    );

    extRoof.material = new BABYLON.StandardMaterial('tiles2', scene);
    extRoof.material.diffuseTexture = new BABYLON.Texture(
      'https://i.imgur.com/9SH16GZ.jpg',
      scene
    );

    return extRoof;
  }

  public createRoof(
    scene,
    masonry,
    walls,
    thickness,
    height,
    roofType
  ): BABYLON.Mesh {
    const center = masonry.getBoundingInfo().boundingBox.center;
    const min = masonry.getBoundingInfo().minimum;
    const max = masonry.getBoundingInfo().maximum;

    let mainCorners = [];
    for (const wb of walls) {
      mainCorners.push(
        new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100)
      );
    }

    // const floorprint = roofPlan.roofprint(mainCorners, ply + 2, 0);
    // const floor = roofPlan.buildCeiling(floorprint, scene);
    const roofPlan = new RoofPlan();
    const roofprint = roofPlan.roofprint(mainCorners, thickness + 0.2, height);
    const roof = roofPlan.buildCeiling(roofprint, scene);
    // roof.position.x = -center.x;
    // roof.position.z = -center.z;

    const planes = [
      ['C0', 'C1', 'A1', 'A0'],
      ['C1', 'C2', 'A1'],
      ['C2', 'C3', 'A0', 'A1'],
      ['C3', 'C0', 'A0'],
    ];

    let apex = [center.x, center.z, center.x, center.z]; // pyramid
    const middle = (max.x - min.x) / 3;
    if (roofType === 'hip1') {
      apex = [min.x + middle, center.z, max.x - middle, center.z];
    }
    if (roofType === 'hip2') {
      apex = [center.x, max.z - middle, center.x, min.z + middle];
    }
    if (roofType === 'terrced1') {
      apex = [min.x, center.z, max.x, center.z];
    }
    if (roofType === 'terrced2') {
      apex = [center.x, max.z, center.x, min.z];
    }
    if (roofType === 'semiUp') {
      apex = [center.x, center.z, center.x, min.z];
    }
    if (roofType === 'semiDown') {
      apex = [center.x, max.z, center.x, center.z];
    }
    if (roofType === 'semiLeft') {
      apex = [center.x, center.z, max.x, center.z];
    }
    if (roofType === 'semiRight') {
      apex = [min.x, center.z, center.x, center.z];
    }

    const roofPrint = roofPlan.roofprint(mainCorners, thickness + 0.2, height);
    const mainRoof = roofPlan.buildRoof(
      roofPrint,
      this.createRoofData(apex),
      planes,
      3,
      height,
      5.6,
      scene
    );

    mainRoof.material = new BABYLON.StandardMaterial('tiles', scene);
    mainRoof.material.diffuseTexture = new BABYLON.Texture(
      'https://i.imgur.com/9SH16GZ.jpg',
      scene
    );
    return mainRoof;
  }

  /**
   * The main entry point for the 3D app.
   * @param engine - an instance of the 3D engine.
   */
  public createScene(engine: BABYLON.Engine): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    const light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    light.intensity = 0.7;

    const bridge = new Bridge();
    let opt = {
      interiorUV: new BABYLON.Vector4(0.167, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0, 0, 0.16, 1),
      interiorColor: new BABYLON.Color4(1, 1, 1, 1),
      exteriorColor: new BABYLON.Color4(1, 1, 1, 1),
      interior: false,
    };
    let walls = bridge.data.wallData.filter((w) => w.extension === null);
    const mainProperty = this.createMainHouse(
      scene,
      walls,
      bridge.data.objData,
      0.3,
      3.9,
      opt
    );
    const mainRoof = this.createRoof(
      scene,
      mainProperty,
      walls,
      0.3,
      3.9,
      'pyramid'
    );
    const extWalls = bridge.data.wallData.filter(
      (w) => w.extension === 'frontExtension'
    );
    extWalls.push({ start: extWalls[2].end, end: extWalls[0].start });
    const extension = this.createExtension(
      scene,
      extWalls,
      bridge.data.objData,
      0.3,
      2.7,
      opt
    );
    const extensionRoof = this.createLeanOnRoof(
      scene,
      extension,
      extWalls,
      0.3,
      2.7,
      'pyramid'
    );
    // const newMesh = BABYLON.Mesh.MergeMeshes([
    //   mainProperty,
    //   mainRoof,
    //   extension,
    //   extensionRoof,
    // ]);
    // const center = newMesh.getBoundingInfo().boundingBox.center;
    // newMesh.position = new BABYLON.Vector3(-center.x, 0, -center.z);

    return scene;
  }

  public addWallsAndOpenings(
    height: number,
    wallData: {
      start: { x: number; y: number };
      end: { x: number; y: number };
    }[],
    objData: {
      height: number;
      size: number;
      sillHeight: number;
      x: number;
      y: number;
    }[]
  ): Wall[] {
    const bridge = new Bridge();
    let walls = [] as Wall[];
    for (const wb of wallData) {
      const wall = {
        corner: new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100),
        windowSpaces: [],
        doorSpaces: [],
      };
      for (const obj of objData) {
        if (bridge.objectOnWall(obj, wb)) {
          const objectFromBottom = (+obj.height + +obj.sillHeight) / 100;
          // console.log(objectFromBottom);
          const openSpace = {
            opening: { width: +obj.size / 100, height: +obj.height / 100 },
            left: bridge.measure(wb.start, { x: obj.x, y: obj.y }) / 100,
            top: height - objectFromBottom,
          };
          wall.windowSpaces.push(openSpace);
        }
      }

      walls.push(wall);
    }

    return walls;
  }

  public createRoofData(roofApexData: number[]) {
    let apexes = [];
    for (var i = 0; i < roofApexData.length / 2; i++) {
      apexes.push(
        new BABYLON.Vector2(roofApexData[2 * i], roofApexData[2 * i + 1])
      );
    }

    return apexes;
  }
}
