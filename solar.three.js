import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
let controls;

const body = document.querySelector('body');
const cursor = document.querySelector('.rounded');

let selectedObject = null;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();


let group;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
controls = new OrbitControls(camera, renderer.domElement);
window.addEventListener('resize', onWindowResize);
document.addEventListener('pointermove', onPointerMove);

controls.enableZoom = false;
controls.enablePan = false;

const loadTexture = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => resolve(texture),
      undefined,
      (err) => reject(err)
    );
  });
};

group = new THREE.Group();
scene.add(group);

const initScale = new THREE.Vector3(1, 1, 1);
const targetScale = new THREE.Vector3(1.2, 1.2, 1.42);
const scaleSpeed = 0.1;

let makemake;
let eris;
let haumea;
let sky;

init();

async function init() {
  async function starySky() {
    const map = await loadTexture(`https://solartextures.b-cdn.net/8k_stars_milky_way.jpg`);
    const sphereGeometry = new THREE.SphereGeometry(30, 32, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map, side: THREE.BackSide });
    const sky = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sky)
  };
  starySky();

  const makemakeTexture = await loadTexture(`https://solartextures.b-cdn.net/2k_makemake_fictional.jpg`);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: makemakeTexture });
  makemake = new THREE.Mesh(geometry, material);

  makemake.position.x = -3;
  makemake.position.y = 5.5;
  makemake.position.z = -11.5;
  makemake.name = "makemake";
  makemake.userData.clickable = true;

  const erisTexture = await loadTexture(`https://solartextures.b-cdn.net/2k_eris_fictional.jpg`);

  const erisGeometry = new THREE.SphereGeometry(1, 20, 32);
  const erisMaterial = new THREE.MeshBasicMaterial({ map: erisTexture });
  eris = new THREE.Mesh(erisGeometry, erisMaterial);

  eris.position.x = 5;
  eris.position.y = 0.5;
  eris.position.z = 4.5;
  eris.name = "eris";
  eris.userData.clickable = true;

  const haumeaTexture = await loadTexture(`https://solartextures.b-cdn.net/2k_haumea_fictional.jpg`);

  const haumeaGeometry = new THREE.SphereGeometry(1, 20, 32);
  const haumeaMaterial = new THREE.MeshBasicMaterial({ map: haumeaTexture });
  haumea = new THREE.Mesh(haumeaGeometry, haumeaMaterial);

  haumea.position.x = -15.5;
  haumea.position.y = 1.25;
  haumea.position.z = 4.5;
  haumea.name = "haumea";
  haumea.userData.clickable = true;

  const geometryTorus = new THREE.TorusGeometry(13, 0.01, 30, 200);
  const materialTorus = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const torus = new THREE.Mesh(geometryTorus, materialTorus);

  torus.rotation.x = 90;
  torus.material.opacity = 0.2;

  const geometryTorus2 = new THREE.TorusGeometry(7, 0.01, 30, 200);
  const materialTorus2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const torus2 = new THREE.Mesh(geometryTorus2, materialTorus2);

  torus2.rotation.x = 80;
  torus2.material.opacity = 0.2;

  const geometryTorus3 = new THREE.TorusGeometry(16, 0.01, 30, 200);
  const materialTorus3 = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const torus3 = new THREE.Mesh(geometryTorus3, materialTorus3);

  torus3.rotation.x = -5;
  torus3.material.opacity = 0.2;

  scene.add(makemake, eris, haumea, torus, torus2, torus3);
  console.log(scene.children);
  group.add(makemake, eris, haumea);


  makemake.addEventListener('click', () => {
    console.error('Clicked makemake');
    showPopup(makemake.name);
  });

  eris.addEventListener('click', () => {
    console.error('Clicked eris');
    showPopup(eris.name);
  });

  haumea.addEventListener('click', () => {
    console.error('Clicked haumea');
    showPopup(haumea.name);
  });

  document.addEventListener('click', onDocumentClick, false);

  camera.position.z = 5;

  animate();
};

function onDocumentClick(event) {
  event.preventDefault();

  // Calculate normalized device coordinates from the click position
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Cast a ray from the camera through the click position
  raycaster.setFromCamera(pointer, camera);

  // Check for intersections with the spheres
  const intersects = raycaster.intersectObjects([makemake, eris, haumea], true);

  if (intersects.length > 0) {
    const selectedSphere = intersects[0].object;

    // Handle the click action for the selected sphere
    showPopup(selectedSphere.name);
  }
}

let sound = new Howl({
  src: ['medias/song/planetHover.wav'],
  volume: 0.3
});

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObject(group, true);

  if (intersects.length > 0) {
    const res = intersects.filter(function (res) {
      return res && res.object;
    })[0];

    if (res && res.object) {
      if (selectedObject !== res.object) {
        // Réinitialiser la taille des autres sphères à leur échelle d'origine
        group.children.forEach((child) => {
          if (child !== selectedObject) {
            child.scale.copy(initScale);
          }
        });

        selectedObject = res.object;

        // Démarrer l'animation de transition de la taille
        animateScale(targetScale);
        sound.play();

      }
    } else {
      // Si le curseur ne survole aucun objet, réinitialiser la taille de la sphère sélectionnée
      if (selectedObject) {
        // Démarrer l'animation de transition de la taille
        animateScale(initScale);
        sound.stop();
        selectedObject = null;
      }
    }
  } else {
    // Si le curseur ne survole aucun objet, réinitialiser la taille de la sphère sélectionnée
    if (selectedObject) {
      // Démarrer l'animation de transition de la taille
      animateScale(initScale);
      selectedObject = null;

    }
  }
}

function animateScale(target) {
  if (selectedObject) {
    const currentScale = selectedObject.scale;

    const step = target.clone().sub(currentScale).multiplyScalar(scaleSpeed);

    selectedObject.scale.add(step);

    if (step.lengthSq() > 0.0001) {
      requestAnimationFrame(() => animateScale(target));
    }
  }
}

function animate() {
  requestAnimationFrame(animate);

  makemake.rotation.y += 0.005;
  eris.rotation.y += 0.005;
  haumea.rotation.y += 0.005;
  controls.update();

  renderer.render(scene, camera);
}
const makeMakeDesc = "On makemake, u could discover some web's project I made. From simple HTML/CSS website to complete website with data bases."
const erisDesc = "On eris, u could discover some amazing audio-visual's projects I made."
const haumeaDesc = " On haumea, u could discover some communication's projects I made."

function adaptPopUpContent(planetName){
  if(planetName == "makemake"){
    return makeMakeDesc;
  }else if(planetName == "eris"){
    return erisDesc;
  }else if(planetName == "haumea"){
    return haumeaDesc;
  }
}
function showPopup(planetName) {
  const dynamicContent = `
  <img src="./medias/images/cross.png" class="closeTravelPopUp">
  <div class="travelComplete">
    <div class="travelToPlanete">
      <p class="travelPopUpTitle">You are about to travel!</p>`+
      adaptPopUpContent(planetName)
      +`
      <p>Do you want to travel to ${planetName}?</p>
      <a href="./planet.html?name=${planetName}"><button>Travel</button></a>
    </div>
  </div>
  `;

  const popupContainer = document.createElement('div');
  popupContainer.innerHTML = dynamicContent;
  popupContainer.classList.add('popup-container');

  body.appendChild(popupContainer);

  const closeButton = document.querySelector('.closeTravelPopUp');
  closeButton.addEventListener('click', () => {
    body.removeChild(popupContainer);
  });

  popupContainer.appendChild(closeButton);
  const popupLink = popupContainer.querySelector('a');
  popupLink.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop the event from propagating to the 3D objects
  });
}