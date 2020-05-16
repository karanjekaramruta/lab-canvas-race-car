
class Obstacle {
    obstacle = null;
    constructor(){
        let obstacle = document.createElement("div");
        obstacle.setAttribute("class", "obstacle");

        //generate random width blocks for obstacles
        let obstacleWidth = randomNumber(50,400);
        obstacle.style.width = `${obstacleWidth}px`;
        document.getElementById("game-board").appendChild(obstacle);
        
        var divWidth = document.getElementById('game-board').style.width;

        var width = randomNumber(60,300);
        console.log(width);
        obstacle.style.left = `${width}px`;
        this.obstacle = obstacle;
    }

    render(){
      // obstacle dom manipution here
      this.obstacle.style.top = `${this.obstacle.offsetTop + 100}px`;
  
    }
}

// Function to generate random number  
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
} 