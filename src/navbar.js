Array.prototype.rotate = function(times = 1) {
  let element, array;
  let that = this;
  for (var i = 0; i < times; i++) {
    element = [that[0]];
    array = that.slice(1);
    that = array.concat(element);
  }
  return that;
};

let miniBar, navbar, hamburger, dropdownMenu, overlay, about, skills, portfolio,
  education, contact, title, paragraph, lastChecked, homeLinks, aboutLinks, skillsLinks,
  portfolioLinks, educationLinks, contactLinks, goLinks, textarea;

let dropdown = 'closed';
let transitioning = 'false';

const homeTitle = "JUSTIN COX";
const homePara = "<ul class='to-list'><li class='to-section'><p class='inline'>ABOUT</p></li><li class='to-section'><p class='inline'>SKILLS</p></li><li class='to-section'><p class='inline'>PORTFOLIO</p></li><li class='to-section'><p class='inline'>EDUCATION</p></li><li class='to-section'><p class='inline'>CONTACT</p></li></ul>";

const aboutMeTitle = "ABOUT ME";
const aboutMePara = "I am a software engineer based in New York City with experience working with JavaScript, Ruby, Rails, React + Redux, SQL, HTML/CSS, and Git. My current hobbies include playing fighting games and puzzle solving. I fell in love with programming after a coworker noticed my passion for problem solving. This infatuation led me on a career path to become a software engineer. After a full year of studying, I was accepted into App Academy, a 1000-hour intensive coding bootcamp with an emphasis on test-driven development, scalability, object-oriented programming, coding style, and security. <br><br> The biggest draw to programming for me is having the ability to turn a blank text file into whatever you want from a stable and scalable algorithm to an elegant and functional landing page. I aim to, not only expand my knowledge of programming, but to use my knowledge and capabilities for the golbal benefit.";

const skillsTitle = "SKILLS";
const skillsPara = "Skills Info Here";

const portfolioTitle = "PORTFOLIO";
const portfolioPara = "Portfolio Info Here";

const educationTitle = "EDUCATION";
const educationPara = "<article class='experience-point'><figcaption class='figlabel'>CSS3</figcaption><figure class='css3'><svg viewBox='0 0 128 128'><path fill='#1572B6' d='M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154'></path><path fill='#1572B6' d='M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z'></path></svg></figure></article>";

const contactTitle = "CONTACT";
const contactPara = "Contact Info Here";

const flip = (show, hide) => {
  show.show();
  hide.hide();
};

function alterHtml(passedTitle, passedPara, type = undefined) {
  title.html(passedTitle);
  paragraph.html(passedPara);
  resetParagraph();
  radioButtons.show();
  switch (type) {
    case "HOME":
      textarea.addClass('home-area');
      info.addClass('reverse-info');
      paragraph.addClass('home-links');
      radioButtons.hide();
      if (navbar.width() < 1260) {
        profilePic.hide();
      }
      return;
    case "EDUCATION":
      paragraph.addClass('edu');
      return;
    default:
      return null;
  }
}

function changeNavbar(e) {
  if (navbar.width() < 800 && navbar.nodes[0].className !== "hidden") {
    flip(miniBar, navbar);
  } else if (miniBar.width() > 800) {
    flip(navbar, miniBar);
  }
  profilePic.show();
  if (navbar.width() < 1260 && title.nodes[0].innerText === "JUSTIN COX") {
    profilePic.hide();
  }
}

function closeDropdown(e) {
  if (dropdown == "open") {
    dropdownMenu.addClass('hidden');
    dropdown = "closed"
  }
}

function changeInfo(e) {
  let direction = e.deltaX > 0 ? 'right' : 'left';
  if (direction === 'right') {
    switchRight();
  } else {
    switchLeft();
  }
}

function changeTab(e) {
  switch (e.target.innerText) {
    case "HOME":
      alterHtml(homeTitle, homePara, "HOME");
      goLinks = $j('.inline');
      goLinks.on('click', changeTab);
      return;
    case "ABOUT":
      alterHtml(aboutMeTitle, aboutMePara);
      checkButton(about);
      return;
    case "SKILLS":
      alterHtml(skillsTitle, skillsPara, "SKILLS");
      checkButton(skills);
      return;
    case "PORTFOLIO":
      alterHtml(portfolioTitle, portfolioPara);
      checkButton(portfolio);
      return;
    case "EDUCATION":
      alterHtml(educationTitle, educationPara, "EDUCATION");
      checkButton(education);
      return;
    case "CONTACT":
      alterHtml(contactTitle, contactPara);
      checkButton(contact);
      return;
    default:
      return null;
  }
}

