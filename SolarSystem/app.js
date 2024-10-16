let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 2, 2, 2 ); 

    //const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture = new THREE.TextureLoader().load('texture.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    cube = new THREE.Mesh( geometry, material );

    scene.add( cube );

    camera.position.z = 5;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
}

// se apeleaza functia onWindowResize() cand facem resize la pagina
window.addEventListener('resize', onWindowResize, false); 

init();
animate();
