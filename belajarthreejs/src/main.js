import * as THREE from "three";

//setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);


//Geometry
const cincinGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const cincinMaterial = new THREE.MeshStandardMaterial({color: 0xff6347});
const cincin = new THREE.Mesh(cincinGeometry, cincinMaterial);
cincin.position.z = -50;
scene.add(cincin);

//Lightning
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(50,50,50);
scene.add(pointLight);

//Renderer
function animate(){
  requestAnimationFrame(animate);

  renderer.render(scene, camera)
}
animate();