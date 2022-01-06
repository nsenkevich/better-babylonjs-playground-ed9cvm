import { FloorPlan } from './FloorPlan';
import { RoofPlan } from './RoofPlan';

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

export class Bridge {
  constructor(
    private floorPlan: FloorPlan,
    private roofPlan: RoofPlan,
    private scene
  ) {}

  data = {
    objData: [
      {
        family: 'inWall',
        class: 'doorWindow',
        type: 'simple',
        x: 652.9889011596172,
        y: 157.07796525845905,
        angle: 360,
        angleSign: 1,
        limit: [
          {
            x: 622.9889011596172,
            y: 157.07796525845905,
          },
          {
            x: 682.9889011596172,
            y: 157.07796525845905,
          },
        ],
        hinge: 'normal',
        graph: {
          '0': {},
          context: {},
          length: 1,
        },
        scale: {
          x: 1,
          y: 1,
        },
        size: 60,
        thick: 20,
        width: '1.00',
        fill: '#eee',
        bbox: {
          x: 622.9888916015625,
          y: 87.07797241210938,
          width: 60,
          height: 80,
          top: 87.07797241210938,
          right: 682.9888916015625,
          bottom: 167.07797241210938,
          left: 622.9888916015625,
        },
        realBbox: [
          {
            x: 622.9889011596172,
            y: 147.07796525845905,
          },
          {
            x: 682.9889011596172,
            y: 147.07796525845905,
          },
          {
            x: 682.9889011596172,
            y: 167.07796525845905,
          },
          {
            x: 622.9889011596172,
            y: 167.07796525845905,
          },
        ],
        params: {
          bindBox: false,
          move: false,
          resize: true,
          resizeLimit: {
            width: {
              min: 40,
              max: 120,
            },
            height: {
              min: false,
              max: false,
            },
            columnHeight: {
              min: false,
              max: false,
            },
          },
          rotate: false,
          columnHeight: false,
          beamHeight: false,
          waistSlabThickness: false,
          stepsBase: false,
          stepsHeight: false,
          slabFloorOffsetHeight: false,
          typeColumn: false,
          typeBeam: false,
          typeSlabFloor: false,
          demolish: false,
        },
        area: 'NaN',
        up: [
          {
            x: 622.9889011596172,
            y: 160.07796525845905,
            distance: 3,
          },
          {
            x: 682.9889011596172,
            y: 160.07796525845905,
            distance: 3,
          },
        ],
        down: [
          {
            x: 622.9889011596172,
            y: 154.07796525845905,
            distance: 3,
          },
          {
            x: 682.9889011596172,
            y: 154.07796525845905,
            distance: 3,
          },
        ],
      },
      {
        family: 'inWall',
        class: 'doorWindow',
        type: 'flap',
        x: 540,
        y: 348.077965258459,
        angle: 90,
        angleSign: 0,
        limit: [
          {
            x: 540,
            y: 318.077965258459,
          },
          {
            x: 540,
            y: 378.077965258459,
          },
        ],
        hinge: 'normal',
        graph: {
          '0': {},
          context: {},
          length: 1,
        },
        scale: {
          x: 1,
          y: 1,
        },
        size: 60,
        thick: 20,
        width: '1.00',
        fill: '#eee',
        bbox: {
          x: 530,
          y: 318.0779724121094,
          width: 50,
          height: 60,
          top: 318.0779724121094,
          right: 580,
          bottom: 378.0779724121094,
          left: 530,
        },
        realBbox: [
          {
            x: 550,
            y: 318.077965258459,
          },
          {
            x: 550,
            y: 378.077965258459,
          },
          {
            x: 530,
            y: 378.077965258459,
          },
          {
            x: 530,
            y: 318.077965258459,
          },
        ],
        params: {
          bindBox: false,
          move: false,
          resize: true,
          resizeLimit: {
            width: {
              min: 20,
              max: 100,
            },
            height: {
              min: false,
              max: false,
            },
            columnHeight: {
              min: false,
              max: false,
            },
          },
          rotate: false,
          columnHeight: false,
          beamHeight: false,
          waistSlabThickness: false,
          stepsBase: false,
          stepsHeight: false,
          slabFloorOffsetHeight: false,
          typeColumn: false,
          typeBeam: false,
          typeSlabFloor: false,
          demolish: false,
        },
        area: 'NaN',
        up: [
          {
            x: 550,
            y: 318.077965258459,
            distance: 10,
          },
          {
            x: 550,
            y: 378.077965258459,
            distance: 10,
          },
        ],
        down: [
          {
            x: 530,
            y: 318.077965258459,
            distance: 10,
          },
          {
            x: 530,
            y: 378.077965258459,
            distance: 10,
          },
        ],
      },
      {
        family: 'inWall',
        class: 'doorWindow',
        type: 'double',
        x: 684,
        y: 882,
        angle: 0,
        angleSign: 0,
        limit: [
          {
            x: 609,
            y: 882,
          },
          {
            x: 759,
            y: 882,
          },
        ],
        hinge: 'normal',
        graph: {
          '0': {},
          context: {},
          length: 1,
        },
        scale: {
          x: 1,
          y: 1,
        },
        size: '150',
        thick: 20,
        width: '2.50',
        fill: '#eee',
        bbox: {
          x: 609,
          y: 797,
          width: 150,
          height: 95,
          top: 797,
          right: 759,
          bottom: 892,
          left: 609,
        },
        realBbox: [
          {
            x: 609,
            y: 872,
          },
          {
            x: 759,
            y: 872,
          },
          {
            x: 759,
            y: 892,
          },
          {
            x: 609,
            y: 892,
          },
        ],
        params: {
          bindBox: false,
          move: false,
          resize: true,
          resizeLimit: {
            width: {
              min: 40,
              max: 160,
            },
            height: {
              min: false,
              max: false,
            },
            columnHeight: {
              min: false,
              max: false,
            },
          },
          rotate: false,
          columnHeight: false,
          beamHeight: false,
          waistSlabThickness: false,
          stepsBase: false,
          stepsHeight: false,
          slabFloorOffsetHeight: false,
          typeColumn: false,
          typeBeam: false,
          typeSlabFloor: false,
          demolish: false,
        },
        height: '200',
        up: [
          {
            x: 609,
            y: 872,
            distance: 10,
          },
          {
            x: 759,
            y: 872,
            distance: 10,
          },
        ],
        down: [
          {
            x: 609,
            y: 892,
            distance: 10,
          },
          {
            x: 759,
            y: 892,
            distance: 10,
          },
        ],
        sillHeight: '10',
        area: '8.33',
      },
      {
        family: 'inWall',
        class: 'doorWindow',
        type: 'flap',
        x: 969,
        y: 882,
        angle: 180,
        angleSign: 1,
        limit: [
          {
            x: 929,
            y: 882,
          },
          {
            x: 1009,
            y: 882,
          },
        ],
        hinge: 'normal',
        graph: {
          '0': {},
          context: {},
          length: 1,
        },
        scale: {
          x: 1,
          y: 1,
        },
        size: '80',
        thick: 20,
        width: '1.33',
        fill: '#eee',
        bbox: {
          x: 929,
          y: 872,
          width: 80,
          height: 60,
          top: 872,
          right: 1009,
          bottom: 932,
          left: 929,
        },
        realBbox: [
          {
            x: 1009,
            y: 892,
          },
          {
            x: 929,
            y: 892,
          },
          {
            x: 929,
            y: 872,
          },
          {
            x: 1009,
            y: 872,
          },
        ],
        params: {
          bindBox: false,
          move: false,
          resize: true,
          resizeLimit: {
            width: {
              min: 20,
              max: 100,
            },
            height: {
              min: false,
              max: false,
            },
            columnHeight: {
              min: false,
              max: false,
            },
          },
          rotate: false,
          columnHeight: false,
          beamHeight: false,
          waistSlabThickness: false,
          stepsBase: false,
          stepsHeight: false,
          slabFloorOffsetHeight: false,
          typeColumn: false,
          typeBeam: false,
          typeSlabFloor: false,
          demolish: false,
        },
        height: '100',
        up: [
          {
            x: 929,
            y: 872,
            distance: 10,
          },
          {
            x: 1009,
            y: 872,
            distance: 10,
          },
        ],
        down: [
          {
            x: 929,
            y: 892,
            distance: 10,
          },
          {
            x: 1009,
            y: 892,
            distance: 10,
          },
        ],
        sillHeight: '100',
        area: '2.22',
      },
    ],
    wallData: [
      [
        {
          start: {
            x: 770,
            y: 240,
          },
          end: {
            x: 770,
            y: 690,
          },
          child: null,
          parent: null,
          equations: null,
          indexObj: 23,
          coords: [],
          thick: 12,
          type: 'normal',
          angle: 0,
          backUp: null,
          graph: null,
          floorId: 1,
          extensionType: 'house',
          blocked: true,
        },
        {
          start: {
            x: 770,
            y: 690,
          },
          end: {
            x: 1070,
            y: 690,
          },
          child: null,
          parent: null,
          equations: null,
          indexObj: 22,
          coords: [],
          thick: 12,
          type: 'normal',
          angle: 0,
          backUp: null,
          graph: null,
          floorId: 1,
          extensionType: 'house',
          blocked: true,
        },
        {
          start: {
            x: 1070,
            y: 690,
          },
          end: {
            x: 1070,
            y: 240,
          },
          child: null,
          parent: null,
          equations: null,
          indexObj: 21,
          coords: [],
          thick: 12,
          type: 'separate',
          angle: 0,
          backUp: null,
          graph: null,
          floorId: 1,
          extensionType: 'house',
          blocked: true,
        },
        {
          start: {
            x: 1070,
            y: 240,
          },
          end: {
            x: 770,
            y: 240,
          },
          child: null,
          parent: null,
          equations: null,
          indexObj: 20,
          coords: [],
          thick: 12,
          type: 'normal',
          angle: 0,
          backUp: null,
          graph: null,
          floorId: 1,
          extensionType: 'house',
          blocked: true,
        },
      ],
    ],
    roomData: [
      {
        coords: [
          {
            x: 804,
            y: 704,
          },
          {
            x: 1034,
            y: 704,
          },
          {
            x: 1080,
            y: 704,
          },
          {
            x: 1080,
            y: 194,
          },
          {
            x: 804,
            y: 194,
          },
          {
            x: 804,
            y: 704,
          },
        ],
        coordsOutside: [
          {
            x: 1034,
            y: 714,
          },
          {
            x: 1090,
            y: 714,
          },
          {
            x: 1090,
            y: 184,
          },
          {
            x: 796.5,
            y: 184,
          },
          {
            x: 796.5,
            y: 714,
          },
          {
            x: 1034,
            y: 714,
          },
        ],
        coordsInside: [
          {
            x: 1034,
            y: 694,
          },
          {
            x: 1070,
            y: 694,
          },
          {
            x: 1070,
            y: 204,
          },
          {
            x: 811.5,
            y: 204,
          },
          {
            x: 811.5,
            y: 694,
          },
          {
            x: 1034,
            y: 694,
          },
        ],
        inside: [],
        way: ['3', '5', '2', '6', '7', '3'],
        area: 126665,
        surface: '',
        name: '',
        color: 'gradientWhite',
        showSurface: true,
        action: 'add',
      },
      {
        coords: [
          {
            x: 513,
            y: 734,
          },
          {
            x: 593,
            y: 734,
          },
          {
            x: 593,
            y: 704,
          },
          {
            x: 540,
            y: 704,
          },
          {
            x: 540,
            y: 194,
          },
          {
            x: 804,
            y: 194,
          },
          {
            x: 804,
            y: 157,
          },
          {
            x: 513,
            y: 157,
          },
          {
            x: 513,
            y: 734,
          },
        ],
        coordsOutside: [
          {
            x: 603,
            y: 737,
          },
          {
            x: 603,
            y: 694,
          },
          {
            x: 550,
            y: 694,
          },
          {
            x: 550,
            y: 204,
          },
          {
            x: 811.5,
            y: 204,
          },
          {
            x: 811.5,
            y: 154,
          },
          {
            x: 510,
            y: 154,
          },
          {
            x: 510,
            y: 737,
          },
          {
            x: 603,
            y: 737,
          },
        ],
        coordsInside: [
          {
            x: 583,
            y: 731,
          },
          {
            x: 583,
            y: 714,
          },
          {
            x: 530,
            y: 714,
          },
          {
            x: 530,
            y: 184,
          },
          {
            x: 796.5,
            y: 184,
          },
          {
            x: 796.5,
            y: 160,
          },
          {
            x: 516,
            y: 160,
          },
          {
            x: 516,
            y: 731,
          },
          {
            x: 583,
            y: 731,
          },
        ],
        inside: [],
        way: ['8', '11', '4', '0', '1', '7', '14', '9', '8'],
        area: 15291,
        surface: '',
        name: '',
        color: 'gradientWhite',
        showSurface: true,
        action: 'add',
      },
      {
        coords: [
          {
            x: 540,
            y: 704,
          },
          {
            x: 593,
            y: 704,
          },
          {
            x: 804,
            y: 704,
          },
          {
            x: 804,
            y: 194,
          },
          {
            x: 540,
            y: 194,
          },
          {
            x: 540,
            y: 704,
          },
        ],
        coordsOutside: [
          {
            x: 593,
            y: 714,
          },
          {
            x: 811.5,
            y: 714,
          },
          {
            x: 811.5,
            y: 184,
          },
          {
            x: 530,
            y: 184,
          },
          {
            x: 530,
            y: 714,
          },
          {
            x: 593,
            y: 714,
          },
        ],
        coordsInside: [
          {
            x: 593,
            y: 694,
          },
          {
            x: 796.5,
            y: 694,
          },
          {
            x: 796.5,
            y: 204,
          },
          {
            x: 550,
            y: 204,
          },
          {
            x: 550,
            y: 694,
          },
          {
            x: 593,
            y: 694,
          },
        ],
        inside: [],
        way: ['0', '4', '3', '7', '1', '0'],
        area: 120785,
        surface: '',
        name: '',
        color: 'gradientWhite',
        showSurface: true,
        action: 'add',
      },
      {
        coords: [
          {
            x: 593,
            y: 882,
          },
          {
            x: 1034,
            y: 882,
          },
          {
            x: 1034,
            y: 734,
          },
          {
            x: 593,
            y: 734,
          },
          {
            x: 593,
            y: 882,
          },
        ],
        coordsOutside: [
          {
            x: 1044,
            y: 892,
          },
          {
            x: 1044,
            y: 731,
          },
          {
            x: 583,
            y: 731,
          },
          {
            x: 583,
            y: 892,
          },
          {
            x: 1044,
            y: 892,
          },
        ],
        coordsInside: [
          {
            x: 1024,
            y: 872,
          },
          {
            x: 1024,
            y: 737,
          },
          {
            x: 603,
            y: 737,
          },
          {
            x: 603,
            y: 872,
          },
          {
            x: 1024,
            y: 872,
          },
        ],
        inside: [],
        way: ['15', '16', '12', '11', '15'],
        area: 56835,
        surface: '',
        name: '',
        color: 'gradientWhite',
        showSurface: true,
        action: 'add',
      },
      {
        coords: [
          {
            x: 593,
            y: 734,
          },
          {
            x: 1034,
            y: 734,
          },
          {
            x: 1034,
            y: 704,
          },
          {
            x: 804,
            y: 704,
          },
          {
            x: 593,
            y: 704,
          },
          {
            x: 593,
            y: 734,
          },
        ],
        coordsOutside: [
          {
            x: 1044,
            y: 737,
          },
          {
            x: 1044,
            y: 694,
          },
          {
            x: 804,
            y: 694,
          },
          {
            x: 583,
            y: 694,
          },
          {
            x: 583,
            y: 737,
          },
          {
            x: 1044,
            y: 737,
          },
        ],
        coordsInside: [
          {
            x: 1024,
            y: 731,
          },
          {
            x: 1024,
            y: 714,
          },
          {
            x: 804,
            y: 714,
          },
          {
            x: 603,
            y: 714,
          },
          {
            x: 603,
            y: 731,
          },
          {
            x: 1024,
            y: 731,
          },
        ],
        inside: [],
        way: ['11', '12', '5', '3', '4', '11'],
        area: 7157,
        surface: '',
        name: '',
        color: 'gradientWhite',
        showSurface: true,
        action: 'add',
      },
      {
        coords: [
          {
            x: 804,
            y: 194,
          },
          {
            x: 1080,
            y: 194,
          },
          {
            x: 1080,
            y: 704,
          },
          {
            x: 1034,
            y: 704,
          },
          {
            x: 1034,
            y: 734,
          },
          {
            x: 1118,
            y: 734,
          },
          {
            x: 1118,
            y: 157,
          },
          {
            x: 804,
            y: 157,
          },
          {
            x: 804,
            y: 194,
          },
        ],
        coordsOutside: [
          {
            x: 1070,
            y: 204,
          },
          {
            x: 1070,
            y: 694,
          },
          {
            x: 1024,
            y: 694,
          },
          {
            x: 1024,
            y: 737,
          },
          {
            x: 1121,
            y: 737,
          },
          {
            x: 1121,
            y: 154,
          },
          {
            x: 796.5,
            y: 154,
          },
          {
            x: 796.5,
            y: 204,
          },
          {
            x: 1070,
            y: 204,
          },
        ],
        coordsInside: [
          {
            x: 1090,
            y: 184,
          },
          {
            x: 1090,
            y: 714,
          },
          {
            x: 1044,
            y: 714,
          },
          {
            x: 1044,
            y: 731,
          },
          {
            x: 1115,
            y: 731,
          },
          {
            x: 1115,
            y: 160,
          },
          {
            x: 811.5,
            y: 160,
          },
          {
            x: 811.5,
            y: 184,
          },
          {
            x: 1090,
            y: 184,
          },
        ],
        inside: [],
        way: ['7', '6', '2', '5', '12', '10', '13', '14', '7'],
        area: 21741,
        surface: '',
        name: '',
        color: 'gradientWhite',
        showSurface: true,
        action: 'add',
      },
    ],
  };

