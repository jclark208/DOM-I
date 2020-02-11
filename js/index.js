const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// IMAGES START HERE
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let logoTwo =document.getElementById("cta-img");
logoTwo.setAttribute('src', siteContent["cta"]["img-src"]);

let logoThree = document.getElementById("middle-img");
logoThree.setAttribute('src',siteContent["main-content"]["middle-img-src"])


// IMAGES END HERE

//  Nav starts here
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link,index) => {

   link.innerText = siteContent["nav"][`nav-item-${index +1}`]
});



// Nav ends here


// BUTTON HERE
let buttonOne = document.querySelector('button');
buttonOne.innerText = "Get Started";
//  console.log(buttonOne);
//  buttonOne[0] = 'Get Started';
// document.getElementById("button").innerHTML = "Get Started";

// BUTTON END

// LEFT OF IMAGE TEXT HERE
const leftSide = document.querySelector('.cta-text');
const leftSideH1 = leftSide.querySelector('h1');
leftSideH1.innerText = "Dom is Awesome";

// LEFT OF IMAGE TEXT END


//main content stars here

const mainContentTitles = document.querySelectorAll(".text-content h4");
const mainContentPar = document.querySelectorAll(".text-content p");
const titleArray = Object.keys(siteContent["main-content"]).filter(function(element){
return element.includes('h4');
});

const parArray = Object.keys(siteContent["main-content"]).filter(function (element){
return element.includes('content');
});

titleArray.forEach(function(title, index){
  mainContentTitles[index].innerText = siteContent["main-content"][title];
});

parArray.forEach(function(par,index){
  mainContentPar[index].innerText = siteContent["main-content"][par];
});

// topContent.forEach((purpledino, index) => {
// purpledino.innerHTML = siteContent["main-content"][`${index}-h4`];
// });


// main content ends here


//Contact starts here (obligatory x-files theme song)

const contactTitles = document.querySelector('.contact h4');
const contactPar = document.querySelectorAll('.contact p');

contactTitles.innerText = siteContent["contact"]["contact-h4"];

const contactParArray = Object.keys(siteContent['contact']).filter(function (element){
  return !element.includes("h4"); 

});

contactParArray.forEach(function(par,index){
 contactPar[index].innerText = siteContent['contact'][par];
});
// contact stops here


//footer

const footerPar = document.querySelector('footer p');

footerPar.innerText = siteContent['footer']['copyright'];