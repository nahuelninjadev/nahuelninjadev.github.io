<script setup>
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  DirectionalLight,
  PlaneGeometry,
  Mesh,
  DoubleSide,
  MeshStandardMaterial,
  AmbientLight,
  ShadowMaterial,
} from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.shadowMap.enabled = true;

const geometry = new PlaneGeometry(20, 20);
const material = new MeshStandardMaterial({
  color: 0xffffff,
  side: DoubleSide,
});

material.transparent = true;
material.opacity = 0.0;

const plane = new Mesh(geometry, material);
plane.rotateX(-Math.PI * 0.5);
plane.receiveShadow = false;

const shadowGeometry = plane.clone();
shadowGeometry.material = new ShadowMaterial({
  opacity: 0.5,
});
shadowGeometry.receiveShadow = true;
shadowGeometry.position.y += 0.1;

onMounted(() => {
  const container = document.querySelector("#container");
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const camera = new PerspectiveCamera(
    75,
    container.clientWidth / container.clientWidth,
    0.1,
    100
  );

  camera.position.set(-2, 4, 5);

  const constrols = new OrbitControls(camera, renderer.domElement);
  constrols.target.set(0, 2, 0);
  constrols.update();

  const directionalLight = new DirectionalLight("white", 3);
  directionalLight.position.set(0, 5, 5);
  directionalLight.castShadow = true;

  const ambientLight = new AmbientLight(0x404040, 30);

  const scene = new Scene();
  scene.add(ambientLight);
  scene.add(directionalLight);
  scene.add(shadowGeometry);

  var developer = null;

  const mtlLoader = new MTLLoader();

  mtlLoader.load("/assets/developer.mtl", function (materials) {
    materials.preload();
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("/assets/developer.obj", function (obj) {
      developer = obj;
      developer.castShadow = true;
      scene.add(developer);

      developer.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });

      animate();
    });
  });

  function animate() {
    requestAnimationFrame(animate);
    constrols.update();
    developer.rotation.y += 0.002;
    renderer.render(scene, camera);
  }

  function setSize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  }

  setSize();

  window.addEventListener("resize", function () {
    setSize();
  });
});
</script>

<template>
  <div
    class="banner min-h-96 w-2/3 lg:w-2/4 aspect-video mx-auto rounded overflow-hidden flex items-center justify-center"
    id="container"
  ></div>
</template>