  public createMainHouse(walls, objs, thickness, height, opt): BABYLON.Mesh {
    // const ground = BABYLON.MeshBuilder.CreateGround(
    //   'ground',
    //   { width: 7.5, height: 15 },
    //   scene
    // );

    const floorData = this.addWallsAndOpenings(height, walls, objs);
    const masonry = this.floorPlan.build(
      floorData,
      thickness,
      height,
      opt,
      this.scene
    );

    masonry.material = new BABYLON.StandardMaterial('', this.scene);
    masonry.material.diffuseTexture = new BABYLON.Texture(
      'http://i.imgur.com/88fOIk3.jpg',
      this.scene
    );

    return masonry;
  }

  public createExtension(walls, objects, thickness, height, opt): BABYLON.Mesh {
    opt.interior = true;

    const extData = this.addWallsAndOpenings(height, walls, objects);

    const extMasonry = this.floorPlan.build(
      extData,
      thickness,
      height,
      opt,
      this.scene
    );
    extMasonry.material = new BABYLON.StandardMaterial('', this.scene);
    extMasonry.material.diffuseTexture = new BABYLON.Texture(
      'http://i.imgur.com/88fOIk3.jpg',
      this.scene
    );

    return extMasonry;
  }

  public createLeanOnRoof(
    extMasonry,
    walls,
    thickness,
    wallsHeight,
    roofType,
    height
  ): BABYLON.Mesh {
    const extRoofprint = this.roofPlan.roofprint(
      this.createCorners(walls),
      thickness,
      wallsHeight
    );
    this.roofPlan.buildCeiling(extRoofprint, this.scene);

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

    const extRoof = this.roofPlan.buildRoof(
      extRoofprint,
      this.createRoofData(extApex),
      planes,
      height,
      wallsHeight,
      5.6,
      this.scene
    );

    extRoof.material = new BABYLON.StandardMaterial('tiles2', this.scene);
    extRoof.material.diffuseTexture = new BABYLON.Texture(
      'https://i.imgur.com/9SH16GZ.jpg',
      this.scene
    );

    return extRoof;
  }

