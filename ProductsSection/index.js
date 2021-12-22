
let lightBulbContainer = document.getElementById("lightBulbContainer");
let decorationBulbContainer = document.getElementById("decorationBulbContainer");
let downLightContainer = document.getElementById("downLightContainer");
let tubeLightContainer = document.getElementById("tubeLightContainer");
let smartLightContainer = document.getElementById("smartLightContainer");
let cartItems = document.getElementById("cartItems");

let cartNumber = 0;
// console.log(lightBulbContainer)

let lightBulbs = [{imageUrl:'ProductsImages/bulb1.png',type:'LED',features:['10.25-20W','B22','coolDayLight'],price:'Price:220/-'},
                  {imageUrl:'ProductsImages/bulb2.png',type:'LED',features:['23-140W','B22','coolDayLight'],price:'Price:450/-'},
                  {imageUrl:'ProductsImages/bulb3.png',type:'LED',features:['10-75W','B22','coolDayLight'],price:'Price:280/-'},
                  {imageUrl:'ProductsImages/bulb4.png',type:'LED',features:['30-40W','B22','coolDayLight'],price:'Price:799/-'},
                  {imageUrl:'ProductsImages/bulb5.png',type:'LED',features:['9-70W','B22','White'],price:'Price:155/-'},
                  {imageUrl:'ProductsImages/bulb6.png',type:'LED',features:['50-65W','B22','coolDayLight'],price:'Price:1350/-'},
                  {imageUrl:'ProductsImages/bulb7.png',type:'LED',features:['12-75W','B22','coolDayLight'],price:'Price:329/-'},
                  {imageUrl:'ProductsImages/bulb8.png',type:'LED',features:['20-160W','B22','coolDayLight'],price:'Price:499/-'}
]

let decorationBulbs = [{imageUrl:'ProductsImages/bulb9.png',type:'Wall light',features:['220-240V','chrome','Metal,Glass'],price:'Price:3100/-'},
                  {imageUrl:'ProductsImages/bulb10.png',type:'Wall light',features:['220-240V','Metal-Glass','Bronze'],price:'Price:2650/-'},
                  {imageUrl:'ProductsImages/bulb3.png',type:'LED',features:['220-240V','chrome','Metal,Glass'],price:'Price:280/-'},
                  {imageUrl:'ProductsImages/bulb4.png',type:'LED',features:['30-40W','B22','coolDayLight'],price:'Price:799/-'},
                  {imageUrl:'ProductsImages/bulb5.png',type:'LED',features:['9-70W','B22','White'],price:'Price:155/-'},
                  {imageUrl:'ProductsImages/bulb6.png',type:'LED',features:['50-65W','B22','coolDayLight'],price:'Price:1350/-'},
                  {imageUrl:'ProductsImages/bulb7.png',type:'LED',features:['12-75W','B22','coolDayLight'],price:'Price:329/-'},
                  {imageUrl:'ProductsImages/bulb8.png',type:'LED',features:['20-160W','B22','coolDayLight'],price:'Price:499/-'}
]

let downLights = [{imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb9.png',type:'Suspension Light',features:['40936 Outline','B22','coolDayLight'],price:'Price:5000/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb10.png',type:'Table Lamp',features:['23-140W','B22','coolDayLight'],price:'Price:20350/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb11.png',type:'Suspension light',features:['10-75W','B22','coolDayLight'],price:'Price:12000/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb12.png',type:'Wall light',features:['30-40W','B22','coolDayLight'],price:'Price:7999/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb13.png',type:'Spot light',features:['9-70W','B22','White'],price:'Price:10000/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb14.png',type:'Flexible Light',features:['50-65W','B22','coolDayLight'],price:'Price:15550/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb15.png',type:'Dual Spot light',features:['12-75W','B22','coolDayLight'],price:'Price:13290/-'},
                  {imageUrl:'../SpecialRoomLigting/SpecialLighting/livingb16.png',type:'Suspension Light',features:['20-160W','B22','coolDayLight'],price:'Price:4999/-'}
]


let i = 1;

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
createProduct(lightBulbs,lightBulbContainer);
createProduct(decorationBulbs,decorationBulbContainer);
createProduct(downLights,downLightContainer);
createProduct(decorationBulbs,tubeLightContainer);
createProduct(decorationBulbs,smartLightContainer);


