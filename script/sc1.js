sc1 = {
    
    setup:function(){
        
        tree = new TREE();
        
        tree.generate({joints:[15,7],angles:[0,1],rads:[1,3],length:[5,1]})
        
        tree.scale = new THREE.Vector3(.1,.1,.1);
        tree.position.z = -5;
        scene.add(tree);
        
        tree.position.y = -30;

        count = 1;

        // setSliders({"var1":0,"var2":0,"var3":.6,"var4":.4,"var5":.2,"var6":.4,"var7":.3})
        
    },
    
    draw:function(time){
        count=time;
        tree.passFunc(tree.makeInfo([
            [0,-1,-2],   {rz:1*.1,jFreq:.6,jMult:.4,jFract:.1,jOff:time*2,sc:.98},
            [0,-1,-1,-1,-2],  {sc:1+(3*.2),rx:2,jOffset:1,jOff:count*3*-.1,jFreq:1,jMult:2}
        ]),tree.transform)

        
    }
}