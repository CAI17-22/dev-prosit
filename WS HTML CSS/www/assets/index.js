window.addEventListener('scroll',()=>{
    let wrap = document.getElementById('products-container');
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        wrap.innerHTML += '<div class="col-lg-4 col-sm-6"><img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"><h2>Produit 1</h2><p>Random text...</p><p><a class="btn btn-secondary" href="#" role="button">Acheter &raquo;</a></p></div>'
        
    }
});
