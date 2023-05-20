const ulEl = document.getElementById('categories');
const liEl = document.querySelectorAll('.item');
console.log('Number of categories:',liEl.length)
// console.log(liEl)
liEl.forEach((liElem) => {
    const h2El = liElem.querySelector('h2');
    const titleEl = h2El.textContent
      const  liElements = liElem.querySelectorAll('li');
    console.log('Elements: ',liElements.length);
    console.log('Category:',titleEl)
} )
