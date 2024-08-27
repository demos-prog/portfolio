"use strict"
window.location.href = 'https://portfolio2-two-blue.vercel.app/'
// showing skills
const skills_elem = document.querySelector('#skills');
const skills = ["HTML", "CSS", "JavaScript", "React", 'TypeScript', 'Redux', "Java", "Salesforse", "English: intermediate (B1)"];
skills.forEach(skill => {
  const div = document.createElement('div');
  div.className = "skill";
  div.innerText = skill;
  skills_elem.append(div);
});

// closing burger menu after selecting section
const menu_buttons = document.querySelectorAll('.menu_button');
const checkbox = document.querySelector('.checkbox');

menu_buttons.forEach(el => {
  el.addEventListener('click', () => {
    if (checkbox.checked) checkbox.checked = false;
  })
})

// scroll
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}