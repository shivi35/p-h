class Button{
    constructor(){

        this.paradise=createButton("Paradise")
        this.hell=createButton("Hell")
    }
    display(){
        this.paradise.position(200,50)
        this.hell.position(500,50)

        this.paradise.mousePressed(()=>{
            background(Pbackground1)
            console.log("working")
        })

        this.hell.mousePressed(()=>{
            clear()
            background("cyan")
            console.log("working")
        })
    }
}