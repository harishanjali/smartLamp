let light = document.getElementById("light");
let onOffBtn = document.getElementById("onOffBtn");
console.log(onOffBtn);
let flag = true;
let homeImage = document.getElementById("homeImage");

onOffBtn.onclick = function(){
    if(flag){
        light.style.display = "none";
        onOffBtn.textContent = "ON";
        onOffBtn.style.backgroundColor="#247038";
        onOffBtn.style.color="#ffffff";
        flag = false;
    }
    else{
        light.style.display = "block";
        onOffBtn.textContent ="OFF";
        onOffBtn.style.backgroundColor="#686b69";
        onOffBtn.style.color="#ffffff";
        flag = true;
    }
}

let imageUrls = ["ProductsSection/ProductsImages/myhome1.jpg",
                 "ProductsSection/ProductsImages/myhome2.jpg",
                 "ProductsSection/ProductsImages/imagessmart.jpg",
                 "ProductsSection/ProductsImages/homeimage.jpg",
                 "images/1cba82fc-0e92-4d71-9b8a-38b182274c72_1.52bd96b1839a4c777e202ad19fe2492e.jpeg"   
]

let index = 0;

let uniqueId = setInterval(function(){
    if(index==5){
        index = 0;
    }
    homeImage.src = imageUrls[index];
    index++
},1000);