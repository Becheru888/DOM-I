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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation

let anchor = document.querySelectorAll("a")
anchor[0].innerText= siteContent["nav"]["nav-item-1"]
anchor[1].innerText= siteContent["nav"]["nav-item-2"]
anchor[2].innerText= siteContent["nav"]["nav-item-3"]
anchor[3].innerText= siteContent["nav"]["nav-item-4"]
anchor[4].innerText= siteContent["nav"]["nav-item-5"]
anchor[5].innerText= siteContent["nav"]["nav-item-6"]

//NEW CONTENT
anchor.forEach(element => {element.style.color = 'green'})

let navi = document.getElementsByTagName('nav')
let newItem = document.createElement('a')
newItem.textContent = 'Raport'
navi[0].appendChild(newItem)

let newItem2 = document.createElement('a')
newItem2.textContent = 'Raport'
navi[0].prepend(newItem2)


//CTA

let h1text = document.getElementsByTagName('h1');
h1text[0].innerText = siteContent["cta"]["h1"]
let butt = document.getElementsByTagName('button');
butt[0].innerText = siteContent["cta"]["button"]
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

//MAIN SECTION
let main = document.getElementsByClassName("main-content");

//top section

firstH4 = main[0].getElementsByClassName('top-content')[0].getElementsByTagName('h4')[0]
secondH4 = main[0].getElementsByClassName('top-content')[0].getElementsByTagName('h4')[1]
firstH4.innerText = siteContent["main-content"]["features-h4"]
secondH4.innerText = siteContent["main-content"]["about-h4"]
firstP = main[0].getElementsByClassName('top-content')[0].getElementsByTagName('p')[0]
secondP = main[0].getElementsByClassName('top-content')[0].getElementsByTagName('p')[1]
firstP.innerText = siteContent["main-content"]["features-content"]
secondP.innerText = siteContent["main-content"]["about-content"]
let midImg = document.getElementById("middle-img")
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom section

let b1h4 = main[0].getElementsByClassName('bottom-content')[0].getElementsByTagName('h4')[0]
b1h4.innerText = siteContent["main-content"]["services-h4"]
let b2h4 = main[0].getElementsByClassName('bottom-content')[0].getElementsByTagName('h4')[1]
b2h4.innerText = siteContent["main-content"]["product-h4"]
let b3h4 = main[0].getElementsByClassName('bottom-content')[0].getElementsByTagName('h4')[2]
b3h4.innerText = siteContent["main-content"]["vision-h4"]

let b1p = main[0].getElementsByClassName('bottom-content')[0].getElementsByTagName('p')[0]
b1p.innerText = siteContent["main-content"]["services-content"]
let b2p = main[0].getElementsByClassName('bottom-content')[0].getElementsByTagName('p')[1]
b2p.innerText = siteContent["main-content"]["product-content"]
let b3p = main[0].getElementsByClassName('bottom-content')[0].getElementsByTagName('p')[2]
b3p.innerText = siteContent["main-content"]["vision-content"]



//Contact section
let contact = document.getElementsByClassName('contact')[0];


let contH4 = contact.getElementsByTagName('h4')[0];
contH4.innerText = siteContent["contact"]["contact-h4"];
let contP1 = contact.getElementsByTagName('p')[0];
contP1.innerText = siteContent["contact"]["address"];
let contP2 = contact.getElementsByTagName('p')[1];
contP2.innerText = siteContent["contact"]["phone"];
let contP3 = contact.getElementsByTagName('p')[2];
contP3.innerText = siteContent["contact"]["email"];

//Footer

let foot = document.querySelector('footer','p');
foot.innerText = siteContent["footer"]["copyright"]



