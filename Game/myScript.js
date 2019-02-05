// Setting up game after reloading page
let startTimer = () => {
    let clock = document.querySelector(".clockInterface");
    let startingPosition = 300;
    let leftSide;
    let rightSide;
    setInterval(() => {
        if(startingPosition === 0) {
            clock.textContent = `Finished`;
            window.location.reload();
            return;
        }
        leftSide = Math.floor(startingPosition/60);
        if(leftSide < 10) {
            leftSide = `0${leftSide}`;
        }
        rightSide = startingPosition % 60;
        if(rightSide.toString().length <= 1) {
            rightSide = `0${rightSide}`;
        }
        clock.textContent = `${leftSide}:${rightSide}`;
        startingPosition--;
    }, 1000);
}

let cubeNumbers = () => {
    let numbersArray = [
        1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    ]
    for (let i = 0; i < numbersArray.length; i++) {
        let randomIndex = Math.floor(Math.random() *20);
        let temporary = numbersArray[randomIndex];
        numbersArray[randomIndex] = numbersArray[i];
        numbersArray[i] = temporary;
    }
    return numbersArray;
}

let setupCubes = () => {
    let numbersArray = cubeNumbers();
    let parentDiv = document.querySelector(".gameInterface");
    for (let number of numbersArray) {
        let cube = `<div class="cube"><div class="number">${number}</div></div>`;
        parentDiv.insertAdjacentHTML('afterbegin', cube);
    }
}

let touch = () => {
    let cubes = document.querySelectorAll(".cube");
    cubes.forEach((cube) => {
        cube.addEventListener("click", () => {
            cube.firstChild.classList.toggle('show');
            watch(cubes);
        });
    })
}

let watch = (cubes) => {
    let correct = [];
    cubes.forEach((cube) => {
        if (cube.firstChild.classList.length > 1) {
            correct.push(cube.firstChild);
        }

    })
    if (correct.length === 2) {
        if (correct[0].textContent === correct[1].textContent) {
            correct.forEach((item) => {
                
            });
            correct = [];
        } else {
            correct.forEach((item) => {
                setTimeout(() => {
                    item.classList.toggle("show");
                }, 500);
            })
            correct = [];
        }
    }
}

// Starting methods
setupCubes();
touch();
// startTimer();