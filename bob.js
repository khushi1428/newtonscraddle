class Bob{
    constructor(x,y,r){
        var options ={
            isStatic:false,
             restitution:0.5,
             density:1.2,
             friction:0.5,
        }
        this.body= Bodies.circle(x,y,70,options);
        this.x = x;
        this.y = y;
        this.r = r;        
        }
        
        display(){
        fill(0,255,255);
        strokeWeight(3);
        circle(this.x , this.y, this.r);
         

        }
}