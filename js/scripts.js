// Everything OK?
console.log('OK');

// Lightgallerys
$('.gallery').lightGallery({
    thumbnail: false,
    share: false,
    download: false,
    zoom: false,
    counter: false,
    autoplay: false,
    mode: 'lg-slide'
});

// copyright date
var today = new Date();
var year = today.getFullYear(); 
console.log( today, year);
$('span').text (year);

