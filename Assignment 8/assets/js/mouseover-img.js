(function() {

  var images = document.getElementsByClassName('mouse-over-image');
  var len_images = images.length;

  for (var i = 0; i < len_images; i++) {
    images[i].addEventListener('mousemove', mouseover_image);
    images[i].addEventListener('mouseout', mouseout_image);

  }

  console.log(images);

  function mouseover_image() {
    event.currentTarget.classList.add('image-style');
  }

  function mouseout_image() {
    event.currentTarget.classList.remove("image-style")
  }
}());
