const images = [
    "customer-0.jpg",
    "customer-1.jpg",
    "customer-2.jpg",
    "customer-3.jpg",
    "customer-4.jpg"
]

const names = [
    "Oleg",
    "Leha",
    "Sanya",
    "Dima",
    "Tommy"
]

const texts = [
    "Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues.",
    "Text messages may be sent over a cellular network, or may also be sent via an Internet connection.",
    "'Txt msg' redirects here. For the TV series, see Pop-Up Video.",
    "From Wikipedia, the free encyclopedia",
    "Text messaging"
]

let count = 0;

const buttons = document.querySelectorAll('.btn');
const img = document.getElementById('customer-img');
const name = document.getElementById('customer-name');
const text = document.getElementById('customer-text');

name.textContent = 'Fedor';
text.textContent = "Description";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ( button.classList.contains('prevBtn') ) {
            count--;
            if (count < 0) {
                count = images.length - 1;
            }
        }
        else if ( button.classList.contains('nextBtn') ) {
            count++;
            if (count > images.length - 1) {
                count = 0;
            }
        }
        img.src = `img/${images[count]}`;
        name.textContent = names[count];
        text.textContent = texts[count];
    })
})
