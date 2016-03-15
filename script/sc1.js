sc1 = {
    
    setup:function(){

        tube = new skinTube();
        scene.add(tube.init(3));
        initLines();

        tree = new TREE();
        
        tree.generate({joints:[5],angles:[1],rads:[3],length:[9]});
        
        tree.scale = new THREE.Vector3(.1,.1,.1);
        tree.position.z = -35;
        scene.add(tree);
        
        // tree.position.y = -30;
        console.log(tree);
        count = 1;

         tree.passFunc(tree.makeInfo([
            [0,-1,-2],   {ballGeo:new THREE.Geometry(),jointGeo:new THREE.Geometry()},
            // [0,-1,-1,-1,-2],  {sc:1+(3*.2),rx:2,jOffset:1,jOff:count*3*-.1,jFreq:1,jMult:2}
        ]),tree.setGeo)

        // setSliders({"var1":0,"var2":0,"var3":.6,"var4":.4,"var5":.2,"var6":.4,"var7":.3})
        
    },
    
    draw:function(time){
        count=time;
        tree.passFunc(tree.makeInfo([
            [0,-1,-2],   {rx:count,rz:4*.1,jFreq:.6,jMult:.4,jFract:.51,jOff:time*5,sc:.98},
            // [0,-1,-1,-1,-2],  {sc:1+(3*.2),rx:2,jOffset:1,jOff:count*3*-.1,jFreq:1,jMult:2}
        ]),tree.transform)

        tree.passFunc(tree.makeInfo([
            [0,-1,-3],   {},
            // [0,-1,-1,-1,-2],  {sc:1+(3*.2),rx:2,jOffset:1,jOff:count*3*-.1,jFreq:1,jMult:2}
        ]),function(obj){
            scene.updateMatrixWorld();
            obj.parent.updateMatrixWorld();
            var vector = new THREE.Vector3();
            vector.setFromMatrixPosition( obj.matrixWorld );
            addToLines(vector);
            // console.log(vector);
        })

        
    }
};



function initLines(){
   lineCount = 0;
   lines = [];
   for(var i = 0 ; i < 3 ; i++){

    lines.push([]);
   }
    for(var i = 0 ; i < 100 ; i++){
        lines[0].push(new THREE.Vector3());
        lines[1].push(new THREE.Vector3());
        lines[2].push(new THREE.Vector3());

    }
}

function addToLines(pos){
    
    // console.log(lineCount);
    lines[lineCount].push(pos);
    lines[lineCount].length>100;
    lines[lineCount].shift();
    lineCount++;
    if(lineCount>lines.length-1)
        lineCount=0;
    var spline = new THREE.CatmullRomCurve3(lines[lineCount]);
    tube.update(spline,lineCount);
}
