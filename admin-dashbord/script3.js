document.addEventListener("DOMContentLoaded", function () {
    let myproducts = document.querySelectorAll('.one_product'); 
    const selectFilter = document.getElementById("categoryFilter");
    selectFilter.addEventListener("change" , function(){
        myproducts.forEach(product => {
       
            if(product.getAttribute('data_category') == selectFilter.value || selectFilter.value =="ALL" ){
                product.style.display = "flex"
             }else{
                 product.style.display = "none"
             }
           
             
            
        });
    })
});