// sc1 = {
	
// 	setup:function(){
		
// 		// var boxWidth = 5;

// 		// var loader = new THREE.TextureLoader();
// 		// loader.load('img/burst.png', onTextureLoaded);

// 		// function onTextureLoaded(texture) {
// 		//   texture.wrapS = THREE.RepeatWrapping;
// 		//   texture.wrapT = THREE.RepeatWrapping;
// 		//   texture.repeat.set(boxWidth, boxWidth);

// 		//   var geometry = new THREE.BoxGeometry(boxWidth, boxWidth, boxWidth);
// 		//   var material = new THREE.MeshBasicMaterial({
// 		//     map: texture,
// 		//     color: 0xFFFFFF,
// 		//     side: THREE.BackSide
// 		//   });


// 		//   var skybox = new THREE.Mesh(geometry, material);
// 		//   // scene.add(skybox);
// 		// }


// 		var sphGeo = new THREE.SphereGeometry(1,90,90);
// 		sphere1 = new THREE.Mesh(sphGeo,toyMat);
// 		console.log(sphere1.material.uniforms);
// 		// sphere1.material.uniforms['viewVector'].value = new THREE.Vector3().subVectors( camera.position, sphere1.position );

// 		// sphere1.material.uniforms['color'].value = new THREE.Vector3(.7,.8,.9);
// 		// sphere2 = new THREE.Mesh(sphGeo,simpleMat);
// 		// sphere3 = new THREE.Mesh(sphGeo,new THREE.MeshLambertMaterial( {color:0x999999}));
// 		plane = new THREE.Mesh(new THREE.PlaneGeometry( 2,2),toyMat);
// 		plane2 = plane.clone();
// 		sphere1.position.z = -5;
// 		// sphere2.position.x = 1;
// 		// sphere3.position.y = -1.8;
// 		plane.position.z=-2;
// 		plane2.position.z = -2;
// 		plane2.position.x = 1;
// 		scene.add(sphere1);
// 		// scene.add(plane2);
// 		// scene.add(sphere2);
// 		// scene.add(sphere3);
// 		// scene.add(plane);

// 		count=0;

// 	},

// 	draw:function(){

// 		// count++;
// 		// plane.material.uniforms['time'].value=count*.01;
// 		// sphere1.material.uniforms['camPos'].value = camera.position;
// 		// camera.updateMatrixWorld();
// 		// sphere1.material.uniforms['camMat'].value = camera.matrixWorld;


// 	}
// };

sc1 = {
	
	setup:function(){
		
		var sphGeo =  new THREE.PlaneGeometry( 3,3,1,1); new THREE.SphereGeometry(1,90,90);
		var loader = new THREE.TextureLoader();
		var texture = loader.load('img/burst.png');

		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;

		sphere1 = new THREE.Mesh(sphGeo, facingMat2);// new THREE.MeshBasicMaterial( {color:0xffffff, map:texture}));
		sphere1.material.side = THREE.DoubleSide;

		plane = new THREE.Mesh(new THREE.PlaneGeometry( 2,2),toyMat);
		// sphere1.position.z = -3;

		plane.position.y=2;
		scene.add(sphere1);

		bb = new THREE.Object3D();
		for(var i = 0 ; i < 10 ; i++){
			var sp = sphere1.clone();
			sp.rotation.x = Math.random()*100;
			sp.rotation.y = Math.random()*100;
			sp.rotation.z = Math.random()*100;
			bb.add(sp);
		}
		scene.add(bb);

		scene.add(plane);
		sphere1.material.uniforms['camMat'].value = camera.matrixWorld;
		sphere1.material.depthTest = false;

		count=0;
		sphere1.material.uniforms['textureColor'].value = texture;
		bb.position.z = -3;
	},

	draw:function(){
		count+=.01;
		bb.rotation.y=count;
		// sphere1.rotation.x=count;
		// count++;
		// plane.material.uniforms['time'].value=count*.01;
		// sphere1.material.uniforms['camPos'].value = camera.position;
		// camera.updateMatrixWorld();
		// sphere1.material.uniforms['camMat'].value = camera.matrixWorld;


	}
};
