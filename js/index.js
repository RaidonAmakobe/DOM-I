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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png')

const codeSnippet = document.getElementById('cta-img');
codeSnippet.setAttribute('src', 'img/header-img.png' );

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

const ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', 'img/header-img.png' );



let allLinks = document.querySelectorAll('a');

allLinks[0].textContent = 'Services';
allLinks[0].style.color = 'green';
allLinks[1].textContent = 'Product';
allLinks[1].style.color = 'green';
allLinks[2].textContent = 'Vision';
allLinks[2].style.color = 'green';
allLinks[3].textContent = 'Features';
allLinks[3].style.color = 'green';
allLinks[4].textContent = 'About';
allLinks[4].style.color = 'green';
allLinks[5].textContent = 'Contact';
allLinks[5].style.color = 'green';

let servicesDesign = document.createElement('p');
servicesDesign.textContent = "Home";

let onceAgain = document.querySelector('a');
onceAgain.appendChild(servicesDesign);

let productdesign = document.createElement('p');
productdesign.textContent = "Design";

let placeholder = document.querySelector('a');
placeholder.prepend(productdesign);