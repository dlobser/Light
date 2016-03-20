

sc1 = {
	
	setup:function(){
	

		// var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
		//new THREE.MeshNormalMaterial( );// facingMat2
		sc1.swirls = [];
		for(var i = 0 ; i < 5 ; i++){
			var material = facingMat2.clone();
			swirl = Curves[i+""]({
				material:material,
				textureColor:skyTexture,
				textureAlpha:texture});
			swirl.position.set( 0, -5, 0 );
			swirl.scale.multiplyScalar( 1 );
			scene.add( swirl );
			sc1.swirls.push(swirl);
		}

		swirl.position.set( 0, -5, 0 );
		swirl.scale.multiplyScalar( 1 );
		scene.add( swirl );

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

var Curves = {};

Curves["0"] = function(params){
	 Curve_v01 = [[new THREE.Vector4(-0.5043227968,-1.311750641,0.0041373991,1),
new THREE.Vector4(-2.059288947,0.6510889495,-0.9628750509,1),
new THREE.Vector4(-3.288060112,2.405968213,-3.320982809,1),
new THREE.Vector4(-3.997691404,3.504704228,-7.753055343,1),
new THREE.Vector4(-3.124833495,5.975532606,-10.7862357,1),
new THREE.Vector4(-1.241516063,8.01089871,-11.63802578,1),
],[new THREE.Vector4(-0.2365212568,-1.272596996,0.05353693674,1),
new THREE.Vector4(-0.9432763742,0.5385442782,-0.9625007049,1),
new THREE.Vector4(-1.595551628,2.653324633,-2.854189836,1),
new THREE.Vector4(-2.158063154,4.478996851,-6.421795464,1),
new THREE.Vector4(-1.732295628,6.074496549,-10.09070924,1),
new THREE.Vector4(-0.6294576113,7.963659581,-11.36537991,1),
],[new THREE.Vector4(0.05560056128,-1.304791642,0.03564766288,1),
new THREE.Vector4(0.119425733,0.2192800653,-1.266322018,1),
new THREE.Vector4(-0.190472622,1.877526876,-3.601800279,1),
new THREE.Vector4(-0.5384799788,3.460451184,-7.832900528,1),
new THREE.Vector4(-0.2595940179,5.8441316,-10.54278459,1),
new THREE.Vector4(0.05263757647,7.882187481,-11.31736607,1),
],[new THREE.Vector4(0.2028378346,-1.327059463,0.02084248238,1),
new THREE.Vector4(0.9706520665,0.2603648107,-1.131177554,1),
new THREE.Vector4(1.22244655,2.288980957,-2.907796941,1),
new THREE.Vector4(1.023927608,4.307563167,-6.053505009,1),
new THREE.Vector4(0.7974461608,5.929802955,-9.730928865,1),
new THREE.Vector4(0.4767824025,7.840138351,-11.21107899,1),
],[new THREE.Vector4(0.4428909055,-1.441292318,-0.07796809637,1),
new THREE.Vector4(2.084730703,0.06621040592,-1.309374664,1),
new THREE.Vector4(2.8158115,1.715621741,-3.406185818,1),
new THREE.Vector4(2.867820376,3.305368875,-7.07079708,1),
new THREE.Vector4(2.330175704,5.473556343,-10.17243803,1),
new THREE.Vector4(1.154507768,7.739070923,-11.34190414,1),
],];
var degree1_v01 =4;
var degree2_v01 =5;
var knots1_v01 = [0,0,0,0,0,1,1,1,1,1,];
var knots2_v01 = [0,0,0,0,0,0,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
getSurfacePoint = function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
	var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
	var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

	swirl.material.side = THREE.DoubleSide;
	swirl.material.uniforms['camMat'].value = camera.matrixWorld;
	swirl.material.depthTest = false;
	swirl.material.uniforms['textureColor'].value = skyTexture;
	swirl.material.uniforms['textureAlpha'].value = texture;

	swirl.update = function(offset,cam){
		this.material.uniforms['camMat'].value = cam.matrixWorld;
		this.material.uniforms['offset'].value = offset;

	}

	return swirl;
}


Curves["1"]  = function(params){
	
var Curve_v01 = [[new THREE.Vector4(-0.2301210761,-1.545588544,-0.5478794303,1),
new THREE.Vector4(0.1283365302,0.767154663,-2.675447009,1),
new THREE.Vector4(2.14906381,2.834865706,-5.069763097,1),
new THREE.Vector4(6.662728286,4.129466785,-7.825995547,1),
new THREE.Vector4(10.359483,7.040754887,-8.231455868,1),
new THREE.Vector4(12.13047624,9.438953473,-6.559623182,1),
],[new THREE.Vector4(-0.1641661108,-1.499455213,-0.2338668317,1),
new THREE.Vector4(0.6271819184,0.6345473297,-1.458784975,1),
new THREE.Vector4(2.397393956,3.126316867,-3.016044858,1),
new THREE.Vector4(6.034572565,5.277440698,-5.225188066,1),
new THREE.Vector4(10.22429201,7.157360537,-6.402391592,1),
new THREE.Vector4(12.10708946,9.383293309,-5.770487655,1),
],[new THREE.Vector4(-0.01398408695,-1.537389005,0.07655379625,1),
new THREE.Vector4(1.433763028,0.2583698046,-0.4363166497,1),
new THREE.Vector4(3.840885373,2.212222307,-1.818904317,1),
new THREE.Vector4(8.297256855,4.077325017,-4.091047545,1),
new THREE.Vector4(11.37589065,6.885929814,-4.999330935,1),
new THREE.Vector4(12.35989109,9.287297666,-5.005499708,1),
],[new THREE.Vector4(0.06802138408,-1.563626377,0.2304246488,1),
new THREE.Vector4(1.667250691,0.3067784805,0.5520087301,1),
new THREE.Vector4(3.716472316,2.697023835,0.03169495275,1),
new THREE.Vector4(7.056600918,5.075446562,-1.591945166,1),
new THREE.Vector4(10.96381004,6.986873286,-3.483930981,1),
new THREE.Vector4(12.43377745,9.237752691,-4.495618295,1),
],[new THREE.Vector4(0.283117396,-1.698222837,0.447887912,1),
new THREE.Vector4(2.359880349,0.07801333701,1.686677928,1),
new THREE.Vector4(4.972533696,2.021455317,1.5455645,1),
new THREE.Vector4(8.990360571,3.894597117,-0.03712489211,1),
new THREE.Vector4(12.13074493,6.449294333,-2.010710845,1),
new THREE.Vector4(12.87956526,9.11866858,-3.815398071,1),
],];
var degree1_v01 =4;
var degree2_v01 =5;
var knots1_v01 = [0,0,0,0,0,1,1,1,1,1,];
var knots2_v01 = [0,0,0,0,0,0,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
getSurfacePoint = function(u, v) {return nurbsSurface_v01.getPoint(v,u);};





	var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
	var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

	swirl.material.side = THREE.DoubleSide;
	swirl.material.uniforms['camMat'].value = camera.matrixWorld;
	swirl.material.depthTest = false;
	swirl.material.uniforms['textureColor'].value = skyTexture;
	swirl.material.uniforms['textureAlpha'].value = texture;

	swirl.update = function(offset,cam){
		this.material.uniforms['camMat'].value = cam.matrixWorld;
		this.material.uniforms['offset'].value = offset;

	}

	return swirl;
}



Curves["2"]  = function(params){
	var Curve_v01 = [[new THREE.Vector4(-0.3212587308,-1.545588544,0.4999204014,1),
new THREE.Vector4(-2.277819153,0.767154663,1.409264657,1),
new THREE.Vector4(-5.395541411,2.834865706,1.099593563,1),
new THREE.Vector4(-10.22325148,4.129466785,-1.05985076,1),
new THREE.Vector4(-12.65082197,7.040754887,-3.877171301,1),
new THREE.Vector4(-12.27574243,9.438953473,-6.283570462,1),
],[new THREE.Vector4(-0.09979335752,-1.499455213,0.2677414662,1),
new THREE.Vector4(-1.557511494,0.6345473297,0.3091418891,1),
new THREE.Vector4(-3.843458156,3.126316867,-0.2680555289,1),
new THREE.Vector4(-7.723915747,5.277440698,-2.014890048,1),
new THREE.Vector4(-11.06672318,7.157360537,-4.801500115,1),
new THREE.Vector4(-11.61208123,9.383293309,-6.711163287,1),
],[new THREE.Vector4(0.07101568938,-1.537389005,-0.0318246802,1),
new THREE.Vector4(-1.171524703,0.2583698046,-0.9346542192,1),
new THREE.Vector4(-3.674170863,2.212222307,-2.135715765,1),
new THREE.Vector4(-8.07044338,4.077325017,-4.522066451,1),
new THREE.Vector4(-10.56242141,6.885929814,-6.545185397,1),
new THREE.Vector4(-11.12472171,9.287297666,-7.35272071,1),
],[new THREE.Vector4(0.151400715,-1.563626377,-0.1865482537,1),
new THREE.Vector4(-0.4891499535,0.3067784805,-1.686763418,1),
new THREE.Vector4(-2.07842588,2.697023835,-3.08112267,1),
new THREE.Vector4(-5.30809036,5.075446562,-4.914680321,1),
new THREE.Vector4(-9.080053691,6.986873286,-7.063676856,1),
new THREE.Vector4(-10.74630956,9.237752691,-7.702352648,1),
],[new THREE.Vector4(0.2088336104,-1.698222837,-0.4869779921,1),
new THREE.Vector4(0.05384253134,0.07801333701,-2.900175629,1),
new THREE.Vector4(-1.541948444,2.021455317,-4.973656198,1),
new THREE.Vector4(-5.121625013,3.894597117,-7.388972776,1),
new THREE.Vector4(-8.526609932,6.449294333,-8.859732143,1),
new THREE.Vector4(-10.43810039,9.11866858,-8.454970369,1),
],];
var degree1_v01 =4;
var degree2_v01 =5;
var knots1_v01 = [0,0,0,0,0,1,1,1,1,1,];
var knots2_v01 = [0,0,0,0,0,0,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
getSurfacePoint = function(u, v) {return nurbsSurface_v01.getPoint(v,u);};




	var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
	var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

	swirl.material.side = THREE.DoubleSide;
	swirl.material.uniforms['camMat'].value = camera.matrixWorld;
	swirl.material.depthTest = false;
	swirl.material.uniforms['textureColor'].value = skyTexture;
	swirl.material.uniforms['textureAlpha'].value = texture;

	swirl.update = function(offset,cam){
		this.material.uniforms['camMat'].value = cam.matrixWorld;
		this.material.uniforms['offset'].value = offset;

	}

	return swirl;
}




Curves["3"]  = function(params){
	var Curve_v01 = [[new THREE.Vector4(0.4709860525,-1.545588544,0.3623530298,1),
new THREE.Vector4(1.211748605,0.767154663,2.388755383,1),
new THREE.Vector4(0.6397374371,2.834865706,5.469159819,1),
new THREE.Vector4(-1.919925222,4.129466785,10.09713037,1),
new THREE.Vector4(-4.932299327,7.040754887,12.27795492,1),
new THREE.Vector4(-7.298397714,9.438953473,11.70087607,1),
],[new THREE.Vector4(0.258351341,-1.499455213,0.1220606058,1),
new THREE.Vector4(0.17642647,0.6345473297,1.578063517,1),
new THREE.Vector4(-0.5918691465,3.126316867,3.807061239,1),
new THREE.Vector4(-2.660354849,5.277440698,7.526032716,1),
new THREE.Vector4(-5.719465864,7.157360537,10.62141589,1),
new THREE.Vector4(-7.668381853,9.383293309,11.00345686,1),
],[new THREE.Vector4(-0.02571003071,-1.537389005,-0.07345088651,1),
new THREE.Vector4(-1.030305278,0.2583698046,1.088356409,1),
new THREE.Vector4(-2.438544871,2.212222307,3.480562062,1),
new THREE.Vector4(-5.187845873,4.077325017,7.659464507,1),
new THREE.Vector4(-7.414301301,6.885929814,9.971576311,1),
new THREE.Vector4(-8.266462838,9.287297666,10.46362878,1),
],[new THREE.Vector4(-0.1730876948,-1.563626377,-0.1666225596,1),
new THREE.Vector4(-1.722063855,0.3067784805,0.3448689401,1),
new THREE.Vector4(-3.24573001,2.697023835,1.810637388,1),
new THREE.Vector4(-5.345636641,5.075446562,4.873815224,1),
new THREE.Vector4(-7.805678249,6.986873286,8.450697772,1),
new THREE.Vector4(-8.582868472,9.237752691,10.05702612,1),
],[new THREE.Vector4(-0.467589858,-1.698222837,-0.2492363665,1),
new THREE.Vector4(-2.885253388,0.07801333701,-0.298714886,1),
new THREE.Vector4(-5.086162489,2.021455317,1.116159538,1),
new THREE.Vector4(-7.795323404,3.894597117,4.478938991,1),
new THREE.Vector4(-9.54854389,6.449294333,7.747466694,1),
new THREE.Vector4(-9.306750754,9.11866858,9.686323047,1),
],];
var degree1_v01 =4;
var degree2_v01 =5;
var knots1_v01 = [0,0,0,0,0,1,1,1,1,1,];
var knots2_v01 = [0,0,0,0,0,0,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
getSurfacePoint = function(u, v) {return nurbsSurface_v01.getPoint(v,u);};



	var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
	var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

	swirl.material.side = THREE.DoubleSide;
	swirl.material.uniforms['camMat'].value = camera.matrixWorld;
	swirl.material.depthTest = false;
	swirl.material.uniforms['textureColor'].value = skyTexture;
	swirl.material.uniforms['textureAlpha'].value = texture;

	swirl.update = function(offset,cam){
		this.material.uniforms['camMat'].value = cam.matrixWorld;
		this.material.uniforms['offset'].value = offset;

	}

	return swirl;
}




Curves["4"]  = function(params){
	var Curve_v01 = [[new THREE.Vector4(0.5652237067,-1.169839883,-0.4046656828,1),
new THREE.Vector4(2.131206325,0.7801412736,0.3033098349,1),
new THREE.Vector4(3.90423883,2.294104293,2.323410936,1),
new THREE.Vector4(5.986195086,2.825351989,6.248240575,1),
new THREE.Vector4(6.040684807,4.622270835,9.688036643,1),
new THREE.Vector4(4.466423049,6.162425343,11.4314417,1),
],[new THREE.Vector4(0.3037268281,-1.164432291,-0.3541070326,1),
new THREE.Vector4(1.136485478,0.5130595716,0.6479970118,1),
new THREE.Vector4(2.197943721,2.349532938,2.50482109,1),
new THREE.Vector4(3.785020609,3.667775268,5.836245965,1),
new THREE.Vector4(4.537721582,4.611809453,9.540237589,1),
new THREE.Vector4(3.825104918,6.067286835,11.37969389,1),
],[new THREE.Vector4(0.04983042412,-1.239417625,-0.2483061164,1),
new THREE.Vector4(0.3130715698,0.01577132127,1.209818813,1),
new THREE.Vector4(1.259693307,1.309153188,3.493064413,1),
new THREE.Vector4(2.904849762,2.274930906,7.443785456,1),
new THREE.Vector4(3.389155366,4.119326989,10.38468272,1),
new THREE.Vector4(3.201652216,5.898626117,11.54539181,1),
],[new THREE.Vector4(-0.07561204322,-1.283735381,-0.1908947204,1),
new THREE.Vector4(-0.5033533616,-0.04905494118,1.375072935,1),
new THREE.Vector4(-0.2879612814,1.591647668,3.409495752,1),
new THREE.Vector4(0.8085800783,3.098582695,6.517834706,1),
new THREE.Vector4(2.148876321,4.160578596,10.02076216,1),
new THREE.Vector4(2.786711287,5.812461193,11.58169494,1),
],[new THREE.Vector4(-0.2475175608,-1.44013947,-0.04459667482,1),
new THREE.Vector4(-1.427351578,-0.417841018,1.863980868,1),
new THREE.Vector4(-1.499535959,0.7504175128,4.273123213,1),
new THREE.Vector4(-0.4114970971,1.7433448,7.849908344,1),
new THREE.Vector4(0.9620556207,3.446890264,10.83479128,1),
new THREE.Vector4(2.230931788,5.601170648,11.90220821,1),
],];
var degree1_v01 =4;
var degree2_v01 =5;
var knots1_v01 = [0,0,0,0,0,1,1,1,1,1,];
var knots2_v01 = [0,0,0,0,0,0,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
getSurfacePoint = function(u, v) {return nurbsSurface_v01.getPoint(v,u);};


	var geometry = new THREE.ParametricGeometry( getSurfacePoint, 20, 20 );
	var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

	swirl.material.side = THREE.DoubleSide;
	swirl.material.uniforms['camMat'].value = camera.matrixWorld;
	swirl.material.depthTest = false;
	swirl.material.uniforms['textureColor'].value = skyTexture;
	swirl.material.uniforms['textureAlpha'].value = texture;

	swirl.update = function(offset,cam){
		this.material.uniforms['camMat'].value = cam.matrixWorld;
		this.material.uniforms['offset'].value = offset;

	}

	return swirl;
}


