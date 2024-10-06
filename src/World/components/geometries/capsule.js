import { CapsuleGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCapsule() {
  // create a geometry
  const geometry = new CapsuleGeometry(1, 1, 4, 8);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const capsule = new Mesh(geometry, material);

  return capsule;
}

export { createCapsule };
