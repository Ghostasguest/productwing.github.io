// Optional: You can add some simple animations or interactions using JavaScript
const products = document.querySelectorAll('.product');

products.forEach(product => {
  product.addEventListener('mouseover', () => {
    product.style.transform = 'scale(1.05)';
    product.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  product.addEventListener('mouseout', () => {
    product.style.transform = 'scale(1)';
    product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});
