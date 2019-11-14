var button = document.getElementById("button")
var count = 0;


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', () =>{
    count++
    let square = document.createElement('div');
    square.className = 'box';
    square.style.backgroundColor = getRandomColor();
    document.body.appendChild(square).addEventListener('click', ()=> {
        square.style.backgroundColor = getRandomColor();
    })


    const number = document.createElement('p')
    number.innerText = count;
    square.appendChild(number);
    number.style.display = 'none';

    square.addEventListener('mouseover', ()=>{
        number.style.display = 'initial';
    });
    square.addEventListener('mouseout', ()=> {
        number.style.display = 'none';
    });
 
    square.addEventListener('dblclick', ()=>{
       /*let gone = e.target.parentNode, 
        add = document.createElement('a');*/

        var element = document.querySelector('.box');
        if(!count % 2 == 0)
        element.parentNode.removeChild(element.nextElementSibling)
    })

});



/*let color = querySelector('.box')

color.addEventListener('click', ()=> {
    let change = document.getElementsByClassName('box')
    change.style.backgroundColor = getRandomColor();
});
*/
  /*  square.addEventListener('dblclick', ()=>{
        let change = document.querySelector('.p');
        change.style.backgroundColor = getRandomColor;
    })*/

/*button.addEventListener('click', ()=>{
count++
const square = document.createElement('div');
square.className = "box";
square.style.backgroundColor = getRandomColor();
const squareNumber = document.createElement('p');
squareNumber.innerText = count;
square.appendChild(squareNumber);
squareNumber.style.display = 'none';

square.addEventListener('mouseover', () => {
    squareNumber.style.display = 'initiial';
});

square.addEventListener('mouseout', ()=> {
    squareNumber.style.display = "none";
});


}); */