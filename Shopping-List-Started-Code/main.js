$(document).ready(function(){
  // Your code here
  // user enters text
  // user selects shop from list
  // user presses add button
  // text from textbox is added to the correct shop list

  $('#shoppingForm').on('submit',function(e){
    // on submit button click, text and shop selction are placed into variables
    let textInput = $('#addToList').val();
    let shopSel = $('.shop option:selected').val();
    let newLi = "";
    // switch statement to add text to correct shop list
    switch (shopSel) {
      case 'shop_1':
         newLi = $('<li class="list-item"></li>').text(textInput);
        $(".shoppingList1").append(newLi);
        e.preventDefault();
        break;
      case 'shop_2':
         newLi = $('<li class="list-item"></li>').text(textInput);
        $(".shoppingList2").append(newLi);
        e.preventDefault();
        break;
      case 'shop_3':
        newLi = $('<li class="list-item"></li>').text(textInput);
       $(".shoppingList3").append(newLi);
       e.preventDefault();
        break;
      case 'shop_4':
        newLi = $('<li class="list-item"></li>').text(textInput);
       $(".shoppingList4").append(newLi);
       e.preventDefault();
        break;
      default:

    }
    $('.list-item').dblclick(function(){
      $(this).fadeOut();
    });
  });
})
