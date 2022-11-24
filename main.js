
// Mobile Menu //


// Open / close menu when clicking hamburger //

const modal = document.getElementById('modal');

const menu = document.getElementById('menu');

document.getElementById('hamburger').addEventListener('click' ,  () => {

menu.classList.toggle('toggle');
modal.classList.toggle('active');


})

// close menu when clicking outside //


modal.addEventListener('click', (e) => {

    if (e.target !== e.currentTarget) {
  
      return;
  
  } else {
  
  modal.classList.remove('active');
  menu.classList.remove('toggle');
  

  
  }
  })




  // Form validation // 

  const input = document.getElementById('shorten');

const errorMsg = document.getElementById('ierror');


document.addEventListener('submit', (e) => {


  if (input.value.length > 0) {

    if (/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(input.value)) {

      errorMsg.textContent = '';
      input.style.border = 'none';
      input.style.color = 'black';



    } else {

      errorMsg.textContent = 'Please add a link';
      input.style.border = ' 2px solid hsl(0, 87%, 67%)';
      input.style.color = 'hsl(0, 87%, 67%)';
      e.preventDefault();
    }

  } else {

    errorMsg.textContent = 'Please add a link';
    input.style.border = ' 2px solid hsl(0, 87%, 67%)';
    e.preventDefault();




  }


})