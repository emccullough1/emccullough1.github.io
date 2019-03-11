// Everything OK?
console.log('OK');

// Lightgallerys
$('#gallery-1').lightGallery({
    thumbnail: false,
    share: false,
    download: false,
    mode: 'lg-tube'
});

$('#gallery-2').lightGallery({
    thumbnail: true,
    share: false,
    download: false,
    mode: 'lg-slide-vertical-growth'
});
