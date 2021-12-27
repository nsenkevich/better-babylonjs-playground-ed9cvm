export interface RoofData {
  apexes: BABYLON.Vector2[];
  planes: string[][];
}

export class RoofPlan {
  //The roofprint is the footprint of the roof, it follows the floor plan of the house but is extended by the overlap
  roofprint(
    corners: BABYLON.Vector3[],
    overlap: number,
    height: number
  ): BABYLON.Vector3[] {
    var outerData = [];
    var angle = 0;
    var direction = 0;
    var line = BABYLON.Vector3.Zero();
    corners[1].subtractToRef(corners[0], line);
    var nextLine = BABYLON.Vector3.Zero();
    corners[2].subtractToRef(corners[1], nextLine);

    var nbCorners = corners.length;
    for (var c = 0; c < nbCorners; c++) {
      angle =
        Math.PI -
        Math.acos(
          BABYLON.Vector3.Dot(line, nextLine) /
            (line.length() * nextLine.length())
        );
      direction = BABYLON.Vector3.Cross(nextLine, line).normalize().y;
      let lineNormal = new BABYLON.Vector3(line.z, 0, -1 * line.x).normalize();
      line.normalize();
      outerData[(c + 1) % nbCorners] = corners[(c + 1) % nbCorners]
        .add(lineNormal.scale(overlap))
        .add(line.scale((direction * overlap) / Math.tan(angle / 2)));
      outerData[(c + 1) % nbCorners].y = height;
      line = nextLine.clone();
      corners[(c + 3) % nbCorners].subtractToRef(
        corners[(c + 2) % nbCorners],
        nextLine
      );
    }

    return outerData;
  }

  //The roof floor (or top ceiling of the house) created from the roofprint of the house
  buildCeiling(
    roofprint: BABYLON.Vector3[],
    scene: BABYLON.Scene
  ): BABYLON.Mesh {
    var height = roofprint[0].y;
    var floor = BABYLON.MeshBuilder.CreatePolygon(
      'polygon',
      {
        shape: roofprint,
        updatable: true,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      },
      scene
    );
    var positions = floor.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    for (var p = 0; p < positions.length / 3; p++) {
      positions[3 * p + 1] = height + 0.01;
    }
    floor.updateVerticesData(BABYLON.VertexBuffer.PositionKind, positions);
    return floor;
  }

