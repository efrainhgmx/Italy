const goldButton = document.getElementById('gold');
const silverButton = document.getElementById('silver');
const productImage = document.getElementById('product-image');
const silverImage = 'https://efrainhgmx.com/Italy/assets/images/stainless-steel.png';
const goldImage = 'https://efrainhgmx.com/Italy/assets/images/feedback.png';

const goldColor = () => {
    productImage.src === silverImage ? productImage.setAttribute("src", goldImage) : console.log('Gold color'); 
}

const silverColor = () => {
    productImage.src === silverImage ? console.log('Silver color') : productImage.setAttribute("src", silverImage);
}



goldButton.addEventListener("click", () => goldColor());
silverButton.addEventListener("click", () => silverColor());
