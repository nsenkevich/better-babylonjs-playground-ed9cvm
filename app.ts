import * as BABYLON from 'babylonjs';

import 'babylonjs-loaders';
import { AreaCalc } from './core/AreaCalc';
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
    //scene.createDefaultEnvironment({});

    const arcRotate: boolean = true;
    SceneHelper.setupCamera(scene, arcRotate);
    SceneHelper.setupLight(scene);

    const corners = this.createCorners([
      -3, -2, -1, -4, 1, -4, 3, -2, 5, -2, 5, 1, 2, 1, 2, 3, -3, 3,
    ]);
    const floorData = this.addWallsAndOpenings(corners);
    const opt = {
      interiorUV: new BABYLON.Vector4(0.167, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0, 0, 0.16, 1),
      interiorColor: new BABYLON.Color4(1, 1, 1, 1),
      exteriorColor: new BABYLON.Color4(1, 1, 1, 1),
      interior: false,
    };

    const ply = 0.3;
    const height = 3.9;
    const masonry = new FloorPlan().build(floorData, ply, height, opt, scene);

    // masonry.material = new BABYLON.StandardMaterial("", scene);
    // masonry.material.diffuseTexture = new BABYLON.Texture("http://i.imgur.com/88fOIk3.jpg", scene);

    const mainCorners = this.createCorners([
      -3, -2, -1, -4, 1, -4, 3, -2, 3, 3, -3, 3,
    ]);
    const extensionCorners = this.createCorners([0, -2, 5, -2, 5, 1, 0, 1]);
    const mainPlanes = [
      ['C0', 'C1', 'A0'],
      ['C1', 'C2', 'A0'],
      ['C2', 'C3', 'A0'],
      ['C3', 'C4', 'A1', 'A0'],
      ['C4', 'C5', 'A1'],
      ['C5', 'C0', 'A0', 'A1'],
    ];
    const mainRoofData = this.createRoofData([0, -2, 0, 2], mainPlanes);

    const extPlanes = [
      ['C0', 'C1', 'A1', 'A0'],
      ['C1', 'C2', 'A1'],
      ['C2', 'C3', 'A0', 'A1'],
    ];
    const extensionRoofData = this.createRoofData(
      [0, -0.5, 4.5, -0.5],
      extPlanes
    );

    const roofPlan = new RoofPlan();
    const roofprint = roofPlan.roofprint(corners, ply + 0.2, height);
    const floorprint = roofPlan.roofprint(corners, ply, 0);
    const floor = roofPlan.buildCeiling(floorprint, scene);
    roofPlan.buildCeiling(roofprint, scene);

    const mainRoofprint = roofPlan.roofprint(mainCorners, ply + 0.2, height);
    const extRoofprint = roofPlan.roofprint(
      extensionCorners,
      ply + 0.2,
      height
    );

    const mainRoof = roofPlan.buildRoof(
      mainRoofprint,
      mainRoofData,
      2,
      height,
      5.6,
      scene
    );
    const extRoof = roofPlan.buildRoof(
      extRoofprint,
      extensionRoofData,
      2,
      height,
      5.6,
      scene
    );

    // roof.material = new BABYLON.StandardMaterial("tiles", scene);
    // roof.material.diffuseTexture = new BABYLON.Texture("https://i.imgur.com/9SH16GZ.jpg", scene);

    return scene;
  }

  public createCorners(data: number[]): BABYLON.Vector3[] {
    let corners = [];
    for (let b = 0; b < data.length / 2; b++) {
      corners.push(new BABYLON.Vector3(data[2 * b], 0, data[2 * b + 1]));
    }
    return corners;
  }

  public addWallsAndOpenings(corners: BABYLON.Vector3[]): Wall[] {
    var door = { width: 1, height: 1.8 };
    var doorSpace = { opening: door, left: 1, top: 0 };

    var window0 = { width: 1.2, height: 2.4 };
    var window1 = { width: 2, height: 2.4 };

    var windowSpace02 = { opening: window0, left: 0.814, top: 0.4 };
    var windowSpace1 = { opening: window0, left: 0.4, top: 0.4 };
    var windowSpace78 = { opening: window1, left: 1.5, top: 0.4 };

    let walls = [] as Wall[];
    for (let c = 0; c < corners.length; c++) {
      walls.push({ corner: corners[c], windowSpaces: [], doorSpaces: [] });
    }

    walls[0].windowSpaces = [windowSpace02];
    walls[1].windowSpaces = [windowSpace1];
    walls[2].windowSpaces = [windowSpace02];
    walls[7].windowSpaces = [windowSpace78];
    walls[8].windowSpaces = [windowSpace78];

    walls[5].doorSpaces = [doorSpace];

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
