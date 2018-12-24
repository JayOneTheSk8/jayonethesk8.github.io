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

const HOME = "HOME";
const ABOUT = "ABOUT";
const SKILLS = "SKILLS";
const PORTFOLIO = "PORTFOLIO";
const EDUCATION = "EDUCATION";
const CONTACT = "CONTACT";

let miniBar, navbar, hamburger, dropdownMenu, overlay, about, skills, portfolio,
  education, contact, title, paragraph, lastChecked, homeLinks, aboutLinks, skillsLinks,
  portfolioLinks, educationLinks, contactLinks, goLinks, textarea, homeTitle, homePara,
  aboutTitle, aboutPara, skillsTitle, skillsPara, portfolioTitle, portfolioPara,
  educationTitle, educationPara, contactTitle, contactPara;

let dropdown = 'closed';
let transitioning = 'false';

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
    case HOME:
      textarea.addClass('home-area');
      info.addClass('reverse-info');
      paragraph.addClass('home-links');
      radioButtons.hide();
      if (navbar.width() < 1260) {
        profilePic.hide();
      }
      return;
    case SKILLS:
      title.addClass('skills-header');
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
  if (e.deltaY > 15 || e.deltaY < -15) {
    return;
  }
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
      alterHtml(homeTitle, homePara, HOME);
      goLinks = $j('.inline');
      goLinks.on('click', changeTab);
      return;
    case "ABOUT":
      alterHtml(aboutTitle, aboutPara);
      checkButton(about);
      return;
    case "SKILLS":
      alterHtml(skillsTitle, skillsPara, SKILLS);
      checkButton(skills);
      return;
    case "PORTFOLIO":
      alterHtml(portfolioTitle, portfolioPara);
      checkButton(portfolio);
      return;
    case "EDUCATION":
      alterHtml(educationTitle, educationPara, EDUCATION);
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
  title.nodes[0].className = "info-header"
  info.removeClass('reverse-info');
  textarea.nodes[0].className = 'paragraph';
  profilePic.show();
}

function switchInfo(e) {
  switch (e.target.id) {
    case 'to-about':
      alterHtml(aboutTitle, aboutPara);
      return;
    case 'to-skills':
      alterHtml(skillsTitle, skillsPara, SKILLS);
      return;
    case 'to-portfolio':
      alterHtml(portfolioTitle, portfolioPara);
      return;
    case 'to-education':
      alterHtml(educationTitle, educationPara, EDUCATION);
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
    case "ABOUT ME":
      window.setTimeout(() => {
        alterHtml(contactTitle, contactPara);
        checkButton(contact);
      }, 500);
      return;
    case "SKILLS":
      window.setTimeout(() => {
        alterHtml(aboutTitle, aboutPara);
        checkButton(about);
      }, 500);
      return;
    case "PORTFOLIO":
      window.setTimeout(() => {
        alterHtml(skillsTitle, skillsPara, SKILLS);
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
        alterHtml(educationTitle, educationPara, EDUCATION);
        checkButton(education);
      }, 500);
      return;
    default:
      return null;
  }
}

function switchRight() {
  switch (title.html()) {
    case "ABOUT ME":
      window.setTimeout(() => {
        alterHtml(skillsTitle, skillsPara, SKILLS);
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
        alterHtml(educationTitle, educationPara, EDUCATION);
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
        alterHtml(aboutTitle, aboutPara);
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
  infoSections = $j('.info-sections');
  homeTitle = $j('#home-title').html();
  homePara = $j('#home-paragraph').html();
  aboutTitle = $j('#about-title').html();
  aboutPara = $j('#about-paragraph').html();
  skillsTitle = $j('#skills-title').html();
  skillsPara = $j('#skills-paragraph').html();
  portfolioTitle = $j('#portfolio-title').html();
  portfolioPara = $j('#portfolio-paragraph').html();
  educationTitle = $j('#education-title').html();
  educationPara = $j('#education-paragraph').html();
  contactTitle = $j('#contact-title').html();
  contactPara = $j('#contact-paragraph').html();
  infoSections.remove();
  alterHtml(homeTitle, homePara, HOME);
  alterHtml(contactTitle, contactPara, SKILLS);
  changeNavbar();
  goLinks = $j('.inline');
  goLinks.on('click', changeTab);
});
