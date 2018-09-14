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
    switch (shopSel) {
      case 'shop_1':
        let newLi = $('<li class"list-item"></li>').text(textInput);
        $(".shoppingList1").append(newLi);
        e.prevent.default();
        break;
      case 'shop_2':

        break;
      case 'shop_3':

        break;
      case 'shop_4':

        break;
      default:

    }
  });
})
