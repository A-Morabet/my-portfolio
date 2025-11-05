import { setupNav} from "./index.js";

//Retrieves number from localStorage
const localProject = localStorage.getItem('project');

//Object containing all content from projects

const portfolioObject = {
    portfolios: [
        {
            title: "React + AI Site",
            subtitle: "Website Service Demo",
            bigQuote: "“A Website about Animal Discovery.”",
            paragraph1: "The goal of this project was to create a responsive and very appealing website using <b>React</b> and <b>Tailwind CSS</b>. Shortly after establishing the initial goal, I had the idea of including an <b>AI Image Classifier Model</b> along with a <b>Firebase</b> user authentication system which would further expand the project, therefore combining Front-end, Back-end and Machine Learning. Link to the Github Repo can be found <a class='text-link-dark' style='font-size: var(--fs-body);text-transform: lowercase;' href='https://github.com/A-Morabet/react-tensorflow-website' target='__blank'>here</a>.",
            paragraph2: "From a design standpoint, the project sought to mimic recent minimalistic webpage design and include layouts such as <b>bento boxes</b>. As for color, different shades of oranges and blues were used, since I believed the vivid colors associated well with the website's identity.",
            paragraph3: "The project was set up using <b>Vite</b>. The AI model was created and trained through <b>Microsoft Azure's Custom Vision</b>, then exported and integrated into the App's <b>Tensorflow.js</b> logic. Check out the <a class='text-link-dark' style='font-size: var(--fs-body);text-transform: lowercase;' href='https://a-morabet.github.io/react-tensorflow-website/'>live demo</a>.",
            paragraph4: "The model can classify 20 different dog species, which are the following: Afghan - African Wild Dog - Airedale - American Hairless - American Spaniel - Basenji - Basset - Beagle - Bearded Collie - Bermaise - Bichon Frise - Bienheim - Bloodhound - Bluetick - Border Collie - Borzoi - Boston Terrier - Boxer - Bull Mastiff - Bull Terrier.",
            url: "img/portfolio-01.png",
            videoUrl: "vids/portfolio-01.mp4#t=0.1",

        },
        {
            title: "Word Training",
            subtitle: "A Unity Educational App",
            bigQuote: "“An application made from a clinician's perspective.”",
            paragraph1: "The challenge for this project was to use my experience as a Speech Therapist to <b>create an engaging mobile application based on clinical foundations.</b>. Find out more in-detail information on how it was developed on <a class='text-link-dark' style='font-size: var(--fs-body);' href='https://github.com/A-Morabet/word-training' target='__blank'>Github</a>.",
            paragraph2: "During the development of the app, the main focus was on enhancing <b>appeal and engagement</b>. An arcade style was chosen for the menu since it offered quick navigation between panels as well as an inviting aesthetic. The game sessions were designed in a way to make the playthroughs packed with stimulating events while keeping their duration comfortable, and also encourage users to try, after their first attempt, to improve their score several times.",
            paragraph3: "The App logic was coded in <b>C#</b>, and was built using the <b>Unity Environment</b>. I also used the <b>Adobe Suite</b> in order to create app assets such as buttons, backgrounds, sprites for props, and videos for trailers or how-to-play shorts.",
            paragraph4: "As the project advanced, it grew exponentially in scope. It now features a score system and local leaderboard database, three different levels of difficulty that affect and change how the game session behaves, a coin-based minigame that provides 'Continue Coins' to the player by watching a video ad, and much more. Its development was a very rewarding experience. On a sidenote, I composed and produced the songs for the app intro and main menu! You can play it right <a class='text-link-dark'  style='font-size: var(--fs-body); text-transform: lowercase;' href='https://play.google.com/store/apps/details?id=com.morabet.wordtraining' target='__blank'>Here</a>.",   
            url: "img/portfolio-02.png",
            videoUrl: "vids/portfolio-02.mp4#t=0.1",
             
        },
        {
            title: "Invoice Maker",
            subtitle: "For Allied Health Professionals",
            bigQuote: "“It saved me many hours of invoice writing.”",
            paragraph1: "As a Speech Therapist, writing an invoice for my patients is particularly a time-consuming task since it's imperative to list a <b>session calendar</b>, which needs to include all the planned dates for the doctor-prescribed sessions which can span periods of months to even a year. Since most invoice generation apps are geared towards commercial invoicing, I decided to come up with a solution. If it caught your attention you can check for more information on <a class='text-link-dark' style='font-size: var(--fs-body);' href='https://github.com/A-Morabet/invoice-generator-allied' target='__blank'>Github</a>.",
            paragraph2: "The web application was developed using <b>Vanilla JavaScript, HTML and CSS</b>. The goal was to build a widely compatible web app that was easy to access and use from all devices, while maintaining a reliable user experience.",
            paragraph3: "<b>The user can automatically generate a session calendar</b>, which is a list that contains the dates of all the clinical sessions that will be taking place based on the following conditions: starting date, days of the week, session amount and session fee.",
            paragraph4: "It includes additional features such as a print button that hides non-relevant information, a currency modifier, and many more. You can check the app right <a class='text-link-dark' style='font-size: var(--fs-body);text-transform: lowercase;' href='https://a-morabet.github.io/invoice-generator-allied'>here</a>.",
            url: "img/portfolio-03.png",
            videoUrl: "/vids/portfolio-03.mp4#t=0.1",
        },
        {
            title: "E-Commerce Website",
            subtitle: "Developed with MERN Stack",
            bigQuote: "“A Dinosaur-themed Clothing Web Store.”",
            paragraph1: "For my e-commerce website project, I aimed to create a platform that would be both secure and super accessible, using the <b>MERN stack</b>—MongoDB, Express, React, and Node.js. This stack was perfect for covering everything I needed, from managing the backend data to building a responsive and dynamic front end. The link to the GitHub Repo can be found <a class='text-link-dark' style='font-size: var(--fs-body);text-transform: lowercase;' href='https://github.com/A-Morabet/mern-ecommerce' target='__blank'>here</a>.",
            paragraph2: "For the frontend state management, I used <b>React-Redux</b>, which was essential for keeping track of all the user interactions, from product selection to managing cart contents. Redux made it easy to ensure that everything was synced across the app.",
            paragraph3: "Design-wise, I went with a card layout to display products, so each item in the database had its own visual space, making it easier for users to see details at a glance. For the most popular items, I implemented a carousel feature to highlight the best-rated products. You can see the live demo <a class='text-link-dark' style='font-size: var(--fs-body);text-transform: lowercase;' href='https://greenasaur.onrender.com/'>here!</a>",
            paragraph4: "To keep accounts secure, I used JSON Web Tokens (<b>JWT</b>) for authentication, which added a solid layer of protection to the login and account system. Passwords are encrypted with the bcrypt module. The site includes full cart and checkout functionality where users can place and track orders. On the admin side, there’s control over user accounts, with permissions to add, edit, or remove products as needed, and monitor orders. Admins can also mark orders as delivered. Overall, the result is a user-friendly platform that stays organized and secure for customers and admins alike.",
            url: "img/portfolio-04.png",
            videoUrl: "vids/portfolio-04.mp4#t=0.1",

        },
        
    ] 
}

