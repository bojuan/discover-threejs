import { World } from "./World/World.js";

let isWorldCreated = false;

function createWorld() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

const handleButtonClick = () => {
  if (!isWorldCreated) {
    createWorld();
    isWorldCreated = true
  }
};

const main = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", handleButtonClick);
};

main();
