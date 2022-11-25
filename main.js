
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


// document.addEventListener('submit', (e) => {


//   if (input.value.length > 0) {

//     if (/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(input.value)) {

//       errorMsg.textContent = '';
//       input.style.border = 'none';
//       input.style.color = 'black';
//       e.preventDefault();

//       apiFunc();



//     } else {

//       errorMsg.textContent = 'Please add a link';
//       input.style.border = ' 2px solid hsl(0, 87%, 67%)';
//       input.style.color = 'hsl(0, 87%, 67%)';
//       e.preventDefault();
//     }

//   } else {

//     errorMsg.textContent = 'Please add a link';
//     input.style.border = ' 2px solid hsl(0, 87%, 67%)';
//     e.preventDefault();




//   }


// })




function urlValidation(defaultUrl) {
    const urlRule =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (defaultUrl.match(urlRule)) {
      return true;
    } else {
      return false;
    }
  }











// Shorten links // 


const insertedLink = document.querySelector('.url');
const shortlyResult = document.querySelector('.hidden-result');
const shortenedUrl = document.querySelector('.link');
const parentNode = document.querySelector('.result-container');
const shortenBtn = document.getElementById('submit-btn');



const apiFunc = shortenBtn.addEventListener('click', (e) => {



  //URL Validation
  if (!urlValidation(input.value)) {
    // alert("Please enter a valid URL!");
    
    errorMsg.textContent = 'Please add a link';
    input.style.border = ' 2px solid hsl(0, 87%, 67%)';
    input.style.color = 'hsl(0, 87%, 67%)';
    e.preventDefault();


  } else {
    
    errorMsg.textContent = '';
      input.style.border = 'none';
      input.style.color = 'black';
      e.preventDefault();


    fetch(`https://api.shrtco.de/v2/shorten?url=` + input.value)

    .then((response) => response.json())
    .then((response) => {
    
        if (response.ok) {


            
            
    
            let shortlyCode = response.result.code;
    
            let mainClone = shortlyResult.cloneNode(true);
    
            mainClone.classList.replace('hidden-result', 'search-result');

            sessionStorage.setItem("cloneCache", parentNode.innerHTML);
            
            let cloneLink = mainClone.querySelector(".url");
            let cloneResultLink = mainClone.querySelector(".link");
            let cloneCopyBtn = mainClone.querySelector(".copy-btn");

            sessionStorage.setItem("cloneCopyBtn", cloneCopyBtn.outerHTML);

            cloneLink.textContent = `${input.value}`;

            sessionStorage.setItem("cloneLink", cloneLink.textContent);

            cloneResultLink.textContent = `shrtco.de/${shortlyCode}`;

            sessionStorage.setItem(
                "cloneResultLink",
                cloneResultLink.textContent
              );

              parentNode.appendChild(mainClone);
        }
    
    })




  }



})











































const copyBtn = document.querySelector('.copy-btn');