//Populates the page based on the index number retrieved previously

function PortfolioPopulate(index){

    let imgElem = document.getElementById("imgElem");
    imgElem.src = portfolioObject.portfolios[index].url;

    let title = document.getElementById("mod-title");
    title.innerText = portfolioObject.portfolios[index].title;
    title.style.fontWeight = "600"

    let subtitle = document.getElementById("mod-subtitle");
    subtitle.innerText = portfolioObject.portfolios[index].subtitle;

    let bigQuote = document.getElementById("big-quote");
    bigQuote.innerText = portfolioObject.portfolios[index].bigQuote;
    
    bigQuote.style.maxWidth = "600px"
    bigQuote.style.fontSize = "3rem"
    bigQuote.style.textAlign = "center"
    bigQuote.style.fontWeight ="600"

    let x = window.matchMedia("(max-width: 600px)")

    function mediaQueryQuote(x) {
        if (x.matches) { // If media query matches
         bigQuote.style.fontSize = "2rem";
        } else {
            bigQuote.style.fontSize = "3rem"
        }
      }
      
      // Call listener function at run time
      mediaQueryQuote(x);
      
      // Attach listener function on state changes
      x.addEventListener("change", function() {
        mediaQueryQuote(x);
      });



    let p1 = document.getElementById("mod-p1");
    p1.innerHTML = portfolioObject.portfolios[index].paragraph1;

    p1.style.marginBottom = "6vh";
    p1.style.textAlign = "justify";
    
    let p2 = document.getElementById("mod-p2");
    p2.innerHTML = portfolioObject.portfolios[index].paragraph2;

    p2.style.marginTop = "5vh";
    p2.style.textAlign = "justify";

    let p3 = document.getElementById("mod-p3");
    p3.innerHTML = portfolioObject.portfolios[index].paragraph3;

    p3.style.textAlign = "justify";

    let p4 = document.getElementById("mod-p4");
    p4.innerHTML = portfolioObject.portfolios[index].paragraph4;

    p1.style.textAlign = "justify";

    let vidElem = document.getElementById("video-source");
    vidElem.src = portfolioObject.portfolios[index].videoUrl;
    
    
}

// Project section button event listener

let projectButton = document.getElementById("btn-back");

projectButton.addEventListener("click", () => {toProjectSection()});

function toProjectSection(){

    localStorage.setItem('fromProject', "true"); 

    location.href = "index.html";
 
    console.log("did scrolling")
    
}





//Populate Website on load
PortfolioPopulate(localProject);

