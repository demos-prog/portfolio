"use strict"

const skills_elem = document.querySelector('#skills');

const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "Salesforse", "English: intermediate (B1)"];

skills.forEach(skill => {
  const div = document.createElement('div');
  div.className = "skill";
  div.innerText = skill;
  skills_elem.append(div);
});