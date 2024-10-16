var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 2000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

var sferaGeometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
//radius, width, height, piStart, piLength, thetaStart thetaLength
var materialSfera = new THREE.MeshBasicMaterial({color : 0xFF0000});
var sfera = new THREE.Mesh(sferaGeometry, materialSfera);
sfera.position.x = -30;
scene.add(sfera);

var sfera2 = sfera.clone();
sfera2.position.x = -15;
sfera2.position.y = 2.5;
scene.add(sfera2);

var sfera3 = sfera2.clone();
sfera3.position.x = -3;
sfera3.position.y = 5.5;
scene.add(sfera3);

var sfera4 = sfera3.clone();
sfera4.position.x = 5;
sfera4.position.y = -5;
scene.add(sfera4);

var sfera5geometry = new THREE.SphereGeometry(2, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialSfera5 = new THREE.MeshBasicMaterial({color : 0xFFFF00});
var sfera5 = new THREE.Mesh(sfera5geometry, materialSfera5);
sfera5.position.x = 10;
scene.add(sfera5);

var sfera6 = sfera5.clone();
sfera6.position.x = 16;
sfera6.position.y = 5.5;
scene.add(sfera6);

var sfera7geometry = new THREE.SphereGeometry(5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialSfera7 = new THREE.MeshBasicMaterial({color : 0x0000FF});
var sfera7 = new THREE.Mesh(sfera7geometry, materialSfera7);
sfera7.position.x = 28;
sfera7.position.y = -10;
scene.add(sfera7);

var sfera8 = sfera7.clone();
sfera8.position.x = 25;
sfera8.position.y = 10.5;
scene.add(sfera8);

camera.position.z =45;
var render = function () {
    requestAnimationFrame(render);

    sfera.rotation.y += 0.3;

    renderer.render(scene, camera);
};

render();