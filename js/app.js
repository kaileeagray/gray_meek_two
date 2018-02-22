$(".grid-photo, .bg-img").imagesLoaded({ background: true }, function() {
  $(".grid-photo").masonry({
    itemSelector: ".grid-item"
  });
  alert('test');
  
});
