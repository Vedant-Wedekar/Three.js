const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry2 = new THREE.BoxGeometry( 8, 1, 9 );

const material = new THREE.MeshBasicMaterial( { color: "green" } );
const material2 = new THREE.MeshBasicMaterial( { color: "white" } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry2, material2 );



// camera.position.z = 5;
// camera.rotation.y = 3;
// cube.scale.z = 6; 

//MATH.PI
// camera.rotation.y = MATH.PI / 2; =90 DEGREES 

cube.position.x = 0;
cube.scale.z = 6; 
cube2.position.x = 2;
cube2.scale.z = 6; 
scene.add( cube );
scene.add( cube2 );

const canvas = document.querySelector("canvas");
let  renderer = new THREE.WebGLRenderer({canvas ,antialias:true });
renderer.setSize( window.innerWidth, window.innerHeight );	
renderer.render( scene, camera );

const clock = new THREE.Clock();
function animate() {
    window.requestAnimationFrame(animate);
    renderer.render( scene, camera );
    cube.rotation.x = clock.getElapsedTime();
    cube2.rotation.x = clock.getElapsedTime();
cube.rotation.y += 0.01;
}
animate();