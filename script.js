const container = document.querySelector('.container');

let boxHover = '';

let id = 0;

let i = 0;

let selector = '';

let boxes = 0;

function newRow (num) {
    let height = 600 / num;

    let ht = height + 'px';

    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.display = 'flex';
        row.style.height = ht;


        let column = newColumn(row, num);

        container.appendChild(row);
    }
}

function newColumn (row, num) {
    for (let i = 0; i < num; i++) {
        id++;

        const col = document.createElement('div');
        col.setAttribute('class', 'col');
        col.setAttribute('id', ['p' + id]);
        col.style.borderStyle = 'solid';

        col.style.flex = '1';

        row.appendChild(col);

    }
}


if (boxes == null || boxes == 0 ) {
    boxes = 16;
}

let init = newRow(boxes);

for (i = 1; i < id; i++) {
    selector = '#' + 'p' + i;
    boxHover = document.querySelector(selector);
    boxHover.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'teal';
    
        setTimeout(() => {
            event.target.style.backgroundColor = '';
        }, 500);
    })
    }

const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
boxes = prompt('Please enter the number of boxes', '16');

while (boxes > 100) {
    alert('Please enter a number not greater than 100');
    boxes = prompt('Please enter the number of boxes', '16');
}

Array.from(document.getElementsByClassName('row')).forEach(el => el.remove());

boxHover = '';

id = 0;

i = 0;

selector = '';

init = newRow(boxes);

for (i = 1; i < id; i++) {
    selector = '#' + 'p' + i;
    boxHover = document.querySelector(selector);
    boxHover.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'teal';
    
        setTimeout(() => {
            event.target.style.backgroundColor = '';
        }, 500);
    })
    }

})



console.log(selector);
console.log(boxes);