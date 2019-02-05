let start = () => {
    let button = document.querySelector('.add');
    let parentDiv = document.querySelector('.mainContainer');
    let input = document.querySelector('#razlog');
    let err = document.querySelector('.errMsg');
    button.addEventListener('click', () => {
        if (input.value === '') {
            err.style.visibility = 'visible';
            err.textContent = 'Morate uneti razlog...';
        } else {
            if(proveriTile(input.value) === false) {
                err.style.visibility = 'visible';
                err.textContent = 'Taj tile vec postoji!';
            } else {
                err.style.visibility = 'hidden';
                tilesContainer.push(input.value);
                prikaziTile(parentDiv);

                //LOCKED LOGIC
                let lockButtons = document.querySelectorAll(".lock");
                for (let lock of lockButtons) {
                    lock.addEventListener('click', () => {
                        let tileContainer = lock.parentNode;
                        let locked = tileContainer.lastElementChild;
                    });
                }
            }
        }
    })
}

let tilesContainer = [];

let proveriTile = (tile) => {
    for (let t of tilesContainer) {
        if (t === tile) {
            return false;
        }
    }
    return true;
}

let prikaziTile = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (let t of tilesContainer) {
        let tile = `<div class="tile">
        <div class="tileHeader">
        ${t}
        </div>
        <button class="delete">x</button>
        <button class="lock">L</button>
        <div class="tileDesc">
        This is pilot tile
        </div>
        <div class="locked">Locked</div>
        </div>`
        parent.insertAdjacentHTML( 'beforeend', tile);
    }
    let deleteButtons = document.querySelectorAll('.delete');
    for (let del of deleteButtons) {
        del.addEventListener('click', () => {
            let div = del.previousSibling;
            deleteTile(div.previousSibling.textContent.trim());
            prikaziTile(parent);
        });
    }
}

let deleteTile = (tile) => {
    for (let t of tilesContainer) {
        if (t === tile) {
            tilesContainer.splice(tilesContainer.indexOf(t), 1);
            console.log(`Successfully deleted: ${tile}`);
            return;
        }
    }
}
start();