(function () {

  var money_btn = document.getElementsByClassName('size-btn');
  var len_size= money_btn.length;
  var payment_btn = document.getElementsByClassName("add-to-cart-btn");
  var len_cart = payment_btn.length;

  for (var i=0; i<len_size; i++) {
    money_btn[i].addEventListener('click', size_click);
  }
  for (var i=0; i<len_cart; i++) {
    payment_btn[i].addEventListener('click', cart_click);
  }



  function size_click() {
    var money_btn = document.getElementsByClassName("size-btn");
    for (var k=0; k<money_btn.length; k++) {
      if(money_btn[k].classList.contains('active-size-btn')) {
        money_btn[k].classList.remove('active-size-btn');
      }
    }
    event.currentTarget.classList.add('active-size-btn');
  }

  function cart_click() {
    var payment_btn = document.getElementsByClassName("add-to-cart-btn");
    for (var k=0; k<payment_btn.length; k++) {
      if(payment_btn[k].classList.contains('active-money-btn')) {
        payment_btn[k].classList.remove('active-money-btn');
      }
    }
      event.currentTarget.classList.add('active-money-btn');
  }

}());
