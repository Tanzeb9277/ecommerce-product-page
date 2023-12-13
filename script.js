const lightbox = document.getElementById('lightbox');
const openBtn = document.getElementsByClassName('open-btn'); // Select the button that opens the lightbox
const closeBtn = document.querySelector('.close-btn');
const displayItemCount = document.getElementById('item-quantity')
const displayCartItemCount = document.querySelector('.item-count-bubble');
const emptyCart = document.querySelector('.empty-cart')
const filledCart = document.querySelector('.filled-cart')
const cartItemTotal = document.querySelector('.cart-item-total')
const cartItemQuantity = document.querySelector('.cart-item-quantity')
const addToCart = document.querySelector('.add-to-cart-btn')
const deleteItem = document.querySelector('.delete-item')
const increaseQuantity = document.getElementById('increase-quantity')
const decreaseQuantity = document.getElementById('decrease-quantity')
const menu = document.querySelector('.nav-options')
const openMenu = document.getElementById("menu-open")
const clsoeMenu = document.getElementById("menu-close")
const cart = document.getElementById('cart')
const displayImage = document.getElementById("current-image")
const previousImage = document.getElementById("previous-image")
const nextImage = document.getElementById("next-image")

const images ={
    1:"images/image-product-1.jpg",
    2:"images/image-product-2.jpg",
    3:"images/image-product-3.jpg",
    4:"images/image-product-4.jpg"
}

let cartItemCount = 0;
let itemCount = 0;
let currentImage = images[1] ;

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

addToCart.addEventListener('click', () =>{
  if(itemCount > 0 && cartItemCount == 0){
    cartItemCount = cartItemCount + itemCount
    emptyCart.style.display = 'none'
    filledCart.style.display = 'flex'
    cartItemQuantity.innerHTML =  cartItemCount + " "
    cartItemTotal.innerHTML = "$" + cartItemCount * 125
    displayCartItemCount.style.display = 'block'
    displayCartItemCount.innerHTML = cartItemCount
    itemCount = 0 
    displayItemCount.innerHTML = itemCount
  }else if(itemCount > 0 && cartItemCount > 0) {
    cartItemCount = cartItemCount + itemCount
    cartItemQuantity.innerHTML =  cartItemCount + " "
    cartItemTotal.innerHTML = "$" + cartItemCount * 125
    displayCartItemCount.innerHTML = cartItemCount
    itemCount = 0 
    displayItemCount.innerHTML = itemCount
  }
})

deleteItem.addEventListener('click', () =>{
    cartItemCount = 0
    emptyCart.style.display = 'flex'
    filledCart.style.display = 'none'
    cartItemQuantity.innerHTML =  0 + " "
    cartItemTotal.innerHTML = "$" + 0 * 125
    displayCartItemCount.style.display = 'none'
    displayCartItemCount.innerHTML = cartItemCount

})


increaseQuantity.addEventListener('click', ()=>{
  let count = parseInt(displayItemCount.innerHTML)
  count++
  itemCount++
  displayItemCount.innerHTML = count;
})

decreaseQuantity.addEventListener('click', ()=>{
  let count = parseInt(displayItemCount.innerHTML)
  if (itemCount != 0){
    itemCount--
    count--
  }
  displayItemCount.innerHTML = count;
})



cart.addEventListener('click', () =>{
  let cartWindow = document.querySelector('.close-cart')
  if (!cartWindow){
    cartWindow = document.querySelector('.open-cart')
    cartWindow.classList.add("close-cart")
    cartWindow.classList.remove("open-cart")
  }else{
    cartWindow.classList.add("open-cart")
    cartWindow.classList.remove("close-cart")
  }
})

openMenu.addEventListener('click', () =>{
  menu.style.transform ="translateX(0px)";
})

clsoeMenu.addEventListener('click', () =>{
  menu.style.transform ="translateX(-100vw)";
})

// Open lightbox
for(let i = 0; i < openBtn.length; i++){
  openBtn[i].addEventListener('click', (e) => {

    let previousSelected = document.querySelector('.selected-img')

    if (previousSelected){
      previousSelected.classList.remove('selected-img')
    }
      

    e.target.classList.add('selected-img')
    lightbox.classList.add('open');
    let selectedImage = e.target.getAttribute("data-img");
    currentImage = images[selectedImage]
    console.log(currentImage)
    displayImage.src = currentImage
  
  
  });
}

previousImage.addEventListener('click', () =>{

  let previousSelected = document.querySelector('.selected-img')
  
  if (previousSelected){
    let previousImageNum =  parseInt(previousSelected.getAttribute("data-img"))
    previousSelected.classList.remove('selected-img')
    if(previousImageNum == 1){
      let nextImageNum = 4;
      let nextSelected = document.querySelectorAll("[data-img='" + nextImageNum +"']")
      nextSelected[0].classList.add('selected-img')
    }else{
      let nextImageNum = previousImageNum -1;
      let nextSelected = document.querySelectorAll("[data-img='" + nextImageNum +"']")
      nextSelected[0].classList.add('selected-img')
    }
    

    
  }
  

  


  let imgNum = parseInt(getKeyByValue(images, currentImage))
    if(imgNum == 1){
      currentImage = images[4]
      displayImage.src = currentImage
    }else{
      currentImage = images[imgNum - 1]
      displayImage.src = currentImage
    }
} )

nextImage.addEventListener('click', () =>{


  let previousSelected = document.querySelector('.selected-img')
  
  if (previousSelected){
    let previousImageNum =  parseInt(previousSelected.getAttribute("data-img"))
    previousSelected.classList.remove('selected-img')
    if(previousImageNum == 4){
      let nextImageNum = 1;
      let nextSelected = document.querySelectorAll("[data-img='" + nextImageNum +"']")
 
      nextSelected[0].classList.add('selected-img')
    }else{
      let nextImageNum = previousImageNum + 1;
      let nextSelected = document.querySelectorAll("[data-img='" + nextImageNum +"']")

      nextSelected[0].classList.add('selected-img')
    }
    

    
  }


  let imgNum = parseInt(getKeyByValue(images, currentImage))
  console.log(imgNum)
  if(imgNum == 4){
    currentImage = images[1]
    displayImage.src = currentImage
  }else{
    currentImage = images[imgNum + 1]
    console.log(currentImage, imgNum + 1)
    displayImage.src = currentImage
  }
} )


// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('open');
});