  public createRoof(
    masonry,
    walls,
    thickness,
    wallsHeight,
    roofType,
    height
  ): BABYLON.Mesh {
    const center = masonry.getBoundingInfo().boundingBox.center;
    const min = masonry.getBoundingInfo().minimum;
    const max = masonry.getBoundingInfo().maximum;

    const roofprint = this.roofPlan.roofprint(
      this.createCorners(walls),
      thickness,
      wallsHeight
    );
    const roof = this.roofPlan.buildCeiling(roofprint, this.scene);

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

    const mainRoof = this.roofPlan.buildRoof(
      roofprint,
      this.createRoofData(apex),
      planes,
      height,
      wallsHeight,
      5.6,
      this.scene
    );

    mainRoof.material = new BABYLON.StandardMaterial('tiles', this.scene);
    mainRoof.material.diffuseTexture = new BABYLON.Texture(
      'https://i.imgur.com/9SH16GZ.jpg',
      this.scene
    );
    return mainRoof;
  }

  public measure(
    po: { x: number; y: number },
    pt: { x: number; y: number }
  ): number {
    return Math.sqrt(Math.pow(po.x - pt.x, 2) + Math.pow(po.y - pt.y, 2));
  }

  public objectsOnWall(
    obj: { x: number; y: number },
    walls: { start: { x: number; y: number }; end: { x: number; y: number } }[]
  ): boolean {
    for (const wall of walls) {
      return this.objectOnWall(obj, wall);
    }

    return false;
  }

