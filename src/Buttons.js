const goldButton = document.getElementById('gold');
const silverButton = document.getElementById('silver');
const productImage = document.getElementById('product-image');
const silverImage = 'https://efrainhgmx.com/Italy/assets/images/stainless-steel.png';
const goldImage = 'https://efrainhgmx.com/Italy/assets/images/feedback.png';
const color = document.getElementById('color');

const goldColor = () => {
    if(productImage.src === silverImage && color.innerHTML === "Silver") {
        productImage.setAttribute("src", goldImage);
        color.innerHTML = "Gold";
    } else {
        console.log('Gold color'); 
    }
  
}

const silverColor = () => {
   if(productImage.src === silverImage && color === "Silver") {
       console.log("Silver color");
   } else {
        productImage.setAttribute("src", silverImage);
        color.innerHTML = "Silver";
   }
}



goldButton.addEventListener("click", () => goldColor());
silverButton.addEventListener("click", () => silverColor());