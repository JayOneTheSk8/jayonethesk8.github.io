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
  educationTitle, educationPara, contactTitle, contactPara, modal, resumePic, projectIcons,
  pickedProject, highlightedProject, u2b, wordsAboveWater, projectBackground;

let dropdown = 'closed';
let resumeFullScreen = false;
let transitioning = 'false';
let resumePdf = `<embed class="full-resume" src="src/Justin Cox Programming Resume.pdf" width="55%" type="application/pdf">`;
let toggleButtons = { 'ctrl': false, 'shift': false, 'F': false };

const flip = (show, hide) => {
  show.show();
  hide.hide();
};

function allTrue(object) {
  const array = Object.values(object);
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      return false;
    }
  }
  return true;
}

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
    case EDUCATION:
      paragraph.addClass('edu');
      return;
    case PORTFOLIO:
      paragraph.addClass('portfolio');
      projectIcons = $j('.project-icon');
      projectIcons.on('click', switchProject);
      projectIcons.nodes[0].className = "picked";
      highlightedProject = $j('.highlighted');
      u2b = $j('#u2b-background').html();
      wordsAboveWater = $j('#wordsAboveWater-background').html();
      highlightedProject.empty();
      highlightedProject.html(u2b);
      return;
    case CONTACT:
      paragraph.addClass('contact');
      resumePic = $j('.resume-picture');
      resumePic.on('click', toggleFullView);
      if (navbar.width() < 1260) {
        profilePic.hide();
      }
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
  if (navbar.width() < 1260 && (title.nodes[0].innerText === "JUSTIN COX" || title.nodes[0].innerText === "CONTACT")) {
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
      alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);
      checkButton(portfolio);
      return;
    case "EDUCATION":
      alterHtml(educationTitle, educationPara, EDUCATION);
      checkButton(education);
      return;
    case "CONTACT":
      alterHtml(contactTitle, contactPara, CONTACT);
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


function removeButtons(e) {
  switch (e.keyCode) {
    case 16: // SHIFT
      toggleButtons['shift'] = false;
      return;
    case 17: // CTRL
      toggleButtons['ctrl'] = false;
      return;
    case 70: // F
      toggleButtons['F'] = false;
      return;
    default:
      return null;
  }
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
      alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);
      return;
    case 'to-education':
      alterHtml(educationTitle, educationPara, EDUCATION);
      return;
    case 'to-contact':
      alterHtml(contactTitle, contactPara, CONTACT);
      return;
    default:
      return null;
  }
}

function switchLeft() {
  switch (title.html()) {
    case "ABOUT ME":
      window.setTimeout(() => {
        alterHtml(contactTitle, contactPara, CONTACT);
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
        alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);
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

function selectProject(jaysQueryObject, background) {
  jaysQueryObject.removeClass('project-icon');
  jaysQueryObject.addClass('picked');
  highlightedProject.html(background);
}

function switchProject(e) {
  projectIcons.removeClass('picked');
  projectIcons.removeClass('project-icon');
  projectIcons.addClass('project-icon');
  switch (e.target.id) {
    case "u2b":
      pickedProject = $j('#u2b');
      projectBackground = u2b;
      break;
    case "wordsAboveWater":
      pickedProject = $j('#wordsAboveWater');
      projectBackground = wordsAboveWater;
      break;
    default:
      return null;
  }
  selectProject(pickedProject, projectBackground);
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
        alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);
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
        alterHtml(contactTitle, contactPara, CONTACT);
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

function showResume() {
  window.removeEventListener("wheel", changeInfo);
  modal.show();
  resumeFullScreen = true;
}

function hideResume() {
  window.addEventListener("wheel", changeInfo);
  modal.hide();
  resumeFullScreen = false;
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

function toggleFullView(e) {
  if (resumeFullScreen) {
    hideResume();
  } else {
    showResume();
  }
}

function toggleResume(e) {
  if (e.keyCode === 27 && resumeFullScreen) {
    hideResume();
    return;
  }
  if (e.keyCode === 16) {
    toggleButtons['shift'] = true;
  } else if (e.keyCode === 17) {
    toggleButtons['ctrl'] = true;
  } else if (e.keyCode === 70) {
    toggleButtons['F'] = true;
  }
  if (allTrue(toggleButtons) &&  title.nodes[0].innerText === "CONTACT") {
    if (resumeFullScreen) {
      hideResume();
    } else {
      showResume();
    }
  }
}

window.addEventListener("wheel", changeInfo);
window.addEventListener("resize", changeNavbar);
window.addEventListener("keydown", toggleResume);
window.addEventListener("keyup", removeButtons);

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
  modal = $j('.modal');
  modal.on('click', toggleFullView);
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
  modal.html(resumePdf);
  modal.hide();
  alterHtml(homeTitle, homePara, HOME);
  changeNavbar();
  goLinks = $j('.inline');
  goLinks.on('click', changeTab);
});
