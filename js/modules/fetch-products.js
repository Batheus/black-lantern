import AnimateNumbers from './animate-numbers.js';

export default function fetchProducts(url, target) {
  // Create the div with the info
  // about the total numbers of the products
  function createProductElement(product) {
    const div = document.createElement('div');
    div.classList.add('number-product');
    div.innerHTML = `<h3>${product.brand}</h3><span data-number>${product.total}</span>`;
    return div;
  }

  // Fill each product on DOM
  const numbersGrid = document.querySelector(target);
  function fillProducts(product) {
    const divProduct = createProductElement(product);
    numbersGrid.appendChild(divProduct);
  }

  // Animate the numbers of each product
  function animateProductNumbers() {
    // Observer Class active caught in element using data-anime animate-scroll.js
    // It animates only when the section is active, otherwise the function don't run
    const animateNumbers = new AnimateNumbers('[data-number]', '.numbers', 'active');
    animateNumbers.init();
  }

  // Push each product from a JSON file
  // and create each item using createProductElement
  async function createProduct() {
    try {
      // Fetch, wait the response and transform it in JSON
      const productResponse = await fetch(url);
      const productJSON = await productResponse.json();

      // After the JSON transformation, activates the function
      // to fill and animate the numbers
      productJSON.forEach(product => fillProducts(product));
      animateProductNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return createProduct();
}
