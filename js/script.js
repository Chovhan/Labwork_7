$('#button1').click(function() {
  var ne = document.createElement("form");
  ne.innerHTML = document.getElementsByClassName('smth1')[0].innerHTML;
  document.body.appendChild(ne);
})

$('#button2').click(function() {
  var ne = document.getElementsByTagName('form')[1];
  document.body.removeChild(ne);
})

$('#button3').click(function() {
  var ne = document.getElementsByTagName('input');
  var jk = ne.length;
  console.log(ne[i]);
  for (var i=0;i<jk;i++) {
    ne[i].value = "";
  }
})


// $(document).ready(function() {
//   var button = $("#for_audio");
//   var audio = new Audio('https://html5book.ru/examples/media/track.mp3');
//   setTimeout(function(){
//      audio.play();
//       }, 1);
//       button.click(function() {
//           audio.play();
//     });
// });
