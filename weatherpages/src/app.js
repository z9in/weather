let map = document.getElementsByClassName('map')[0];
let namess = document.querySelectorAll('.pointer');
let box =document.createElement('div');
map.append(box);
box.setAttribute('style', `width:30px; height:30px; border:1px solid red; position:absolute; top:0; left:0;`);
let x, y = 0 ;
window.addEventListener('mousemove',(e) =>{
    x = e.pageX;
    y = e.pageY;
    console.log(x,y)
    return move(x,y)
})

function move(x,y) {
    box.setAttribute('style', `top:${y}; left:${x};`)
}
// box.setAttribute('style', `width:30px; height:30px; border:1px solid red; position:absolute; top:${y}; left:${x};`);

// namess.forEach(e =>{
//     e.addEventListener('mouseover',()=>{
//        box.setAttribute('style', `'width:30px; height:30px; border:1px solid red; position:absolute; top:0; left:0; display:block;`)
//     })
//     e.addEventListener('mouseout',()=>{
//         box.setAttribute('style', `display:none;`)
//     })
// })