// $('.stars').on('click', 'p', function(){
// var $this = $(this),
// $parent = $this.parent();
//
//   if($parent.hasClass('.selected')) {
//     $this.siblings('.full').removeClass('.full');
//     $parent.removeClass('.selected');
//   } else {
//     $this.prevAll().andSelf().addClass('.full');
//     $parent.addClass('.selected');
//   }
// });

(function () {

  var ele = document.getElementsByClassName('fa-star');
  var len = ele.length;

  for (var i=0; i<len; i++) {
    ele[i].addEventListener('click', c_click);
  }

  function c_click() {
    var elements = document.getElementsByClassName("fa-star");
    for (var k=0; k<elements.length; k++) {
      if(elements[k].classList.contains('active')) {
        event.currentTarget.classList.remove('active');
        event.currentTarget.classList.add('gray-star');
      }
      else if (elements[k].classList.contains("gray-star")){
        event.currentTarget.classList.remove("gray-star");
        event.currentTarget.classList.add("active");
      }
    }

  }

}());
