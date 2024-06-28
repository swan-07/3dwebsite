



//Avatar
//kirby.position.set(7, 7, 7)

scene.add(kirby);

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg')

//Moon
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  })
);

moon.position.z = 30;
moon.position.setX(-10);

scene.add(moon);

kirby.position.z = -5;
kirby.position.x = 2;

//const torgeo = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
//const tormat = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
//const torusKnot = new THREE.Mesh( torgeo, tormat ); 
//scene.add( torusKnot );



//scoll animation


function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05

  kirby.rotation.y += 0.01;
  kirby.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}

document.body.onscroll = moveCamera;
moveCamera();


function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  //controls.update();


  renderer.render(scene, camera);
}

animate()


