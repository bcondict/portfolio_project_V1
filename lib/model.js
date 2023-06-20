import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel(
  scene,
  glbPath,
  options = { recieveShadow: true, castShadow: true }
) {
  const { recieveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene
        obj.name = 'bcondict'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = recieveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = recieveShadow
          }
        })

        resolve(obj)
      },
      undefined,
      (error) => {
        reject(error)
      }
    )
  })
}
