var closebtn = document.querySelector('.closebtn')
var togglebtn = document.querySelector('.navbar_toggler')
var main = document.querySelector('.main_div')
var display = document.querySelector('.display')

console.log(togglebtn)

togglebtn.addEventListener('click', myFunction);

function myFunction(){
    main.classList.toggle('hidden');
    togglebtn.classList.add('display');
}

closebtn.addEventListener('click', () => {
    main.classList.remove('hidden');
    togglebtn.classList.remove('display');
})