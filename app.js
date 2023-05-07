var closebtn = document.querySelector('.closebtn')
var togglebtn = document.querySelector('.navbar_toggler')
var main = document.querySelector('.main_div')

console.log(togglebtn)

togglebtn.addEventListener('click', myFunction);

function myFunction(){
    main.classList.toggle('hidden');
}

closebtn.addEventListener('click', () => {
    main.classList.remove('hidden')
})