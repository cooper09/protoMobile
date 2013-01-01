 var camera, scene, renderer, cube, material, mesh;
	  
 	function init() {
		
		 console.log("in init");
		 
		 try {
			scene = THREE.Scene();
		 	console.log("in init alpha SCENE: "+ scene );
		 } catch (e) {
			console.log("Oh Oh..we have a problem: "+ e ); 
		 }
		camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,1,10000 );
		 console.log("in init 3");
		camera.position.z = 1000;
		 console.log("in init 4");
		
		scene.add(camera);
		
		 console.log("in init 5");
		cube = new THREE.CubeGeometry(300,300,300);
		material = new THREE.MeshBasicMaterial({color:0x0000FF, wireframe:true});
		mesh = new THREE.Mesh(cube, material);
		scene.add(mesh);
		
		renderer = new THREE.CanvasRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		
		//document.body.appendChild(renderer.domElement);
		$('#GLcontainer').append(renderer.domElement);
		
		 console.log("out init");
	}
	
	window.onload="init();"// JavaScript Document