function checkButton(button) {
  button.nodes[0].checked = true;
}

function resetParagraph() {
  paragraph.nodes[0].className = "info-paragraph";
  info.removeClass('reverse-info');
  textarea.nodes[0].className = 'paragraph';
  profilePic.show();
}

function switchInfo(e) {
  switch (e.target.id) {
    case 'to-about':
      alterHtml(aboutMeTitle, aboutMePara);
      return;
    case 'to-skills':
      alterHtml(skillsTitle, skillsPara, "SKILLS");
      return;
    case 'to-portfolio':
      alterHtml(portfolioTitle, portfolioPara);
      return;
    case 'to-education':
      alterHtml(educationTitle, educationPara, "EDUCATION");
      return;
    case 'to-contact':
      alterHtml(contactTitle, contactPara);
      return;
    default:
      return null;
  }
}

function switchLeft() {
  switch (title.html()) {
    case "HOME":
      return null;
    case "ABOUT ME":
      window.setTimeout(() => {
        alterHtml(contactTitle, contactPara);
        checkButton(contact);
      }, 500);
      return;
    case "SKILLS":
      window.setTimeout(() => {
        alterHtml(aboutMeTitle, aboutMePara);
        checkButton(about);
      }, 500);
      return;
    case "PORTFOLIO":
      window.setTimeout(() => {
        alterHtml(skillsTitle, skillsPara, "SKILLS");
        checkButton(skills);
      }, 500);
      return;
    case "EDUCATION":
      window.setTimeout(() => {
        alterHtml(portfolioTitle, portfolioPara);
        checkButton(portfolio);
      }, 500);
      return;
    case "CONTACT":
      window.setTimeout(() => {
        alterHtml(educationTitle, educationPara, "EDUCATION");
        checkButton(education);
      }, 500);
      return;
    default:
      return null;
  }
}

function switchRight() {
  switch (title.html()) {
    case "HOME":
      return null;
    case "ABOUT ME":
      window.setTimeout(() => {
        alterHtml(skillsTitle, skillsPara, "SKILLS");
        checkButton(skills);
      }, 500);
      return;
    case "SKILLS":
      window.setTimeout(() => {
        alterHtml(portfolioTitle, portfolioPara);
        checkButton(portfolio);
      }, 500);
      return;
    case "PORTFOLIO":
      window.setTimeout(() => {
        alterHtml(educationTitle, educationPara, "EDUCATION");
        checkButton(education);
      }, 500);
      return;
    case "EDUCATION":
      window.setTimeout(() => {
        alterHtml(contactTitle, contactPara);
        checkButton(contact);
      }, 500);
      return;
    case "CONTACT":
      window.setTimeout(() => {
        alterHtml(aboutMeTitle, aboutMePara);
        checkButton(about);
      }, 500);
      return;
    default:
      return null;
  }
}

function toggleDropdown(e) {
  if (dropdown === 'closed') {
    dropdownMenu.removeClass('hidden');
    dropdown = "open";
  } else {
    dropdownMenu.addClass('hidden');
    dropdown = "closed"
  }
}

window.addEventListener("wheel", changeInfo);
window.addEventListener("resize", changeNavbar);

document.addEventListener("DOMContentLoaded", (e) => {
  miniBar = $j('.navbar-reduced');
  navbar = $j('.navbar');
  hamburger = $j('.hamburger-icon');
  dropdownMenu = $j('.dropdown-links');
  overlay = $j('.screen-overlay');
  infoScreens = $j('.info-screens');
  radioButtons = $j('.info-switch');
  about = $j('#to-about');
  skills = $j('#to-skills');
  portfolio = $j('#to-portfolio');
  education = $j('#to-education');
  contact = $j('#to-contact');
  links = $j('.section-link, .dropdown-link');
  info = $j('.info');
  title = $j('.info-header');
  textarea = $j('.paragraph');
  paragraph = $j('.info-paragraph');
  profilePic = $j('.profile-picture');
  links.on('click', changeTab);
  radioButtons.on('click', switchInfo);
  overlay.on('click', closeDropdown);
  infoScreens.on('click', closeDropdown);
  hamburger.on('click', toggleDropdown);
  // alterHtml(homeTitle, homePara, "HOME"); //TURN ON IN PRODUCTION
  // alterHtml(educationTitle, educationPara, "EDUCATION");
  changeNavbar();
  goLinks = $j('.inline');
  goLinks.on('click', changeTab);
});
