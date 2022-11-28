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


  ///// Url shortening /////

  // Submit form // 

    const input = document.getElementById('shorten');
    const errorMsg = document.getElementById('ierror');

document.addEventListener('submit', (e) => {

    e.preventDefault();

    // If valid URL is entered api function is called //

  if (input.value.length > 0) {

    if (/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(input.value)) {

      errorMsg.textContent = '';
      input.style.border = 'none';
      input.style.color = 'black';
      loader();
      apiFunc();



    // displays error message if invalid input //

    } else {

      errorMsg.textContent = 'Please add a link';
      input.style.border = ' 2px solid hsl(0, 87%, 67%)';
      input.style.color = 'hsl(0, 87%, 67%)';
    }

    // displays error message if input is empty //

  } else {

    errorMsg.textContent = 'Please add a link';
    input.style.border = ' 2px solid hsl(0, 87%, 67%)';

  }

})



function loader() { 


    document.querySelector('.lds-dual-ring').style.display = 'flex';

}




// Shorten links function // 

const shortlyResult = document.querySelector('.hidden-result');
const parentNode = document.querySelector('.result-container');
const shortenBtn = document.getElementById('submit-btn');

  function apiFunc() {

    fetch(`https://api.shrtco.de/v2/shorten?url=` + input.value)

    .then((response) => response.json())
    .then((response) => {
    
        if (response.ok) {

            let shortlyCode = response.result.code;

          //Clones result 
          let mainClone = shortlyResult.cloneNode(true);
          mainClone.classList.replace("hidden-result", "search-result");

          sessionStorage.setItem("cloneCache", parentNode.innerHTML);


          //Target clone child elements
          let cloneLink = mainClone.querySelector(".url");

          let cloneResultLink = mainClone.querySelector(".link");

          let cloneCopyBtn = mainClone.querySelector(".copy-btn");

        
          //Inserts value of input
          cloneLink.textContent = `${input.value}`;

          
          

          //Inserts the shortened link
          cloneResultLink.textContent = `shrtco.de/${shortlyCode}`;


          parentNode.appendChild(mainClone);

          document.querySelector('.lds-dual-ring').style.display = 'none';

          


          // copies shortened link

          cloneCopyBtn.addEventListener('click', () => {


      
              let copiedText = cloneResultLink.textContent;


      
              navigator.clipboard.writeText(copiedText);
      
              cloneCopyBtn.textContent = 'Copied!';
              cloneCopyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)';
            
              setTimeout(() => {

                cloneCopyBtn.textContent = 'Copy';
              cloneCopyBtn.style.backgroundColor = 'hsl(180, 66%, 49%)';
                
              }, 175);

    
          })


        }
    
    })


  }

 

  
 

  










































const copyBtn = document.querySelector('.copy-btn');