class Car {
  constructor() {
    //attach event listeners to left and right arrow keys when car is created
    var car = document.getElementById('car');
    document.addEventListener('keydown',(event)=>{
        switch (event.key) {
            case "ArrowLeft":
                console.log("moving left");
                car.style.left = `${car.offsetLeft - 10}px`;
                console.log(car.style.left);
                break;
            case "ArrowRight":
                console.log("moving right");
                car.style.left = `${car.offsetLeft + 10}px`;
                break;
            case "ArrowUp":
                console.log("moving up");
                car.style.top = `${car.offsetTop - 10}px`;
                break;
            default:
                break;
        }
        
    });
  }
}


