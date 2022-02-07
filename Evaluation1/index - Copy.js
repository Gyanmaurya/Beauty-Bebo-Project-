
var url=" https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getData(){
try{
   var res= await fetch(url)
   var data= await res.json();

   // console.log("res:", data)
  appenData(data.meals) 
  

}
catch(Error){
   console.log("Error:",Error);
}

}
getData();
function appenData(data){
  
 localStorage.setItem("MainData",JSON.stringify(data))
  
data.forEach(function(ele){
   // console.log(ele)
   var div=document.createElement("div")
   var image=document.createElement("img")
   image.src=ele.strMealThumb;
   var name=document.createElement("p")
   name.textContent=`Dish: ${ele.strMeal}`;
   var price=Math.floor(Math.random()*500+1)
   var proprice= document.createElement("p")
   proprice.textContent=`Price: ${price}`
var id=document.createElement("p")
id.textContent=`Id: ${ele.idMeal}`
var cartbtn=document.createElement("button")
cartbtn.textContent="addCart"
cartbtn.addEventListener("click",function(){
    AddCartFun( image,name,proprice)
})


   div.append(image,name,proprice,id,cartbtn)
   document.querySelector("#Items").append(div)

});



}  

function AddCartFun( image,name,proprice){
    var cartArr=JSON.parse(localStorage.getItem("CartItems"))||[]
   var ob={
       n:name,
       src:image,
       price:proprice
   }
   alert("succesfully Added")
  cartArr.push(ob)

   localStorage.setItem("CartItems",JSON.stringify(cartArr))
   appenData(cartArr)
}

  
   



