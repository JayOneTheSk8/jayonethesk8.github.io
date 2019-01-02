/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Array.prototype.rotate = function(times = 1) {\n  let element, array;\n  let that = this;\n  for (var i = 0; i < times; i++) {\n    element = [that[0]];\n    array = that.slice(1);\n    that = array.concat(element);\n  }\n  return that;\n};\n\nconst HOME = \"HOME\";\nconst ABOUT = \"ABOUT\";\nconst SKILLS = \"SKILLS\";\nconst PORTFOLIO = \"PORTFOLIO\";\nconst EDUCATION = \"EDUCATION\";\nconst CONTACT = \"CONTACT\";\n\nlet miniBar, navbar, hamburger, dropdownMenu, overlay, about, skills, portfolio,\n  education, contact, title, paragraph, lastChecked, homeLinks, aboutLinks, skillsLinks,\n  portfolioLinks, educationLinks, contactLinks, goLinks, textarea, homeTitle, homePara,\n  aboutTitle, aboutPara, skillsTitle, skillsPara, portfolioTitle, portfolioPara,\n  educationTitle, educationPara, contactTitle, contactPara, modal, resumePic, projectIcons,\n  pickedProject, highlightedProject, u2b, wordsAboveWater, projectBackground;\n\nlet dropdown = 'closed';\nlet resumeFullScreen = false;\nlet transitioning = 'false';\nlet resumePdf = `<embed class=\"full-resume\" src=\"src/Justin Cox Programming Resume.pdf\" width=\"55%\" type=\"application/pdf\">`;\nlet toggleButtons = { 'ctrl': false, 'shift': false, 'F': false };\n\nconst flip = (show, hide) => {\n  show.show();\n  hide.hide();\n};\n\nfunction allTrue(object) {\n  const array = Object.values(object);\n  for (let i = 0; i < array.length; i++) {\n    if (!array[i]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction alterHtml(passedTitle, passedPara, type = undefined) {\n  title.html(passedTitle);\n  paragraph.html(passedPara);\n  resetParagraph();\n  radioButtons.show();\n  switch (type) {\n    case HOME:\n      textarea.addClass('home-area');\n      info.addClass('reverse-info');\n      paragraph.addClass('home-links');\n      radioButtons.hide();\n      if (navbar.width() < 1260) {\n        profilePic.hide();\n      }\n      return;\n    case SKILLS:\n      title.addClass('skills-header');\n      if (navbar.width() < 1260) {\n        profilePic.hide();\n      }\n      return;\n    case EDUCATION:\n      paragraph.addClass('edu');\n      return;\n    case PORTFOLIO:\n      paragraph.addClass('portfolio');\n      projectIcons = $j('.project-icon');\n      projectIcons.on('click', switchProject);\n      projectIcons.nodes[0].className = \"picked\";\n      highlightedProject = $j('.highlighted');\n      u2b = $j('#u2b-info').html();\n      wordsAboveWater = $j('#wordsAboveWater-info').html();\n      highlightedProject.empty();\n      highlightedProject.html(u2b);\n      if (navbar.width() < 1260) {\n        profilePic.hide();\n      }\n      return;\n    case CONTACT:\n      paragraph.addClass('contact');\n      resumePic = $j('.resume-picture');\n      resumePic.on('click', toggleFullView);\n      if (navbar.width() < 1260) {\n        profilePic.hide();\n      }\n      return;\n    default:\n      return null;\n  }\n}\n\nfunction changeNavbar(e) {\n  if (navbar.width() < 800 && navbar.nodes[0].className !== \"hidden\") {\n    flip(miniBar, navbar);\n  } else if (miniBar.width() > 800) {\n    flip(navbar, miniBar);\n  }\n  profilePic.show();\n  if (navbar.width() < 1260 && ([\"JUSTIN COX\", \"CONTACT\", \"PORTFOLIO\", \"SKILLS\"].includes(title.nodes[0].innerText))) {\n    profilePic.hide();\n  }\n}\n\nfunction closeDropdown(e) {\n  if (dropdown == \"open\") {\n    dropdownMenu.addClass('hidden');\n    dropdown = \"closed\"\n  }\n}\n\nfunction changeInfo(e) {\n  if (e.deltaY > 15 || e.deltaY < -15) {\n    return;\n  }\n  let direction = e.deltaX > 0 ? 'right' : 'left';\n  if (direction === 'right') {\n    switchRight();\n  } else {\n    switchLeft();\n  }\n}\n\nfunction changeTab(e) {\n  switch (e.target.innerText) {\n    case \"HOME\":\n      alterHtml(homeTitle, homePara, HOME);\n      goLinks = $j('.inline');\n      goLinks.on('click', changeTab);\n      return;\n    case \"ABOUT\":\n      alterHtml(aboutTitle, aboutPara);\n      checkButton(about);\n      return;\n    case \"SKILLS\":\n      alterHtml(skillsTitle, skillsPara, SKILLS);\n      checkButton(skills);\n      return;\n    case \"PORTFOLIO\":\n      alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);\n      checkButton(portfolio);\n      return;\n    case \"EDUCATION\":\n      alterHtml(educationTitle, educationPara, EDUCATION);\n      checkButton(education);\n      return;\n    case \"CONTACT\":\n      alterHtml(contactTitle, contactPara, CONTACT);\n      checkButton(contact);\n      return;\n    default:\n      return null;\n  }\n}\n\nfunction checkButton(button) {\n  button.nodes[0].checked = true;\n}\n\nfunction resetParagraph() {\n  paragraph.nodes[0].className = \"info-paragraph\";\n  title.nodes[0].className = \"info-header\"\n  info.removeClass('reverse-info');\n  textarea.nodes[0].className = 'paragraph';\n  profilePic.show();\n}\n\n\nfunction removeButtons(e) {\n  switch (e.keyCode) {\n    case 16: // SHIFT\n      toggleButtons['shift'] = false;\n      return;\n    case 17: // CTRL\n      toggleButtons['ctrl'] = false;\n      return;\n    case 70: // F\n      toggleButtons['F'] = false;\n      return;\n    default:\n      return null;\n  }\n}\n\nfunction switchInfo(e) {\n  switch (e.target.id) {\n    case 'to-about':\n      alterHtml(aboutTitle, aboutPara);\n      return;\n    case 'to-skills':\n      alterHtml(skillsTitle, skillsPara, SKILLS);\n      return;\n    case 'to-portfolio':\n      alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);\n      return;\n    case 'to-education':\n      alterHtml(educationTitle, educationPara, EDUCATION);\n      return;\n    case 'to-contact':\n      alterHtml(contactTitle, contactPara, CONTACT);\n      return;\n    default:\n      return null;\n  }\n}\n\nfunction switchLeft() {\n  switch (title.html()) {\n    case \"ABOUT ME\":\n      window.setTimeout(() => {\n        alterHtml(contactTitle, contactPara, CONTACT);\n        checkButton(contact);\n      }, 500);\n      return;\n    case \"SKILLS\":\n      window.setTimeout(() => {\n        alterHtml(aboutTitle, aboutPara);\n        checkButton(about);\n      }, 500);\n      return;\n    case \"PORTFOLIO\":\n      window.setTimeout(() => {\n        alterHtml(skillsTitle, skillsPara, SKILLS);\n        checkButton(skills);\n      }, 500);\n      return;\n    case \"EDUCATION\":\n      window.setTimeout(() => {\n        alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);\n        checkButton(portfolio);\n      }, 500);\n      return;\n    case \"CONTACT\":\n      window.setTimeout(() => {\n        alterHtml(educationTitle, educationPara, EDUCATION);\n        checkButton(education);\n      }, 500);\n      return;\n    default:\n      return null;\n  }\n}\n\nfunction selectProject(jaysQueryObject, background) {\n  jaysQueryObject.removeClass('project-icon');\n  jaysQueryObject.addClass('picked');\n  highlightedProject.html(background);\n}\n\nfunction switchProject(e) {\n  projectIcons.removeClass('picked');\n  projectIcons.removeClass('project-icon');\n  projectIcons.addClass('project-icon');\n  switch (e.target.id) {\n    case \"u2b\":\n      pickedProject = $j('#u2b');\n      projectBackground = u2b;\n      break;\n    case \"wordsAboveWater\":\n      pickedProject = $j('#wordsAboveWater');\n      projectBackground = wordsAboveWater;\n      break;\n    default:\n      return null;\n  }\n  selectProject(pickedProject, projectBackground);\n}\n\nfunction switchRight() {\n  switch (title.html()) {\n    case \"ABOUT ME\":\n      window.setTimeout(() => {\n        alterHtml(skillsTitle, skillsPara, SKILLS);\n        checkButton(skills);\n      }, 500);\n      return;\n    case \"SKILLS\":\n      window.setTimeout(() => {\n        alterHtml(portfolioTitle, portfolioPara, PORTFOLIO);\n        checkButton(portfolio);\n      }, 500);\n      return;\n    case \"PORTFOLIO\":\n      window.setTimeout(() => {\n        alterHtml(educationTitle, educationPara, EDUCATION);\n        checkButton(education);\n      }, 500);\n      return;\n    case \"EDUCATION\":\n      window.setTimeout(() => {\n        alterHtml(contactTitle, contactPara, CONTACT);\n        checkButton(contact);\n      }, 500);\n      return;\n    case \"CONTACT\":\n      window.setTimeout(() => {\n        alterHtml(aboutTitle, aboutPara);\n        checkButton(about);\n      }, 500);\n      return;\n    default:\n      return null;\n  }\n}\n\nfunction showResume() {\n  window.removeEventListener(\"wheel\", changeInfo);\n  modal.show();\n  resumeFullScreen = true;\n}\n\nfunction hideResume() {\n  window.addEventListener(\"wheel\", changeInfo);\n  modal.hide();\n  resumeFullScreen = false;\n}\n\nfunction toggleDropdown(e) {\n  if (dropdown === 'closed') {\n    dropdownMenu.removeClass('hidden');\n    dropdown = \"open\";\n  } else {\n    dropdownMenu.addClass('hidden');\n    dropdown = \"closed\"\n  }\n}\n\nfunction toggleFullView(e) {\n  if (resumeFullScreen) {\n    hideResume();\n  } else {\n    showResume();\n  }\n}\n\nfunction toggleResume(e) {\n  if (e.keyCode === 27 && resumeFullScreen) {\n    hideResume();\n    return;\n  }\n  if (e.keyCode === 16) {\n    toggleButtons['shift'] = true;\n  } else if (e.keyCode === 17) {\n    toggleButtons['ctrl'] = true;\n  } else if (e.keyCode === 70) {\n    toggleButtons['F'] = true;\n  }\n  if (allTrue(toggleButtons) &&  title.nodes[0].innerText === \"CONTACT\") {\n    if (resumeFullScreen) {\n      hideResume();\n    } else {\n      showResume();\n    }\n  }\n}\n\nwindow.addEventListener(\"wheel\", changeInfo);\nwindow.addEventListener(\"resize\", changeNavbar);\nwindow.addEventListener(\"keydown\", toggleResume);\nwindow.addEventListener(\"keyup\", removeButtons);\n\ndocument.addEventListener(\"DOMContentLoaded\", (e) => {\n  miniBar = $j('.navbar-reduced');\n  navbar = $j('.navbar');\n  hamburger = $j('.hamburger-icon');\n  dropdownMenu = $j('.dropdown-links');\n  overlay = $j('.screen-overlay');\n  infoScreens = $j('.info-screens');\n  radioButtons = $j('.info-switch');\n  about = $j('#to-about');\n  skills = $j('#to-skills');\n  portfolio = $j('#to-portfolio');\n  education = $j('#to-education');\n  contact = $j('#to-contact');\n  links = $j('.section-link, .dropdown-link');\n  info = $j('.info');\n  title = $j('.info-header');\n  textarea = $j('.paragraph');\n  paragraph = $j('.info-paragraph');\n  profilePic = $j('.profile-picture');\n  modal = $j('.modal');\n  modal.on('click', toggleFullView);\n  links.on('click', changeTab);\n  radioButtons.on('click', switchInfo);\n  overlay.on('click', closeDropdown);\n  infoScreens.on('click', closeDropdown);\n  hamburger.on('click', toggleDropdown);\n  infoSections = $j('.info-sections');\n  homeTitle = $j('#home-title').html();\n  homePara = $j('#home-paragraph').html();\n  aboutTitle = $j('#about-title').html();\n  aboutPara = $j('#about-paragraph').html();\n  skillsTitle = $j('#skills-title').html();\n  skillsPara = $j('#skills-paragraph').html();\n  portfolioTitle = $j('#portfolio-title').html();\n  portfolioPara = $j('#portfolio-paragraph').html();\n  educationTitle = $j('#education-title').html();\n  educationPara = $j('#education-paragraph').html();\n  contactTitle = $j('#contact-title').html();\n  contactPara = $j('#contact-paragraph').html();\n  infoSections.remove();\n  modal.html(resumePdf);\n  modal.hide();\n  alterHtml(homeTitle, homePara, HOME);\n  changeNavbar();\n  goLinks = $j('.inline');\n  goLinks.on('click', changeTab);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });