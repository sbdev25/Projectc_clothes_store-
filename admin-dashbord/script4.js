document.addEventListener("DOMContentLoaded", function () {
       // input element 
       let productName = document.getElementById('name');
       let productstock = document.getElementById('stock');
       let productdesc = document.getElementById('sec');
       let productprice = document.getElementById('price');
   // upload the image 
   let uploadfile = document.getElementById('upload');
   let image = document.getElementById('imgup');
   
   uploadfile.addEventListener('change' , (e) => {
   image.src = URL.createObjectURL(e.target.files[0]);
   
   console.log(URL.createObjectURL(e.target.files[0]));
   });
   
   // product is added and // confirmation of new product 
   
   let confbutton = document.getElementById('confirm');
   
   
   confbutton.onclick=function(){
       let src = image.getAttribute("src");
           
           
           
            if(productName.value != "" && 
                (productstock.value != 0 ||productstock != "" ) 
               && productdesc.value != "" && 
                productprice.value !="" && src != ""){
                    alert(" new product is added ");
            }else{
                alert(" you should fill all the information  ");
            }
   }
});