const menus = document.querySelector('.menu');
const dsh = document.querySelector('.dsh');
const cancel = document.querySelector('.cancel-box');
cancel.addEventListener('click', clearMenu)
const allxnav = document.querySelector('.allxnav');

dsh.addEventListener('click', showMenu);
// menus.addEventListener('click', stay);
// function stay(){
//     menus.style.display = 'block';

// }
function showMenu(e){
    menus.style.display = 'block';
    // if(menus.style.right == '-100px'){
    //     alert('yes')
    // }

    dsh.style.display='none';
    document.body.style.overflowY = 'visible';
}
// function none(){
//     menus.style.display = 'none';
//     dsh.style.display='block';
// }
function clearMenu(){
    menus.style.display = 'none';
    dsh.style.display='block';
    document.body.style.overflowY = 'visible';
        

    
}