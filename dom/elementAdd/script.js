// add new element
const articleOne = document.querySelector('#article-one');
const newPara = document.createElement('p');
newPara.innerHTML = 'I love Pakistan';
articleOne.appendChild(newPara);


const listItem = document.querySelector('.list-item');
const newList = document.createElement('li');
newList.innerHTML = 'I Love You';
listItem.appendChild(newList);
