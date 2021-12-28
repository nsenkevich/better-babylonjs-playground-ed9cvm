export class Bridge {
  data = {
    "objData": [
        {
            "family": "inWall",
            "class": "doorWindow",
            "type": "simple",
            "x": 573,
            "y": 458,
            "angle": 360,
            "angleSign": 1,
            "limit": [
                {
                    "x": 543,
                    "y": 458
                },
                {
                    "x": 603,
                    "y": 458
                }
            ],
            "hinge": "normal",
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "size": 60,
            "thick": 20,
            "width": "1.00",
            "fill": "#eee",
            "bbox": {
                "x": 543,
                "y": 388,
                "width": 60,
                "height": 80,
                "top": 388,
                "right": 603,
                "bottom": 468,
                "left": 543
            },
            "realBbox": [
                {
                    "x": 543,
                    "y": 448
                },
                {
                    "x": 603,
                    "y": 448
                },
                {
                    "x": 603,
                    "y": 468
                },
                {
                    "x": 543,
                    "y": 468
                }
            ],
            "params": {
                "bindBox": false,
                "move": false,
                "resize": true,
                "resizeLimit": {
                    "width": {
                        "min": 40,
                        "max": 120
                    },
                    "height": {
                        "min": false,
                        "max": false
                    },
                    "columnHeight": {
                        "min": false,
                        "max": false
                    }
                },
                "rotate": false,
                "columnHeight": false,
                "beamHeight": false,
                "waistSlabThickness": false,
                "stepsBase": false,
                "stepsHeight": false,
                "slabFloorOffsetHeight": false,
                "typeColumn": false,
                "typeBeam": false,
                "typeSlabFloor": false,
                "demolish": false
            },
            "height": "200",
            "up": [
                {
                    "x": 543,
                    "y": 468,
                    "distance": 10
                },
                {
                    "x": 603,
                    "y": 468,
                    "distance": 10
                }
            ],
            "down": [
                {
                    "x": 543,
                    "y": 448,
                    "distance": 10
                },
                {
                    "x": 603,
                    "y": 448,
                    "distance": 10
                }
            ],
            "sillHeight": "20",
            "area": "3.33"
        },
        {
            "family": "inWall",
            "class": "doorWindow",
            "type": "flap",
            "x": 1347,
            "y": 463,
            "angle": 270,
            "angleSign": 0,
            "limit": [
                {
                    "x": 1347,
                    "y": 433
                },
                {
                    "x": 1347,
                    "y": 493
                }
            ],
            "hinge": "normal",
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "size": 60,
            "thick": 20,
            "width": "1.00",
            "fill": "#eee",
            "bbox": {
                "x": 1307,
                "y": 433,
                "width": 50,
                "height": 60,
                "top": 433,
                "right": 1357,
                "bottom": 493,
                "left": 1307
            },
            "realBbox": [
                {
                    "x": 1337,
                    "y": 493
                },
                {
                    "x": 1337,
                    "y": 433
                },
                {
                    "x": 1357,
                    "y": 433
                },
                {
                    "x": 1357,
                    "y": 493
                }
            ],
            "params": {
                "bindBox": false,
                "move": false,
                "resize": true,
                "resizeLimit": {
                    "width": {
                        "min": 20,
                        "max": 100
                    },
                    "height": {
                        "min": false,
                        "max": false
                    },
                    "columnHeight": {
                        "min": false,
                        "max": false
                    }
                },
                "rotate": false,
                "columnHeight": false,
                "beamHeight": false,
                "waistSlabThickness": false,
                "stepsBase": false,
                "stepsHeight": false,
                "slabFloorOffsetHeight": false,
                "typeColumn": false,
                "typeBeam": false,
                "typeSlabFloor": false,
                "demolish": false
            },
            "height": "140",
            "up": [
                {
                    "x": 1337,
                    "y": 433,
                    "distance": 10
                },
                {
                    "x": 1337,
                    "y": 493,
                    "distance": 10
                }
            ],
            "down": [
                {
                    "x": 1357,
                    "y": 433,
                    "distance": 10
                },
                {
                    "x": 1357,
                    "y": 493,
                    "distance": 10
                }
            ],
            "sillHeight": "40",
            "area": "2.33"
        }
    ],
    "wallData": [
        {
            "thick": 20,
            "start": {
                "x": 447,
                "y": 458
            },
            "end": {
                "x": 447,
                "y": 744
            },
            "type": "normal",
            "parent": 5,
            "child": 1,
            "angle": 1.5707963267948966,
            "equations": {
                "up": {
                    "A": "v",
                    "B": 457
                },
                "down": {
                    "A": "v",
                    "B": 437
                },
                "base": {
                    "A": "v",
                    "B": 447
                }
            },
            "coords": [
                {
                    "x": 457,
                    "y": 468
                },
                {
                    "x": 437,
                    "y": 448
                },
                {
                    "x": 437,
                    "y": 754
                },
                {
                    "x": 457,
                    "y": 734
                }
            ],
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "surface_area": "NaN",
            "transverse_area": "NaN"
        },
        {
            "thick": 20,
            "start": {
                "x": 447,
                "y": 744
            },
            "end": {
                "x": 1347,
                "y": 744
            },
            "type": "normal",
            "parent": 0,
            "child": 2,
            "angle": 0,
            "equations": {
                "up": {
                    "A": "h",
                    "B": 734
                },
                "down": {
                    "A": "h",
                    "B": 754
                },
                "base": {
                    "A": "h",
                    "B": 744
                }
            },
            "coords": [
                {
                    "x": 457,
                    "y": 734
                },
                {
                    "x": 437,
                    "y": 754
                },
                {
                    "x": 1357,
                    "y": 754
                },
                {
                    "x": 1337,
                    "y": 734
                }
            ],
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "surface_area": "NaN",
            "transverse_area": "NaN"
        },
        {
            "thick": 20,
            "start": {
                "x": 1347,
                "y": 744
            },
            "end": {
                "x": 1347,
                "y": 144
            },
            "type": "normal",
            "parent": 1,
            "child": 3,
            "angle": -1.5707963267948966,
            "equations": {
                "up": {
                    "A": "v",
                    "B": 1337
                },
                "down": {
                    "A": "v",
                    "B": 1357
                },
                "base": {
                    "A": "v",
                    "B": 1347
                }
            },
            "coords": [
                {
                    "x": 1337,
                    "y": 734
                },
                {
                    "x": 1357,
                    "y": 754
                },
                {
                    "x": 1357,
                    "y": 134
                },
                {
                    "x": 1337,
                    "y": 154
                }
            ],
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "surface_area": "NaN",
            "transverse_area": "NaN"
        },
        {
            "thick": 20,
            "start": {
                "x": 1347,
                "y": 144
            },
            "end": {
                "x": 1020,
                "y": 144
            },
            "type": "normal",
            "parent": 2,
            "child": 4,
            "angle": 3.141592653589793,
            "equations": {
                "up": {
                    "A": "h",
                    "B": 154
                },
                "down": {
                    "A": "h",
                    "B": 134
                },
                "base": {
                    "A": "h",
                    "B": 144
                }
            },
            "coords": [
                {
                    "x": 1337,
                    "y": 154
                },
                {
                    "x": 1357,
                    "y": 134
                },
                {
                    "x": 1010,
                    "y": 134
                },
                {
                    "x": 1030,
                    "y": 154
                }
            ],
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "surface_area": "NaN",
            "transverse_area": "NaN"
        },
        {
            "thick": 20,
            "start": {
                "x": 1020,
                "y": 144
            },
            "end": {
                "x": 1020,
                "y": 458
            },
            "type": "normal",
            "parent": 3,
            "child": 5,
            "angle": 1.5707963267948966,
            "equations": {
                "up": {
                    "A": "v",
                    "B": 1030
                },
                "down": {
                    "A": "v",
                    "B": 1010
                },
                "base": {
                    "A": "v",
                    "B": 1020
                }
            },
            "coords": [
                {
                    "x": 1030,
                    "y": 154
                },
                {
                    "x": 1010,
                    "y": 134
                },
                {
                    "x": 1010,
                    "y": 448
                },
                {
                    "x": 1030,
                    "y": 468
                }
            ],
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "surface_area": "NaN",
            "transverse_area": "NaN"
        },
        {
            "thick": 20,
            "start": {
                "x": 1020,
                "y": 458
            },
            "end": {
                "x": 447,
                "y": 458
            },
            "type": "normal",
            "parent": 4,
            "child": 0,
            "angle": 3.141592653589793,
            "equations": {
                "up": {
                    "A": "h",
                    "B": 468
                },
                "down": {
                    "A": "h",
                    "B": 448
                },
                "base": {
                    "A": "h",
                    "B": 458
                }
            },
            "coords": [
                {
                    "x": 1030,
                    "y": 468
                },
                {
                    "x": 1010,
                    "y": 448
                },
                {
                    "x": 437,
                    "y": 448
                },
                {
                    "x": 457,
                    "y": 468
                }
            ],
            "graph": {
                "0": {},
                "context": {},
                "length": 1
            },
            "surface_area": "NaN",
            "transverse_area": "NaN"
        }
    ],
    "roomData": [
        {
            "coords": [
                {
                    "x": 447,
                    "y": 744
                },
                {
                    "x": 1347,
                    "y": 744
                },
                {
                    "x": 1347,
                    "y": 144
                },
                {
                    "x": 1020,
                    "y": 144
                },
                {
                    "x": 1020,
                    "y": 458
                },
                {
                    "x": 447,
                    "y": 458
                },
                {
                    "x": 447,
                    "y": 744
                }
            ],
            "coordsOutside": [
                {
                    "x": 1357,
                    "y": 754
                },
                {
                    "x": 1357,
                    "y": 134
                },
                {
                    "x": 1010,
                    "y": 134
                },
                {
                    "x": 1010,
                    "y": 448
                },
                {
                    "x": 437,
                    "y": 448
                },
                {
                    "x": 437,
                    "y": 754
                },
                {
                    "x": 1357,
                    "y": 754
                }
            ],
            "coordsInside": [
                {
                    "x": 1337,
                    "y": 734
                },
                {
                    "x": 1337,
                    "y": 154
                },
                {
                    "x": 1030,
                    "y": 154
                },
                {
                    "x": 1030,
                    "y": 468
                },
                {
                    "x": 457,
                    "y": 468
                },
                {
                    "x": 457,
                    "y": 734
                },
                {
                    "x": 1337,
                    "y": 734
                }
            ],
            "inside": [],
            "way": [
                "0",
                "2",
                "3",
                "4",
                "5",
                "1",
                "0"
            ],
            "area": 330478,
            "surface": "",
            "name": "",
            "color": "gradientWhite",
            "showSurface": true,
            "action": "add"
        }
    ]
};

  public measure(
    po: { x: number; y: number },
    pt: { x: number; y: number }
  ): number {
    return Math.sqrt(Math.pow(po.x - pt.x, 2) + Math.pow(po.y - pt.y, 2));
  }

  public objectOnWall(
    obj: { x: number; y: number },
    walls: { start: { x: number; y: number }; end: { x: number; y: number } }[]
  ): boolean {
    for (const wall of walls) {
      const a = this.measure(wall.start, wall.end);
      const b = this.measure(wall.start, { x: obj.x, y: obj.y });
      const c = this.measure({ x: obj.x, y: obj.y }, wall.end);
      if (b + c === a) {
        return true;
      }
    }

    return false;
  }

  public buildCorners() {
    let corners = [];
    for (const wall of this.data.wallData) {
      corners.push(wall.start.x / 100);
      corners.push(wall.start.y / 100);
    }
    return corners;
  }
}
