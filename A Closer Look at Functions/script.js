'use strict';

const createEle = function (
  ele,
  innertxt = '',
  clsName = '',
  eleId = '',
  callback = null
) {
  if (!ele) return false;
  const newEle = document.createElement(ele);
  const classArray = clsName.split(' ');
  const newClasses = [...new Set(classArray)];
  if (clsName) newEle.classList.add(...newClasses);
  if (innertxt) newEle.innerText = innertxt;
  return newEle;
};
/*
 * createEle()
 * 1st arrgument element name eg : 'h1'
 * 2nd arrgument element inner text eg: 'Hi !'
 * 3rd arrgument element className eg: 'class1 class2'
 * 4rd arrgument element id eg: 'class1 class2' */
const CreateElements = [
  {
    name: 'h1',
    text: 'A Closer Look at Functions',
    class: 'title h1title',
    id: 'title',
  },
  {
    name: 'button',
    text: 'Buy new plane 🛩',
    class: 'buy',
    id: 'btn buy',
    callback: 'handleBuy()',
  },
  {
    name: 'button',
    text: 'Answer poll ⁉️',
    class: 'poll',
    id: 'btn poll',
  },
];

const h1 = createEle('h1', 'A Closer Look at Functions', 'title');
const btn1 = createEle('button', 'Buy new plane 🛩', 'buy');
const btn2 = createEle('button', 'Answer poll ⁉️', 'poll');

const elements = { h1, btn1, btn2 };

for (const element of Object.values(elements)) {
  document.body.append(element);
}
