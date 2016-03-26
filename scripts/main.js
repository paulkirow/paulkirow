var options = document.getElementsByTagName('nav')[0].getElementsByTagName('a');

function tabClick(e) {
  // Remove active class from any classes that have it
  for (var i= 0; i<options.length; i++) {
    options[i].className='';
  }
  // Add active class to clicked element
  e = e || window.event;
  var target = e.target || e.srcElement;
  target.className = 'active';
}