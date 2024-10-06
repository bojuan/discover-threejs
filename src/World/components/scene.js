import { Color, Scene } from 'three';

function createScene(colorScene = "skyblue") {
  const scene = new Scene();

  scene.background = new Color(colorScene);

  return scene;
}

export { createScene };
