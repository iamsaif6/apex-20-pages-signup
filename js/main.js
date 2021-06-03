// Upload Button

const defaultBtn2 = document.querySelector('#defaultBtn')
const customBtn = document.querySelector('#upload__btnIcon')

function uploadActivate(){
  defaultBtn2.click();
}




$("#phoneField").CcPicker();


$("#phoneField").CcPicker({
    "countryCode":"AF"
  });



  let input = document.querySelector('.solicitors')
  let inputActive = document.querySelector('#mobile')
  let inputDactive = document.querySelector('#phone')

  //for menu active class


$(inputActive).on('click', function(event) {
  $('.solicitors').addClass('show');
  });


$(inputDactive).on('click', function(event) {
  $('.solicitors').removeClass('show');
  });




  $(document).ready(function(){
    var val = document.getElementById("percent").textContent;
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 100; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      
      var pct = ((100-val)/100)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
  });