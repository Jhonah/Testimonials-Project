const images = [
    "customer-0.jpg",
    "customer-1.jpg",
    "customer-2.jpg",
    "customer-3.jpg",
    "customer-4.jpg"
]

const buttons = document.querySelectorAll('.btn');
const img = document.getElementById('customer-img');
const name = document.getElementById('customer-name');
const text = document.getElementById('customer-text');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if ( button.classList.contains('prevBtn') ) {
        alert('Left');36000-22500=13500
      }
      else if ( button.classList.contains('nextBtn') ) {
        alert('Right');
      }
    })
})
