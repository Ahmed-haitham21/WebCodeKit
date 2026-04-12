
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.setAttribute("data-theme", "light");
    icon.className = "fa-regular fa-moon";
  } else {
    html.setAttribute("data-theme", "dark");
    icon.className = "fa-regular fa-sun";
  }
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
function nextSlide(type){

let slides=document.querySelectorAll("." + type)
let active=document.querySelector("." + type + ".active")

let index=[...slides].indexOf(active)

active.classList.remove("active")

let next=(index+1)%slides.length

slides[next].classList.add("active")

}

function prevSlide(type){

let slides=document.querySelectorAll("." + type)
let active=document.querySelector("." + type + ".active")

let index=[...slides].indexOf(active)

active.classList.remove("active")

let prev=(index-1+slides.length)%slides.length

slides[prev].classList.add("active")

}
const buttons = [ 

`<button class="btn-1" data-btn="1">
            <div class="original btn-icon">
              <i class="fas fa-user-plus"></i><span>Signup</span>
            </div>
            <div class="letters">
              <span>s</span><span>i</span><span>g</span><span>n</span
              ><span>U</span><span>P</span>
            </div>
          </button>`,

`<button class="btn-2" data-btn="2">
            <span class="btn-icon"
              ><i class="fas fa-sign-in-alt"></i><span>Login</span></span
            >
          </button>`,

`<button class="btn-3" data-btn="3">
            <span class="btn-icon"
              ><i class="fas fa-compass"></i><span>Explore</span></span
            >
          </button>`,

`<button class="btn-4" data-btn="4">
            <span class="btn-icon"
              ><i class="fas fa-download"></i><span>Download</span></span
            >
          </button>`,
`<button class="btn-5" data-btn="5">
            <span class="btn-icon"
              ><i class="fas fa-paper-plane"></i><span>Send</span></span
            >
          </button>`,
`<button class="btn-6" data-btn="6">
            <span class="btn-icon"
              ><i class="fas fa-rocket"></i><span>Get Started</span></span
            >
          </button> `,
`<button class="btn-7" data-btn="7" onclick="goToButtons()">
            <span class="btn-icon"
              ><i class="fas fa-info-circle"></i><span>Learn More</span></span
            >
          </button> `,
]


 // Index

let buttonIndex = 0;


// Preview Element

const buttonPreview = document.getElementById("buttonPreview");


// Show Button

function showButton(){

buttonPreview.innerHTML = buttons[buttonIndex];

}


// Next Button

function nextButton(){

buttonIndex++;

if(buttonIndex >= buttons.length){

buttonIndex = 0;

}

showButton();

}


// Previous Button

function prevButton(){

buttonIndex--;

if(buttonIndex < 0){

buttonIndex = buttons.length - 1;

}

showButton();

}
function goToButtons(){
window.location.href ="btn.html";
}


// Initial Load

showButton();
/*************/
// Cards Array
const cards = [

` <div class="card card-1">
        <div class="card-icon"><i class="fas fa-rocket"></i></div>
        <h3>🚀 إطلاق جديد</h3>
        <p>اكتشف أحدث منتجاتنا المتميزة التي ستغير طريقة عملك</p>
        <button>اطلب الآن</button>
        <button class="get-code-btn" onclick="showCode(1)">
          Get This Code
        </button>
      </div>`,

`   <div class="card card-8">
        <div class="card-icon"><i class="fas fa-magic"></i></div>
        <h3>✨ سحر خاص</h3>
        <p>تجربة تسوق سحرية مع عروضنا الحصرية</p>
        <button>ابدأ التجربة</button>
        <button class="get-code-btn" onclick="showCode(8)">
          Get This Code
        </button>
      </div>`,

` <div class="card card-3">
        <div class="card-badge">جديد</div>
        <div class="card-icon"><i class="fas fa-star"></i></div>
        <h3>⭐ منتج مميز</h3>
        <p>الأكثر مبيعاً هذا الشهر - جودة استثنائية</p>
        <button>تصفح المزيد</button>
        <button class="get-code-btn" onclick="showCode(3)">
          Get This Code
        </button>
      </div>`,
`<div class="card card-4">
        <div class="card-icon"><i class="fas fa-crown"></i></div>
        <h3>👑 باقة VIP</h3>
        <p>العضوية الحصرية واحصل على مميزات لا نهائية</p>
        <button>اشترك الآن</button>
        <button class="get-code-btn" onclick="showCode(4)">
          Get This Code
        </button>
      </div> ` ,     
`<div class="card card-5">
        <div class="card-icon"><i class="fas fa-leaf"></i></div>
        <h3>🌿 صديق للبيئة</h3>
        <p>منتجات طبيعية 100% آمنة على صحتك والبيئة</p>
        <button>اعرف المزيد</button>
        <button class="get-code-btn" onclick="showCode(5)">
          Get This Code
        </button>
      </div> ` ,
`<div class="card card-6">
        <div class="card-stripe"></div>
        <div class="card-icon"><i class="fas fa-bolt"></i></div>
        <h3>⚡ سرعة البرق</h3>
        <p>توصيل خلال ساعة واحدة - طلبك في بابك</p>
        <button>اطلب سريعاً</button>
        <button class="get-code-btn" onclick="showCode(6)">
          Get This Code
        </button>
      </div>
 ` ,
` <div class="card card-7">
        <div class="card-icon"><i class="fas fa-shield-alt"></i></div>
        <h3>🛡️ أمان تام</h3>
        <p>ضمان 5 سنوات على جميع منتجاتنا - اطمئن</p>
        <button>شاهد الضمان</button>
        <button class="get-code-btn" onclick="showCode(7)">
          Get This Code
        </button>
      </div>
 ` ,
`<button class="btn-7" data-btn="7" onclick="goToCards()">
            <span class="btn-icon"
              ><i class="fas fa-info-circle"></i><span>Learn More</span></span
            >
          </button>  ` 
];

