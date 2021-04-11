class Hero{

    constructor(x,y,r){

    var options = {
density: 1,
frictionAir: 1
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("images/Superhero-02.png")
    this.Body=Bodies.circle(this.x,this.y,(this.r)/2,options)
    World.add(myWorld,this.Body)
}

display(){
    image(this.image,this.Body.position.x,this.Body.position.y,this.r,this.r)
}
}