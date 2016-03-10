document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('.product')){
    	var firstProduct = document.querySelector('.product:first-child');
    	firstProduct.classList.add('product-active')
       
    	var firstProductIndicator = document.querySelector('.product-indicator:first-of-type');
       	firstProductIndicator.classList.add('product-indicator-active');

        var productIndicator = document.querySelectorAll('.product-indicator');

        for (var i = productIndicator.length - 1; i >= 0; i--) {
            productIndicator[i].onclick = function (e){
                var id = this.dataset.uuid;
                document.querySelector('.product-indicator-active').classList.remove('product-indicator-active');
                this.classList.add('product-indicator-active');
                document.querySelector('.product-active').classList.remove('product-active');
                document.querySelector(".product[data-uuid='"+id+"']").classList.add('product-active');
            }
        };
    };
});