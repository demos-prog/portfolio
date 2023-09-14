"use strict"

// showing skills
const skills_elem = document.querySelector('#skills');
const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "Salesforse", "English: intermediate (B1)"];
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