  //Creates the mesh roof structure
  buildRoof(
    roofprint: BABYLON.Vector3[],
    roofData: RoofData,
    rise: number,
    height: number,
    uvbase: number,
    scene: BABYLON.Scene
  ): BABYLON.Mesh {
    var positions = [];
    var uvs = [];
    let apexes = roofData.apexes;
    let planes = roofData.planes;
    var offset = roofprint.length;
    var vidx = [];
    var currentv = [];
    var v = [
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(0, 0, 0),
    ];
    var vint = new BABYLON.Vector3(0, 0, 0);
    var indices = [];
    var index = 0;
    var norm = new BABYLON.Vector3(0, 0, 0);
    var inPlane = new BABYLON.Vector3(0, 0, 0);
    var ax0 = new BABYLON.Vector3(0, 0, 0);
    var ax1 = new BABYLON.Vector3(0, 0, 0);
    var xvalues = [];
    var yvalues = [];
    var uvs = [];
    var uvset = new Set();
    for (var i = 0; i < planes.length; i++) {
      for (var idx = 0; idx < 3; idx++) {
        vidx[idx] = parseInt(planes[i][idx].substring(1));
        if (planes[i][idx].substring(0, 1).toLowerCase() == 'c') {
          positions.push(
            roofprint[vidx[idx]].x,
            roofprint[vidx[idx]].y,
            roofprint[vidx[idx]].z
          );
          indices.push(index);
        } else {
          positions.push(
            apexes[vidx[idx]].x,
            rise + height,
            apexes[vidx[idx]].y
          );
          indices.push(index);
        }
        currentv[idx] = index;
        v[idx].set(
          positions[3 * index],
          positions[3 * index + 1],
          positions[3 * index + 2]
        );
        index++;
      }

      if (planes[i].length == 4) {
        if (planes[i][0].substring(0, 1).toLowerCase() == 'c') {
          positions.push(
            roofprint[vidx[0]].x,
            roofprint[vidx[0]].y,
            roofprint[vidx[0]].z
          );
          indices.push(index);
        } else {
          positions.push(apexes[vidx[0]].x, rise + height, apexes[vidx[0]].y);
          indices.push(index);
        }
        currentv[idx] = index;
        v[idx].set(
          positions[3 * index],
          positions[3 * index + 1],
          positions[3 * index + 2]
        );
        index++;
        for (var idx = 2; idx < 4; idx++) {
          vidx[idx] = parseInt(planes[i][idx].substring(1));
          if (planes[i][idx].substring(0, 1).toLowerCase() == 'c') {
            positions.push(
              roofprint[vidx[idx]].x,
              roofprint[vidx[idx]].y,
              roofprint[vidx[idx]].z
            );
            indices.push(index);
          } else {
            positions.push(
              apexes[vidx[idx]].x,
              rise + height,
              apexes[vidx[idx]].y
            );
            indices.push(index);
          }
          currentv[idx] = index;
          v[idx].set(
            positions[3 * index],
            positions[3 * index + 1],
            positions[3 * index + 2]
          );
          index++;
        }
      }
      ax0 = v[1].subtract(v[0]).normalize();

      if (BABYLON.Vector3.Dot(ax0, BABYLON.Axis.Y) > 0) {
        vint = v[1].subtract(v[2]);
        vint.y = 0;
        ax0 = v[0].add(vint).normalize();
      }
      ax1 = v[2].subtract(v[0]).normalize();
      norm = BABYLON.Vector3.Cross(ax0, ax1).normalize();
      inPlane = BABYLON.Vector3.Cross(norm, ax0).normalize();
      xvalues[0] = 0;
      yvalues[0] = 0;
      xvalues[1] = BABYLON.Vector3.Dot(v[1].subtract(v[0]), ax0);
      yvalues[1] = BABYLON.Vector3.Dot(v[1].subtract(v[0]), inPlane);
      xvalues[2] = BABYLON.Vector3.Dot(v[2].subtract(v[0]), ax0);
      yvalues[2] = BABYLON.Vector3.Dot(v[2].subtract(v[0]), inPlane);

      let minX = Math.min(xvalues[0], xvalues[1], xvalues[2]);
      if (planes[i].length == 4) {
        xvalues[3] = BABYLON.Vector3.Dot(v[3].subtract(v[0]), ax0);
        yvalues[3] = BABYLON.Vector3.Dot(v[3].subtract(v[0]), inPlane);
        minX = Math.min(minX, xvalues[3]);
      }
      for (var idx = 0; idx < 3; idx++) {
        if (minX < 0) {
          xvalues[idx] += Math.abs(minX);
        }
        uvs.push(xvalues[idx] / uvbase, yvalues[idx] / uvbase);
      }
      if (planes[i].length == 4) {
        uvs.push(xvalues[0] / uvbase, yvalues[0] / uvbase);
        uvs.push(xvalues[2] / uvbase, yvalues[2] / uvbase);
        if (minX < 0) {
          xvalues[3] += Math.abs(minX);
        }
        uvs.push(xvalues[3] / uvbase, yvalues[3] / uvbase);
      }
    }

    var roofMesh = new BABYLON.Mesh('roof', scene);

    var normals = [];

    var vertexData = new BABYLON.VertexData();
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);

    vertexData.positions = positions;
    vertexData.indices = indices;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    vertexData.applyToMesh(roofMesh);

    return roofMesh;
  }
}
