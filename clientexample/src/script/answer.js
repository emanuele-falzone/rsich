function rightAnswer(){
  document.getElementById('right').style.backgroundColor = 'darkgreen';
  $.notify({message: 'Right answer! +50 points.'}, {allow_dismiss: true, type: 'success'});
}