  public objectOnWall(
    obj: { x: number; y: number },
    wall: { start: { x: number; y: number }; end: { x: number; y: number } }
  ): boolean {
    const a = this.measure(wall.start, wall.end);
    const b = this.measure(wall.start, { x: obj.x, y: obj.y });
    const c = this.measure({ x: obj.x, y: obj.y }, wall.end);
    if (b + c === a) {
      return true;
    }
  }

  public buildCorners() {
    let corners = [];
    for (const wall of this.data.wallData) {
      corners.push(wall.start.x / 100);
      corners.push(wall.start.y / 100);
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
    let walls = [] as Wall[];
    for (const wb of wallData) {
      const wall = {
        corner: new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100),
        windowSpaces: [],
        doorSpaces: [],
      };
      for (const obj of objData) {
        if (this.objectOnWall(obj, wb)) {
          const objectFromBottom = (+obj.height + +obj.sillHeight) / 100;
          // console.log(objectFromBottom);
          const openSpace = {
            opening: { width: +obj.size / 100, height: +obj.height / 100 },
            left: this.measure(wb.start, { x: obj.x, y: obj.y }) / 100,
            top: height - objectFromBottom,
          };
          const box = BABYLON.MeshBuilder.CreateBox(
            'box',
            {
              width: openSpace.opening.width,
              height: openSpace.opening.height,
              depth: 0.2,
            },
            this.scene
          );
          box.position = new BABYLON.Vector3(
            wall.corner.x,
            openSpace.top,
            wall.corner.z
          );
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

  public createCorners(walls) {
    let corners = [];
    for (const wb of walls) {
      corners.push(new BABYLON.Vector3(wb.start.y / 100, 0, wb.start.x / 100));
    }
    return corners;
  }
}
