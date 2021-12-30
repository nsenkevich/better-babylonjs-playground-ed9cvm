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

    // const ground = BABYLON.MeshBuilder.CreateGround(
    //   'ground',
    //   { width: 7.5, height: 15 },
    //   scene
    // );

    const demo = [-3, -2, -1, -4, 1, -4, 3, -2, 5, -2, 5, 1, 3, 1, 3, 3, -3, 3];
    const bridge = new Bridge();
    const demo2 = bridge.buildCorners();
    const corners = this.createCorners(demo2);
    const floorData = this.addWallsAndOpenings(
      2.7,
      bridge.data.wallData.filter((w) => w.extension === null),
      bridge.data.objData
    );
    let opt = {
      interiorUV: new BABYLON.Vector4(0.167, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0, 0, 0.16, 1),
      interiorColor: new BABYLON.Color4(1, 1, 1, 1),
      exteriorColor: new BABYLON.Color4(1, 1, 1, 1),
      interior: false,
    };

    const ply = 0.3;
    const height = 3.9;
    const masonry = new FloorPlan().build(floorData, ply, height, opt, scene);

    masonry.material = new BABYLON.StandardMaterial('', scene);
    masonry.material.diffuseTexture = new BABYLON.Texture(
      'http://i.imgur.com/88fOIk3.jpg',
      scene
    );

    const center = masonry.getBoundingInfo().boundingBox.center;
    const min = masonry.getBoundingInfo().minimum;
    const max = masonry.getBoundingInfo().maximum;
    // masonry.position = new BABYLON.Vector3(-center.x, 0, -center.z);

    opt.interior = true;
    const extWalls = bridge.data.wallData.filter(
      (w) => w.extension === 'frontExtension'
    );
    extWalls.push({ start: extWalls[2].end, end: extWalls[0].start });
    const extData = this.addWallsAndOpenings(
      2.7,
      extWalls,
      bridge.data.objData
    );

    const extHeight = 2.5;
    const extMasonry = new FloorPlan().build(extData, ply, 2.7, opt, scene);

    // extMasonry.position = new BABYLON.Vector3(-extCenter.x, 0, -extCenter.z);
    // console.log(masonry.getBoundingInfo().boundingBox);

    let mainCorners = [];
    for (const wb of bridge.data.wallData.filter((w) => w.extension === null)) {
      mainCorners.push(
        new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100)
      );
    }
    console.log(mainCorners, min);

    // const floorprint = roofPlan.roofprint(mainCorners, ply + 2, 0);
    // const floor = roofPlan.buildCeiling(floorprint, scene);
    const roofPlan = new RoofPlan();
    const roofprint = roofPlan.roofprint(mainCorners, ply + 0.2, height);
    const roof = roofPlan.buildCeiling(roofprint, scene);
    // roof.position.x = -center.x;
    // roof.position.z = -center.z;

    const mainPlanes = [
      ['C0', 'C1', 'A1', 'A0'],
      ['C1', 'C2', 'A1'],
      ['C2', 'C3', 'A0', 'A1'],
      ['C3', 'C0', 'A0'],
    ];
    // const lenghtX = (max.x - min.x) / 3;
    // const apex = [min.x + lenghtX, center.z, max.x - lenghtX, center.z]; // hip1

    const lenghtZ = (max.x - min.x) / 3;
    const apex = [center.x, max.z - lenghtZ, center.x, min.z + lenghtZ]; // hip2

    // const apex = [center.x, center.z, center.x, center.z]; // pyramid
    // const apex = [min.x, center.z, max.x, center.z]; // terrced
    // const apex = [center.x, max.z, center.x, min.z]; // terrced2

    // const apex = [center.x, center.z, center.x, min.z]; // semi up
    // const apex = [center.x, max.z, center.x, center.z]; // semi down
    // const apex = [center.x, center.z, max.x, center.z]; // semi left
    // const apex = [min.x, center.z, center.x, center.z]; // semi right

    const mainRoofprint = roofPlan.roofprint(mainCorners, ply + 0.2, height);
    const mainRoofData = this.createRoofData(apex, mainPlanes);
    const mainRoof = roofPlan.buildRoof(
      mainRoofprint,
      mainRoofData,
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

    // extension roof
    let extensionCorners = [];
    for (const wb of extWalls) {
      extensionCorners.push(
        new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100)
      );
    }

    const extRoofprint = roofPlan.roofprint(extensionCorners, ply + 0.1, 2.7);
    roofPlan.buildCeiling(extRoofprint, scene);

    const extCenter = extMasonry.getBoundingInfo().boundingBox.center;
    const extMin = extMasonry.getBoundingInfo().minimum;
    const extMax = extMasonry.getBoundingInfo().maximum;

    //const extApex = [extMin.x, extCenter.z, extMax.x, extCenter.z];
    //const extApex = [extMin.x, extCenter.z, extMin.x, extCenter.z];
    const extApex = [extMin.x, extMax.z, extMin.x, extMin.z];

    const extPlanes = [
      ['C0', 'C1', 'A1', 'A0'],
      ['C1', 'C2', 'A1'],
      ['C2', 'C3', 'A0', 'A1'],
      ['C3', 'C0', 'A0'],
    ];
    const extensionRoofData = this.createRoofData(extApex, extPlanes);

    const extRoof = roofPlan.buildRoof(
      extRoofprint,
      extensionRoofData,
      0.5,
      height,
      5.6,
      scene
    );

    return scene;
  }

  public createCorners(data: number[]): BABYLON.Vector3[] {
    let corners = [];
    for (let b = 0; b < data.length / 2; b++) {
      corners.push(new BABYLON.Vector3(data[2 * b], 0, data[2 * b + 1]));
    }
    return corners;
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

  public createRoofData(roofApexData: number[], planes: string[][]): RoofData {
    let apexes = [];
    for (var i = 0; i < roofApexData.length / 2; i++) {
      apexes.push(
        new BABYLON.Vector2(roofApexData[2 * i], roofApexData[2 * i + 1])
      );
    }

    return { apexes, planes };
  }
}
