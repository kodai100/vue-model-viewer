import { Engine, Scene, Color4, HDRCubeTexture, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";


var engine : Engine;
var scene : Scene;

const createScene = (canvas: HTMLCanvasElement) : void => {

  engine = new Engine(canvas);
  scene = new Scene(engine);

  scene.clearColor = new Color4(0.1, 0.1, 0.1, 1.0);

  scene.createDefaultCameraOrLight(true, true, true);

  engine.runRenderLoop(() => {
    scene.render();
  });
  
};

const loadModel = async (modelUrl: string) => {
  // SceneLoader.Append("scenes/", modelUrl, scene, function (scene) {
  //   // Create a default arc rotate camera and light.
  //   scene.createDefaultCameraOrLight(true, true, true);
  // });

  await SceneLoader.AppendAsync(modelUrl, undefined, scene, undefined, ".glb");

  scene.createDefaultCameraOrLight(true, true, true);

}

const resetEnvironment = (environmentUrl: string) : void => {
  const hdrTexture = new HDRCubeTexture(environmentUrl, scene, 128, false, true, false, true);
  // const hdrTexture = CubeTexture.CreateFromPrefilteredData(environmentUrl, scene);
  const currentSkybox = scene.createDefaultSkybox(hdrTexture, true);
}

export { createScene };
export { resetEnvironment };
export { loadModel };