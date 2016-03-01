(function() {

  var money_list = document.getElementsByClassName('money-btn');
  var money_length = money_list.length;
  var details_list = document.getElementsByClassName('details-btn');
  var details_length = money_list.length;
  // console.log(money_list);
  // console.log(details_list);

  for (var i = 0; i < money_length; i++) {
    money_list[i].addEventListener('click', money_click);
  }
  for (var i = 0; i < details_length; i++) {
    details_list[i].addEventListener('click', details_click);
  }

  function money_click() {
    var money_list = document.getElementsByClassName("money-btn");
    for (var k = 0; k < money_list.length; k++) {
      if (money_list[k].classList.contains('active-money-btn')) {
        money_list[k].classList.remove('active-money-btn');
      }
    }
    event.currentTarget.classList.add('active-money-btn');
  }

  function details_click() {
    var money_list = document.getElementsByClassName("details-btn");
    for (var k = 0; k < money_list.length; k++) {
      if (money_list[k].classList.contains('active-details-btn')) {
        money_list[k].classList.remove('active-details-btn');
      }
    }
    event.currentTarget.classList.add('active-details-btn');
  }

}());
