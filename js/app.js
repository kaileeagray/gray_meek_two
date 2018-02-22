$(".grid-photo").imagesLoaded(function() {
  $(".grid-photo").masonry({
    itemSelector: ".grid-item"
  });
  $(document).load();
});
