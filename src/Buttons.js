const goldButton = document.getElementById('gold');
const silverButton = document.getElementById('silver');
const productImage = document.getElementById('product-image');
const silverImage = 'https://efrainhgmx.com/Italy/assets/images/stainless-steel.png';
const goldImage = 'https://efrainhgmx.com/Italy/assets/images/feedback.png';

const goldColor = () => {
    productImage.src === silverImage ? console.log('Es igual') : console.log('No es igual')
}




goldButton.addEventListener("click", () =>  console.log("Gold"));
silverButton.addEventListener("click", () => console.log('Silver'));
