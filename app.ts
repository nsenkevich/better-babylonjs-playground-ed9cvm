import * as BABYLON from 'babylonjs';
import { Bridge } from './core/Bridge';
import { FloorPlan } from './core/FloorPlan';
import { RoofPlan } from './core/RoofPlan';

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
      new BABYLON.Vector3(10, 10, 0),
      scene
    );
    // camera.setTarget(BABYLON.Vector3.Zero());
    // camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    const light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    light.intensity = 0.7;

    const bridge = new Bridge(new FloorPlan(), new RoofPlan(), scene);
    let opt = {
      interiorUV: new BABYLON.Vector4(0.167, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0, 0, 0.16, 1),
      interiorColor: new BABYLON.Color4(1, 1, 1, 1),
      exteriorColor: new BABYLON.Color4(1, 1, 1, 1),
      interior: false,
    };
    let walls = bridge.data.wallData; //.filter((w) => w.floorId === 1);
    const mainProperty = bridge.createMainHouse(
      walls,
      bridge.data.objData,
      0.3,
      3.9,
      opt
    );

    const mainRoof = bridge.createRoof(
      mainProperty,
      walls,
      0.3 + 0.2,
      3.9,
      'pyramid',
      2
    );

    // const extWalls = bridge.data.wallData.filter(
    //   (w) => w.extension === 'frontExtension'
    // );
    // extWalls.push({ start: extWalls[2].end, end: extWalls[0].start });
    // const extension = bridge.createExtension(
    //   extWalls,
    //   bridge.data.objData,
    //   0.3,
    //   2.7,
    //   opt
    // );

    // const extensionRoof = bridge.createLeanOnRoof(
    //   extension,
    //   extWalls,
    //   0.3 + 0.1,
    //   2.7,
    //   'pyramid',
    //   0.5
    // );

    const center = mainProperty.getBoundingInfo().boundingBox.center;
    camera.setTarget(new BABYLON.Vector3(center.x, 0, center.z));
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
    return scene;
  }
}
