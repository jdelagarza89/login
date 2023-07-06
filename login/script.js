

//creates variables and attaches them to classes in document
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
//creates variable that is linked to login button class
let loginBtn = document.querySelector('.btnLogin-popup');
let closeBtn = document.querySelector('.icon-close');




// adds "active" to "wrapper" class when registerlink is clicked
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
// removes "active" from "wrapper" class when loginlink is clicked
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
//^^^ able to add css to "active" class  ^^^






//adds "active-popup" to "wrapper" class when loginbtn is clicked
loginBtn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

//removes "active-popup" to "wrapper" class when closeBtn is clicked

closeBtn.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});