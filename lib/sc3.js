

sc1 = {
	
	setup:function(){
	

		// var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
		//new THREE.MeshNormalMaterial( );// facingMat2
		sc1.swirls = [];
		for(var i = 0 ; i < 5 ; i++){
			var material = new THREE.MeshNormalMaterial( );//facingMat2.clone();
			console.log(i);
			// swirl = Curves[i+""]({
			// 	material:material,
			// 	textureColor:skyTexture,
			// 	textureAlpha:texture});
			var swirl = makeSurface({
				surface:Curves[i+""],
				material:material,
				textureColor:skyTexture,
				textureAlpha:texture});
			swirl.position.set( 0, -5, 0 );
			swirl.scale.multiplyScalar( 1 );
			console.log(swirl);
			scene.add( swirl );
			sc1.swirls.push(swirl);
		}

		// swirl.position.set( 0, -20, 0 );
		// swirl.scale.multiplyScalar( 1 );
		// scene.add( swirl );

		loaded = true;
		count = 0;
	},

	draw:function(){
		count+=.00051;
		// swirl.update(count,camera);
		for(var i = 0 ; i < 5 ; i++){
			sc1.swirls[i].update((i*.3)+count*-2,camera);
			// swirl.position.set( 0, -5, 0 );
			// swirl.scale.multiplyScalar( 1 );
			// scene.add( swirl );
		}
	}
};


var Loft = function (params) {
	THREE.Object3D.call(this);
};
Loft.prototype = Object.create(THREE.Object3D.prototype);




// Curves["0"] = function(){

// 	var Curve_v01 = [[new THREE.Vector4(-0.2301210761,-1.545588544,-0.5478794303,1),
// 	new THREE.Vector4(0.1283365302,0.767154663,-2.675447009,1),
// 	new THREE.Vector4(2.14906381,2.834865706,-5.069763097,1),
// 	new THREE.Vector4(6.662728286,4.129466785,-7.825995547,1),
// 	new THREE.Vector4(10.359483,7.040754887,-8.231455868,1),
// 	new THREE.Vector4(12.13047624,9.438953473,-6.559623182,1),
// 	],[new THREE.Vector4(-0.1641661108,-1.499455213,-0.2338668317,1),
// 	new THREE.Vector4(0.6271819184,0.6345473297,-1.458784975,1),
// 	new THREE.Vector4(2.397393956,3.126316867,-3.016044858,1),
// 	new THREE.Vector4(6.034572565,5.277440698,-5.225188066,1),
// 	new THREE.Vector4(10.22429201,7.157360537,-6.402391592,1),
// 	new THREE.Vector4(12.10708946,9.383293309,-5.770487655,1),
// 	],[new THREE.Vector4(-0.01398408695,-1.537389005,0.07655379625,1),
// 	new THREE.Vector4(1.433763028,0.2583698046,-0.4363166497,1),
// 	new THREE.Vector4(3.840885373,2.212222307,-1.818904317,1),
// 	new THREE.Vector4(8.297256855,4.077325017,-4.091047545,1),
// 	new THREE.Vector4(11.37589065,6.885929814,-4.999330935,1),
// 	new THREE.Vector4(12.35989109,9.287297666,-5.005499708,1),
// 	],[new THREE.Vector4(0.06802138408,-1.563626377,0.2304246488,1),
// 	new THREE.Vector4(1.667250691,0.3067784805,0.5520087301,1),
// 	new THREE.Vector4(3.716472316,2.697023835,0.03169495275,1),
// 	new THREE.Vector4(7.056600918,5.075446562,-1.591945166,1),
// 	new THREE.Vector4(10.96381004,6.986873286,-3.483930981,1),
// 	new THREE.Vector4(12.43377745,9.237752691,-4.495618295,1),
// 	],[new THREE.Vector4(0.283117396,-1.698222837,0.447887912,1),
// 	new THREE.Vector4(2.359880349,0.07801333701,1.686677928,1),
// 	new THREE.Vector4(4.972533696,2.021455317,1.5455645,1),
// 	new THREE.Vector4(8.990360571,3.894597117,-0.03712489211,1),
// 	new THREE.Vector4(12.13074493,6.449294333,-2.010710845,1),
// 	new THREE.Vector4(12.87956526,9.11866858,-3.815398071,1),
// 	],];
// 	var degree1_v01 =4;
// 	var degree2_v01 =5;
// 	var knots1_v01 = [0,0,0,0,0,1,1,1,1,1,];
// 	var knots2_v01 = [0,0,0,0,0,0,1,1,1,1,1,1,];
// 	var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
// 	return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};

// }

makeSurface = function(params){
	var geometry = new THREE.ParametricGeometry( params.surface(), 20, 20 );
	var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );
	console.log(swirl);

	swirl.material.side = THREE.DoubleSide;
	// swirl.material.uniforms['camMat'].value = camera.matrixWorld;
	// swirl.material.depthTest = false;
	// swirl.material.uniforms['textureColor'].value = skyTexture;
	// swirl.material.uniforms['textureAlpha'].value = texture;

	swirl.update = function(offset,cam){
	// this.material.uniforms['camMat'].value = cam.matrixWorld;
	// this.material.uniforms['offset'].value = offset;

	}
	console.log(swirl);
	console.log("fu");

	return swirl;
}


