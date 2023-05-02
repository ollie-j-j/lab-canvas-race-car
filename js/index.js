window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function startGame() {
    background();
  } 

  function background() {
    const background = new Image();
    background.src = 'images/road.png';
    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      car.draw();
    };
  }

  function updateCanvas() {
    background();
    car.draw();
  }

  class Car {
    constructor() {
      this.x = 220;
      this.y = 500;
      this.width = 50;
      this.height = 100;
      const img = new Image();
      this.img = img;
      img.src = 'images/car.png';
    }

    moveLeft() {
      this.x -= 10;
      if (this.x <= 50) {
        this.x = 50;
      }
    }

    moveRight() {
      this.x += 10;
      if (this.x >= 400) {
        this.x = 400;
      }
    }

    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  const car = new Car;

  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    }
    updateCanvas();
  });

};
