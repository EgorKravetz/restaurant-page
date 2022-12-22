document.documentElement.style.cssText = `
  box-sizing: border-box
`

document.body.style.cssText = `
  background-color: rgb(102, 02, 147);
                              `

const main = document.createElement('main');
document.body.appendChild(main);

const upperContainer = document.createElement('div');
main.appendChild(upperContainer);

const h1 = document.createElement('h1');
h1.textContent = 'Goose'
upperContainer.appendChild(h1);

const header = document.createElement('header');
upperContainer.appendChild(header);

const home = document.createElement('a');
home.textContent = 'Home';
header.appendChild(home);


const about = document.createElement('a');
about.textContent = 'About'
header.appendChild(about);

const eat = document.createElement('a');
eat.textContent = 'Eat';
header.appendChild(eat);

const healthSafety = document.createElement('a');
healthSafety.textContent = 'Health & Safety';
header.appendChild(healthSafety);

const cook = document.createElement('a');
cook.textContent = 'Cook'
header.appendChild(cook);


