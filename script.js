

const circle = document.getElementById("circle")

const left = document.getElementById("left")
const right = document.getElementById("Right")
const up = document.getElementById("up")
const down = document.getElementById("down")

let x= 0,y=0;

const value = 75;



left.onclick = () => {
    x -= value;
    circle.style = "left : "+x+"px;top : "+y+"px"
}

right.onclick = () => {
    x += value;
    circle.style = "left : "+x+"px;top : "+y+"px"
}

up.onclick = () => {
    y -= value;
    circle.style = "left : "+x+"px;top : "+y+"px"
}
down.onclick = () => {
    y += value;
    circle.style = "left : "+x+"px;top : "+y+"px"
}


addEventListener('keypress',(event) =>{

    switch(event.key){
        case "w":{
            y -= value;
            circle.style = "left : "+x+"px;top : "+y+"px"
            break;
        }
        case "s":{
            y += value;
            circle.style = "left : "+x+"px;top : "+y+"px"
            break;
        }
        case "a":{
            x -= value;
            circle.style = "left : "+x+"px;top : "+y+"px"
            break;
        }

        case "d":{
            x += value;
            circle.style = "left : "+x+"px;top : "+y+"px"
            break;
        }
        
    }


})


