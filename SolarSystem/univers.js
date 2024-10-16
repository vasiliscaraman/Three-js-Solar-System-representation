import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 2000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new OrbitControls(camera, renderer.domElement);

const texturaSoare = new THREE.TextureLoader().load( "sun.jpg" );
var soareGeometry = new THREE.SphereGeometry(50, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
//radius, width, height, piStart, piLength, thetaStart thetaLength
var materialSoare = new THREE.MeshBasicMaterial({ map: texturaSoare });
var soare = new THREE.Mesh(soareGeometry, materialSoare);
soare.position.x = -120;
scene.add(soare);

var texturaMercur = new THREE.TextureLoader().load("mercury.jpg");
var mercurGeometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialMercur = new THREE.MeshBasicMaterial({ map: texturaMercur });
var mercur = new THREE.Mesh(mercurGeometry, materialMercur);
mercur.position.x = -50;
scene.add(mercur);

var texturaVenus = new THREE.TextureLoader().load("venus.jpg");
var venusGeometry = new THREE.SphereGeometry(4, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialVenus = new THREE.MeshBasicMaterial({ map: texturaVenus });
var venus = new THREE.Mesh(venusGeometry, materialVenus);
venus.position.x = -35;
scene.add(venus);

var texturaPamant = new THREE.TextureLoader().load("terra.jpg");
var PamantGeometry = new THREE.SphereGeometry(4.5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialPamant = new THREE.MeshBasicMaterial({ map: texturaPamant });
var Pamant = new THREE.Mesh(PamantGeometry, materialPamant);
Pamant.position.x = -20;
scene.add(Pamant);

var texturaMarte = new THREE.TextureLoader().load("mars.jpg");
var MarteGeometry = new THREE.SphereGeometry(3.8, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialMarte = new THREE.MeshBasicMaterial({ map: texturaMarte });
var Marte = new THREE.Mesh(MarteGeometry, materialMarte);
Marte.position.x = -5;
scene.add(Marte);

var texturaJupiter = new THREE.TextureLoader().load("jupiter.jpg");
var JupiterGeometry = new THREE.SphereGeometry(10, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialJupiter = new THREE.MeshBasicMaterial({ map: texturaJupiter });
var Jupiter = new THREE.Mesh(JupiterGeometry, materialJupiter);
Jupiter.position.x = 15;
scene.add(Jupiter);

var texturaInele = new THREE.TextureLoader().load("rings.jpg");
const IneleGeometry = new THREE.RingGeometry( 13, 17, 32, 1, 0, 2 * Math.PI );
const materialInele = new THREE.MeshBasicMaterial( { map: texturaInele,side: THREE.DoubleSide } );
const inele = new THREE.Mesh( IneleGeometry, materialInele );
scene.add( inele );
inele.position.x = 45;
inele.rotateX(30);

var texturaSaturn = new THREE.TextureLoader().load("saturn.jpg");
var SaturnGeometry = new THREE.SphereGeometry(8, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialSaturn = new THREE.MeshBasicMaterial({ map: texturaSaturn });
var Saturn = new THREE.Mesh(SaturnGeometry, materialSaturn);
Saturn.position.x = 45;
scene.add(Saturn);

var texturaUranus = new THREE.TextureLoader().load("uranus.jpg");
var UranusGeometry = new THREE.SphereGeometry(4.8, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialUranus = new THREE.MeshBasicMaterial({ map: texturaUranus });
var Uranus = new THREE.Mesh(UranusGeometry, materialUranus);
Uranus.position.x = 75;
scene.add(Uranus);

var texturaNeptun = new THREE.TextureLoader().load("neptune.jpg");
var NeptunGeometry = new THREE.SphereGeometry(4.8, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialNeptun = new THREE.MeshBasicMaterial({ map: texturaNeptun });
var Neptun = new THREE.Mesh(NeptunGeometry, materialNeptun);
Neptun.position.x = 90;
scene.add(Neptun);

var texturaPluto = new THREE.TextureLoader().load("pluto.jpg");
var PlutoGeometry = new THREE.SphereGeometry(0.3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialPluto = new THREE.MeshBasicMaterial({ map: texturaPluto });
var Pluto = new THREE.Mesh(PlutoGeometry, materialPluto);
Pluto.position.x = 100;
scene.add(Pluto);

var texturaLuna = new THREE.TextureLoader().load("moon.jpg");
var LunaGeometry = new THREE.SphereGeometry(1.05, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var materialLuna = new THREE.MeshBasicMaterial({ map: texturaLuna });
var Luna = new THREE.Mesh(LunaGeometry, materialLuna);
Luna.position.x = -15;
Luna.position.y = 5
scene.add(Luna);
controls.update();

camera.position.z =75;
var render = function () {
    requestAnimationFrame(render);

    soare.rotation.y += 0.001;
    mercur.rotation.y += 0.007;
    venus.rotation.y += 0.007;
    Pamant.rotation.y += 0.007;
    Marte.rotation.y += 0.007;
    Jupiter.rotation.y += 0.007;
    //inele.rotation.x -= 0.0001;
    //inele.rotation.y += 0.0001;
    inele.rotation.z += 0.001;
    Saturn.rotation.y += 0.007;
    Uranus.rotation.y += 0.007;
    Neptun.rotation.y += 0.007;
    Luna.rotation.y += 0.007;

    controls.update();
    renderer.render(scene, camera);
};

render();