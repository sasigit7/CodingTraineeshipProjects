let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById("start");

let currentPlaying = true;

doorImage1.onclick = () => {
    // doorImage1.src = botDoorPath;  
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}


doorImage2.onclick = () => {
    // doorImage2.src = beachDoorPath;
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}


doorImage3.onclick = () => {
    // doorImage3.src = spaceDoorPath;
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}


//  Create a click handler function
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}

const gameOver = status => {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}

// Building a Winner
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) { // Winning Condition
        gameOver("win");
    } else if (isBot(door)) {
        gameOver("loose");
    }
}

const isBot = door => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const isClicked = door => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else { //(choreDoor === 2) 
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

startRound();