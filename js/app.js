$(".grid-photo").imagesLoaded( function() {
  $(".grid-photo").masonry({
    itemSelector: ".grid-item"
  });
});

$('#showcase').imagesLoaded( { background: true }, function() {
  $(document).load();
});
