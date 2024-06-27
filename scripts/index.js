const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', ()=>{
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', ()=>{
   if (this.window.pageYOffset > 0) {
    navbar.classList.add('active');
   
   } 
   else{
    navbar.classList.remove('active');
   }
})

