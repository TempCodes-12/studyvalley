//hamburger
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

document.querySelectorAll('.mobo-nav-link').forEach(n => n.
    addEventListener("click",() =>{
        hamburger.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    }))

//form
const btn = document.querySelector('.btn');
const formcontainer = document.querySelector('.formcontainer')

btn.addEventListener('click', function(){
    btn.classList.toggle('is-active');
    formcontainer.classList.toggle('is-active');
    
})


document.querySelectorAll('.close').forEach(n => n.
    addEventListener("click",() =>{
        btn.classList.remove('is-active');
        formcontainer.classList.remove('is-active');
    }))
    
 //thank you message
 
 const thankyou = document.querySelector('.thankyou')

 function popup () {
    return formcontainer.classList.remove('is-active'),
    thankyou.classList.toggle('is-active');
 }

document.querySelectorAll('.tyclose').forEach(n => n.addEventListener("click",() =>{
    thankyou.classList.remove('is-active');
}))