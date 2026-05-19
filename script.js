
//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
  name: 'John delavega',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1989',
  active: true,
  img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};


const profil = document.querySelector('.insert');
console.log(profil);

const image = document.createElement('img');
image.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg';
image.alt = 'John delavega'
profil.appendChild(image);
image.style.height = '400px';
image.style.marginTop = '40px';
image.style.boxShadow = '0px 0px 5px 5px white'


const name = document.createElement('h1');
name.innerText = 'John delavega';
profil.appendChild(name);
name.style.fontSize = '3em';

const email = document.createElement('p');
email.innerText = 'john.doe@example.com';
profil.appendChild(email);

const age = document.createElement('p');
age.innerText = '25';
profil.appendChild(age);

const date = document.createElement('p');
date.innerText = '08/02/1989';
profil.appendChild(date);

const active = document.createElement('p');
active.innerText = 'true'; 
profil.appendChild(active);

active.innerText = userData.active === true ? 'En ligne' : 'Hors-ligne';

// Sélectionner tous les <p>

const allP = document.getElementsByTagName('p');
console.log(allP);

const myArray = Array.from(allP);
console.log(myArray)

myArray.map((x) => {
    x.style.fontSize = '1.8em';
})

profil.style.boxShadow = '0px 0px 10px 10px pink';
profil.style.margin = 'auto';
profil.style.textAlign = 'center';
profil.style.color = 'white';
profil.style.paddingBottom = '10px';
profil.style.width = '500px';
profil.style.background = 'linear-gradient(45deg, rgb(250, 218, 97) 0%, rgb(255, 145, 136) 50%, rgb(255, 90, 205) 100%)';





