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
  education, contact, title, paragraph, lastChecked;

let dropdown = 'closed';
let transitioning = 'false';

const aboutMeTitle = "ABOUT ME";
const aboutPara = "I am a software engineer based in New York City with experience working with JavaScript, Ruby, Rails, React + Redux, SQL, HTML/CSS, and Git. My current hobbies include playing fighting games and puzzle solving. I fell in love with programming after a coworker noticed my passion for problem solving. This infatuation led me on a career path to become a software engineer. After a full year of studying, I was accepted into App Academy, a 1000-hour intensive coding bootcamp with an emphasis on test-driven development, scalability, object-oriented programming, coding style, and security. <br><br> The biggest draw to programming for me is having the ability to turn a blank text file into whatever you want from a stable and scalable algorithm to an elegant and functional landing page. I aim to, not only expand my knowledge of programming, but to use my knowledge and capabilities for the golbal benefit.";

const skillsTitle = "SKILLS";
const skillsPara = "Skills Info Here";

const portfolioTitle = "PORTFOLIO";
const portfolioPara = "Portfolio Info Here";

const educationTitle = "EDUCATION";
const educationPara = "Education Info Here";

const contactTitle = "CONTACT";
const contactPara = "Contact Info Here";

const flip = (show, hide) => {
  show.show();
  hide.hide();
};

function alterHtml(passedTitle, passedPara) {
  title.html(passedTitle);
  paragraph.html(passedPara);
}

function changeNavbar(e) {
  if (navbar.width() < 800 && navbar.nodes[0].className !== "hidden") {
    flip(miniBar, navbar);
  } else if (miniBar.width() > 800) {
    flip(navbar, miniBar);
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
  // if (direction === 'left') {
  //
  // } else {
  //
  // }
}

function switchInfo(e) {
  switch (e.target.id) {
    case 'to-about':
      alterHtml(aboutMeTitle, aboutPara);
      lastChecked = about;
      return;
    case 'to-skills':
      console.log('to-skills');
      lastChecked = skills;
      return;
    case 'to-portfolio':
      console.log('to-portfolio');
      lastChecked = portfolio;
      return;
    case 'to-education':
      console.log('to-education');
      lastChecked = education;
      return;
    case 'to-contact':
      console.log('to-contact');
      lastChecked = contact;
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
  lastChecked = about;
  skills = $j('#to-skills');
  portfolio = $j('#to-portfolio');
  education = $j('#to-education');
  contact = $j('#to-contact');
  title = $j('.info-header');
  paragraph = $j('.info-paragraph');
  radioButtons.on('click', switchInfo);
  overlay.on('click', closeDropdown);
  infoScreens.on('click', closeDropdown);
  hamburger.on('click', toggleDropdown);
  if (navbar.width() < 800) {
    flip(miniBar, navbar);
  } else {
    flip(navbar, miniBar);
  }
});
