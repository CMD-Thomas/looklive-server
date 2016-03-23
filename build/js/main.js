(function () {
    'use strict';
    function init() {
        //credits to Dennis 
        var links = document.querySelectorAll('a[data-url]');
        [].forEach.call(links, function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var url = event.currentTarget.getAttribute('data-url');
                var href = event.currentTarget.href;
                history.pushState(null, null, href);
                apiCall(url);
            });
        });

        window.addEventListener('popstate', function(event) {
            var url = '/api' + window.location.pathname;
            if (url === '/api/') {
                url = '/api/feed';
            }

            apiCall(url)
        });
    }

    function showProducts() {
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
    }


    function apiCall(url) {
        function reqListener() {
            var data = this.responseText;
            var main = document.querySelector('main');
            main.innerHTML = data
        }

        function reqError(err) {
            console.log('Fetch Error :-S', err);
        }

        var oReq = new XMLHttpRequest();
        oReq.onload = reqListener;
        oReq.onerror = reqError;
        oReq.open('get', url, true);
        oReq.send();
    };

    function ready() {
        init();
    }

    document.addEventListener('DOMContentLoaded', function() {

        ready();
        if (/appearance/.test(window.location.href)) {
            showProducts();
        }
    }, false);
})();