// Index
let cardIndex = 0;

// Preview Element
const cardPreview = document.getElementById("cardPreview");

// Show Card
function showCard(){
cardPreview.innerHTML = cards[cardIndex];
}

// Next Card
function nextCard(){
cardIndex++;
if(cardIndex >= cards.length){ cardIndex = 0; }
showCard();
}

// Previous Card
function prevCard(){
cardIndex--;
if(cardIndex < 0){ cardIndex = cards.length - 1; }
showCard();
}
function goToCards(){
window.location.href ="card.htm";
}

// Initial Load
showCard();
/********* */
// Buttons Array

const forms = [

`<div class="form-card">
          <div class="form-preview login-preview">
            <h3>تسجيل الدخول</h3>
            <form class="mini-form login-form">
              <input type="text" placeholder="اسم المستخدم" readonly />
              <input type="password" placeholder="كلمة المرور" readonly />
              <button type="button" class="preview-btn">دخول</button>
            </form>
          </div>
          <div class="form-actions">
            <button class="open-btn" data-form="login">فتح</button>
            <button class="get-code-btn" data-form="login">
              احصل على الكود
            </button>
          </div>
        </div>`,

` <div class="form-card">
          <div class="form-preview register-preview">
            <h3>تسجيل جديد</h3>
            <form class="mini-form register-form">
              <input type="text" placeholder="الاسم" readonly />
              <input type="email" placeholder="البريد الإلكتروني" readonly />
              <input type="password" placeholder="كلمة المرور" readonly />
              <button type="button" class="preview-btn">تسجيل</button>
            </form>
          </div>
          <div class="form-actions">
            <button class="open-btn" data-form="register">فتح</button>
            <button class="get-code-btn" data-form="register">
              احصل على الكود
            </button>
          </div>
        </div>`,

`<div class="form-card">
          <div class="form-preview contact-preview">
            <h3>تواصل معنا</h3>
            <form class="mini-form contact-form">
              <input type="text" placeholder="الاسم" readonly />
              <input type="email" placeholder="البريد الإلكتروني" readonly />
              <textarea placeholder="الرسالة" readonly></textarea>
            </form>
          </div>
          <div class="form-actions">
            <button class="open-btn" data-form="contact">فتح</button>
            <button class="get-code-btn" data-form="contact">
              احصل على الكود
            </button>
          </div>
        </div>`,

`<div class="form-card">
          <div class="form-preview search-preview">
            <h3>بحث</h3>
            <form class="mini-form search-form">
              <input type="search" placeholder="ابحث هنا..." readonly />
              <button type="button" class="preview-btn">بحث</button>
            </form>
          </div>
          <div class="form-actions">
            <button class="open-btn" data-form="search">فتح</button>
            <button class="get-code-btn" data-form="search">
              احصل على الكود
            </button>
          </div>
        </div>`,
  ` <button class="btn-7" data-btn="7" onclick="goToforms()">
            <span class="btn-icon"
              ><i class="fas fa-info-circle"></i><span>Learn More</span></span
            >
          </button>  `    

];


// Index

let formIndex = 0;


// Preview Element

const formPreview = document.getElementById("formPreview");


// Show Button

function showform(){

formPreview.innerHTML = forms[formIndex];

}


// Next Button

function nextform(){

formIndex++;

if(formIndex >= forms.length){

formIndex = 0;

}

showform();

}


// Previous Button

function prevform(){

formIndex--;

if(formIndex < 0){

formIndex = forms.length - 1;

}

showform();

}
function goToforms(){
window.location.href ="form.htm";
}

// Initial Load

showform();
// JS to animate on scroll
 // Select all the step cards
const steps = document.querySelectorAll('.step');

// Function to handle scroll animation
function animateSteps() {
  const triggerBottom = window.innerHeight * 0.85;

  steps.forEach(step => {
    const stepTop = step.getBoundingClientRect().top;

    if(stepTop < triggerBottom) {
      step.classList.add('visible');
    }
  });
}

// Add scroll and load event listeners for animation
window.addEventListener('scroll', animateSteps);
window.addEventListener('load', animateSteps);

// Add click event to each card to redirect to specific page
steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    switch(index){
      case 0:
        window.location.href = 'btn.html';   // Redirect for Buttons
        break;
      case 1:
        window.location.href = 'card.htm';     // Redirect for Cards
        break;
      case 2:
        window.location.href = 'form.htm';     // Redirect for Forms
        break;
      case 3:
        window.location.href = 'system.htm';   // Redirect for Systems
        break;
    }
  });
});
// Scroll animation for Systems Section and CTA
const systemCards = document.querySelectorAll('.system-card');

function animateSystems() {
  const triggerBottom = window.innerHeight * 0.85;

  systemCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateSystems);
window.addEventListener('load', animateSystems);