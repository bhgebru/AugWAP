let inMotion=false;
$(function() {
  $('#stop_button').hide();
  function initializeInput() {
    $('#width_value').val(2);
    $('#number_circle').val(2);
    $('#growth_amount').val(2);
    $('#growth_rate').val(2);
  }
  function getTemplateCircle() {
    let elem= $('<div>', {
        'class': 'movables',
        'display': 'inline-block',
        'width': '50px',
        'height': '50px',
        'background-color': 'blue',
        //'position': 'absolute',
        'top': '100px',
        'left': '100px'
      });
    return elem;
  }
  initializeInput();
  let movableTemplate= getTemplateCircle();
  //window.alert(movableTemplate.attr('background-color'));
  movableTemplate.appendTo($("body"));
  movableTemplate.show();

  $('#start_button').on('click', (evt) => {
      inMotion=false;
      $('#stop_button').show();
      $(this).hide();
    $(evt.target).hide();
  });
  $('#stop_button').on('click',  (evt) => {
      $('#start_button').show();
      inMotion=true;
      $(this).hide();
      $(evt.target).hide();
  });
});
