let scene, camera, renderer,blat,masa,picior1,picior2,picior3,picior4;

function init() {
    scene = new THREE.Scene();

    camera=new THREE.PerspectiveCamera(95,window.innerWidth/window.innerHeight,0.1,1000);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 3, 3, 0.2 ); 
    const geometry2 = new THREE.BoxGeometry( 0.2, 0.2, 2 ); 
    const texture = new THREE.TextureLoader().load('moon.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    
    blat = new THREE.Mesh( geometry, material );
    picior1=new THREE.Mesh( geometry2, material );
    picior1.position.set(1.3,1.3,1)

    picior2=picior1.clone()
    picior2.position.set(-1.3,-1.3,1)

    picior3=picior1.clone()
    picior3.position.set(1.3,-1.3,1)

    picior4=picior1.clone()
    picior4.position.set(-1.3,1.3,1)

    masa=new THREE.Group();
    masa.add(blat)
    masa.add(picior1)
    masa.add(picior2)
    masa.add(picior3)
    masa.add(picior4)
    scene.add(masa)

    camera.position.z = 5;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    masa.rotation.x += 0.005;
    masa.rotation.y += 0.005;
    //masa.rotation.z -= 0.05;

    renderer.render(scene, camera);
}

// se apeleaza functia onWindowResize() cand facem resize la pagina
window.addEventListener('resize', onWindowResize, false); 

init();
animate();
