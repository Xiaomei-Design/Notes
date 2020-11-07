let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');


let openDoor1
let openDoor2
let openDoor3

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
  };
  playDoor(doorImage1);
};

doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage2.src = openDoor2
  };
  playDoor(doorImage2);
};

doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage3.src = openDoor3
  };
  playDoor(doorImage2);
}

let numClosedDoors = 3
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
}

const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"

const isBot = (door) => {
  if(door.src === botDoorPath) return true;
  else return false;
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) return false;
  else return true;
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver(status);
  } else if (isBot(door)) {
    gameOver();
  }
}

const startButton = document.getElementById('start');
startButton.onclick = () => {
  if(currentlyPlaying === false){
    startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const currentlyPlaying = true;
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  };
  currentlyPlaying = false;
}


