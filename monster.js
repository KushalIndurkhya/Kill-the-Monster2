class Monster{
    constructor(x,y,r){

        var options = {
isStatic: true

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/Monster-02.png")
        this.Body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(myWorld,this.Body)
    }

    display(){
        image(this.image,this.Body.position.x,this.Body.position.y,this.r,this.r)
        
    }
}

