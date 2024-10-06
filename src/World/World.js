import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createCapsule } from "./components/geometries/capsule.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene("#FFE4C4");
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    scene.add(cube);

    const cube2 = createCube();
    cube2.position.set(4, 0, 0)
    scene.add(cube2);

    const capsule = createCapsule();
    capsule.position.set(-4, 0, 0);
    scene.add(capsule);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
