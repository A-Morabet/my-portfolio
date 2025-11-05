
//Sets up event listeners for hamburger and links

function setupNav(){
    const navToggle = document.querySelector('.nav-toggle');

    const navLinks = document.querySelectorAll('.nav__link');
    
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    })
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    })
}

//Plays Animated Gif on Project Images after hovering the mouse over the image for a certain amount of time (as of this moment, 650ms)

let timeout;

document.querySelectorAll('img.gif__reveal').forEach(element => {
    element.addEventListener('mouseenter', event => {
        
        if (timeout != null) { clearTimeout(timeout); }

    timeout = setTimeout(function() {element.src = element.src.replace(/\.png$/, '.gif')},650)
      
    })
  
    element.addEventListener('mouseleave', event => {
        if (timeout != null) { clearTimeout(timeout); }
      element.src = element.src.replace(/\.gif$/, '.png')
    })
  })

  //Sets up event listeners for project buttons, this is continued in the following function projectSender

  function setupProjectEvents(){
    let indexProof = document.getElementById('services');

    if (indexProof){
        let folioArray = document.querySelectorAll(".prolink");
        folioArray.forEach((element) => element.addEventListener("click", projectSender));
    }
  }

  //This function determines the content seen in portfolio-item.html by setting a number based on the element class and using it to retrieve the appropiate content inside an array of objects called portfolioObject (see portfolio-item.js)
  //---> This way I can use only one page and populate it depending on the button previously pressed.

    function projectSender(event)
  {
    let number = 0;
    if (event.target.classList.contains("one")){
        localStorage.setItem('project', number);
        
    }
    if (event.target.classList.contains("two")){
      number = 1;
        localStorage.setItem('project', number); 
         
    }
    if (event.target.classList.contains("three")){
      number = 2;
        localStorage.setItem('project', number);   
           
    }

    if (event.target.classList.contains("four")){
      number = 3;
        localStorage.setItem('project', number);   
           
    }
    location.href = 'portfolio-item.html';
  }

  //Init
  setupProjectEvents();
  setupNav();
  export{setupNav};