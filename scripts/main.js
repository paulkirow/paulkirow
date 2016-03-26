var options = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
var info = document.getElementsByClassName('info-container')[0].getElementsByTagName('div');

function tabClick(name) {
  var target = null;
  // Remove active class from any classes that have it
  for (var i= 0; i<options.length; i++) {
    options[i].className='';
    info[i].className='';
    if (options[i].href.split('#')[1] == name) {
      target = options[i]
    }
  }
  if (target != null) {
    // Add active class to clicked element
    target.className = 'active';
    // Add info class to info window
    var targetId = target.href.split('#')[1];
    document.getElementById(targetId).className = 'info';
  }
}