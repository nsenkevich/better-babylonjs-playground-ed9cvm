import * as BABYLON from 'babylonjs';

import 'babylonjs-loaders';
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

export default class App {
  /**
   * The main entry point for the 3D app.
   * @param engine - an instance of the 3D engine.
   */
  public createScene(engine: BABYLON.Engine): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);
    //scene.createDefaultEnvironment({});

    const arcRotate: boolean = false;
    SceneHelper.setupCamera(scene, arcRotate);
    SceneHelper.setupLight(scene);

    const floorData = this.createFloorData();
    const opt = {
      interiorUV: new BABYLON.Vector4(0, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0, 0, 1, 1),
      interiorColor: new BABYLON.Color4(1, 1, 1, 1),
      exteriorColor: new BABYLON.Color4(1, 1, 1, 1),
      interior: false,
    };
    //this.extending();

    const ply = 0.3;
    const height = 3.9;
    new FloorPlan().build(floorData, ply, height, opt, scene);

    const roofData = this.createRoofData(
      ply,
      height,
      floorData.map((w) => w.corner)
    );

    new RoofPlan().build(roofprint, apexes, planes, 2, height, 5.6, scene);

    return scene;
  }

  public createFloorData(): Wall[] {
    const baseData = [
      -3, -2, -1, -4, 1, -4, 3, -2, 5, -2, 5, 1, 2, 1, 2, 3, -3, 3,
    ];

    let corners = [];
    for (let b = 0; b < baseData.length / 2; b++) {
      corners.push(
        new BABYLON.Vector3(baseData[2 * b], 0, baseData[2 * b + 1])
      );
    }

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

  public createRoofData(ply, height, corners, overhang = 0.2) {
    const roofApexData = [0, -2, 0, -0.5, 0, 2, 4.5, -0.5];

    const roofPlan = new RoofPlan();
    var wholeRoofprint = roofPlan.roofprint(corners, ply + overhang, height);

    var ceiling = roofPlan.roofFloor(wholeRoofprint);

    let apexes = [];
    for (var i = 0; i < roofApexData.length / 2; i++) {
      apexes.push(
        new BABYLON.Vector2(roofApexData[2 * i], roofApexData[2 * i + 1])
      );
    }

    var planes = [
      ['C0', 'C1', 'A0'],
      ['C1', 'C2', 'A0'],
      ['C2', 'C3', 'A0'],
      ['C3', 'A1', 'A0'],
      ['C3', 'C4', 'A3', 'A1'],
      ['C4', 'C5', 'A3'],
      ['C5', 'C6', 'A1', 'A3'],
      ['C6', 'C7', 'A2', 'A1'],
      ['C7', 'C8', 'A2'],
      ['C8', 'C0', 'A0', 'A2'],
    ];
  }
}
