//Game is class that needs car and obstacles
class Game {

  start() {
    displayRoad();
    this.render();
  }

  car = new Car();
  obstacles = [];

  render() {
    //this.car.displayCarOnRoad();

    setInterval(() => {
      var obstacle = new Obstacle();
      this.obstacles.push(obstacle);
    }, 2000)

    setInterval(()=>{
        this.obstacles.forEach(obs=>{
            obs.render();
        });
    },300)

  }
}

function displayRoad() {
  document.getElementById("game-board").setAttribute("class", "road");
}

function displayCarOnRoad() {
    var carImg = document.createElement("img");
    carImg.src = "./images/car.png";

    carImg.setAttribute("class", "car");
    carImg.setAttribute('Id','car');

    setTimeout(() => {
      document.getElementById("game-board").appendChild(carImg);
    }, 1);

}

let game = new Game();

document.getElementById('start-button').onclick = () => {
  game.start();
};
