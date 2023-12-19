var cores = document.getElementsByClassName('opt-color');

Array.from(cores).forEach(function(cor){
    cor.addEventListener('click', function(){
        var image = this.dataset.image;
        document.getElementById('product-image').src = image;

        document.getElementsByClassName('selected')[0].classList.remove('selected');
        this.children[0].classList.add('selected');
    });

})