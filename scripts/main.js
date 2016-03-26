var options = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
var info = document.getElementsByClassName('info-container')[0].getElementsByTagName('div');

function tabClick(e) {
  // Remove active class from any classes that have it
  for (var i= 0; i<options.length; i++) {
    options[i].className='';
    info[i].className='';
  }
  // Add active class to clicked element
  e = e || window.event;
  var target = e.target || e.srcElement;
  target = target.parentElement;
  target.className = 'active';
  // Add info class to info window
  var targetId = target.href.split('#')[1];
  document.getElementById(targetId).className = 'info';
}