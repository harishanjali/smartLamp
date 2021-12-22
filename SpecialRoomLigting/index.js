let livingRoomContainer = document.getElementById("livingRoomContainer");
let bedRoomContainer = document.getElementById("bedRoomContainer");
let kitchenRoomContainer = document.getElementById("kitchenRoomContainer");
let bathRoomContainer = document.getElementById("bathRoomContainer");
let outdoorContainer = document.getElementById("outdoorContainer");
let cartItems = document.getElementById("cartItems");
console.log(livingRoomContainer);

let livingRoom = [{imageUrl:'SpecialLighting/livingb1.png',type:'Suspension Light',features:['40936 Outline','B22','coolDayLight'],price:'Price:5000/-'},
                  {imageUrl:'SpecialLighting/livingb2.png',type:'Suspension Light',features:['23-140W','B22','coolDayLight'],price:'Price:20350/-'},
                  {imageUrl:'SpecialLighting/livingb3.png',type:'Suspension light',features:['10-75W','B22','coolDayLight'],price:'Price:12000/-'},
                  {imageUrl:'SpecialLighting/livingb4.png',type:'Wall light',features:['30-40W','B22','coolDayLight'],price:'Price:7999/-'},
                  {imageUrl:'SpecialLighting/livingb5.png',type:'Suspension light',features:['9-70W','B22','White'],price:'Price:10000/-'},
                  {imageUrl:'SpecialLighting/livingb6.png',type:'Suspension light',features:['50-65W','B22','coolDayLight'],price:'Price:15550/-'},
                  {imageUrl:'SpecialLighting/livingb7.png',type:'Suspension light',features:['12-75W','B22','coolDayLight'],price:'Price:13290/-'},
                  {imageUrl:'SpecialLighting/livingb8.png',type:'Ceiling Light',features:['20-160W','B22','coolDayLight'],price:'Price:4999/-'}
]

let bedRoom = [{imageUrl:'SpecialLighting/livingb9.png',type:'Suspension Light',features:['40936 Outline','B22','coolDayLight'],price:'Price:5000/-'},
                  {imageUrl:'SpecialLighting/livingb10.png',type:'Table Lamp',features:['23-140W','B22','coolDayLight'],price:'Price:20350/-'},
                  {imageUrl:'SpecialLighting/livingb11.png',type:'Suspension light',features:['10-75W','B22','coolDayLight'],price:'Price:12000/-'},
                  {imageUrl:'SpecialLighting/livingb12.png',type:'Wall light',features:['30-40W','B22','coolDayLight'],price:'Price:7999/-'},
                  {imageUrl:'SpecialLighting/livingb13.png',type:'Spot light',features:['9-70W','B22','White'],price:'Price:10000/-'},
                  {imageUrl:'SpecialLighting/livingb14.png',type:'Flexible Light',features:['50-65W','B22','coolDayLight'],price:'Price:15550/-'},
                  {imageUrl:'SpecialLighting/livingb15.png',type:'Dual Spot light',features:['12-75W','B22','coolDayLight'],price:'Price:13290/-'},
                  {imageUrl:'SpecialLighting/livingb16.png',type:'Suspension Light',features:['20-160W','B22','coolDayLight'],price:'Price:4999/-'}
]



let i = 1;
let cartNumber = 0;

function createProduct(stream,sectionId){
    for (let val of stream){
        let flag = true;
        let productId = i;
        let productContainer = document.createElement("div");
        let productImage = document.createElement("img");
        let productHead = document.createElement("h1");
        let productAbout = document.createElement("ul");
        let productFeature1 = document.createElement("li");
        let productFeature2 = document.createElement("li");
        let productFeature3 = document.createElement("li");
        let productPrice = document.createElement("h2");
        let cartbtn = document.createElement("button");
        cartbtn.textContent = "Add To Cart";
        cartbtn.id = "button"+i;
        cartbtn.style.height = "38px";
        cartbtn.style.width = "138px";
        cartbtn.onclick = function(){
            if(flag){
                cartNumber++;
                cartItems.textContent = cartNumber;
                cartbtn.textContent ="Remove"
                cartbtn.classList.add('cart-button');
                flag = false;
            }
            else{
                cartNumber--;
                cartItems.textContent = cartNumber;
                cartbtn.textContent ="Add To Cart"
                cartbtn.classList.remove('cart-button');
                flag = true;
            }
        }
        productContainer.id = productId;
        productContainer.classList.add('product-container');

        productImage.src=val.imageUrl;
        productImage.classList.add('product-image');
        productHead.textContent = val.type;
        productFeature1.textContent = val.features[0];
        productFeature2.textContent = val.features[1];
        productFeature3.textContent = val.features[2];
        productAbout.classList.add('list-style');
        productPrice.textContent = val.price;
    
        productContainer.appendChild(productImage);
        productContainer.appendChild(productHead);
        productAbout.appendChild(productFeature1);
        productAbout.appendChild(productFeature2);
        productAbout.appendChild(productFeature3);
        productContainer.appendChild(productAbout);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(cartbtn);
        sectionId.appendChild(productContainer);
        i++;
    }
}

createProduct(livingRoom,livingRoomContainer);
createProduct(bedRoom,bedRoomContainer);
createProduct(bedRoom,kitchenRoomContainer);
createProduct(bedRoom,bathRoomContainer);
createProduct(bedRoom,outdoorContainer);