import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };