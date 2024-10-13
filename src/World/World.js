import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createCapsule } from "./components/geometries/capsule.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

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

    const light = createLights();

    const cube = createCube();
    cube.rotation.set(-0.5, -0.1, 0.8);

    const cube2 = createCube();
    cube2.position.set(4, 0, 0);
    cube2.rotation.set(-0.5, -0.1, 0.8);

    const capsule = createCapsule();
    capsule.position.set(-4, 0, 0);

    scene.add(light, cube, cube2, capsule);

    const resizer = new Resizer(container, camera, renderer);

    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);

    
  }
}

export { World };
