// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3> <img src="imagenes/log.png" width="170" height="74"> <div data-role="controlgroup"> <a data-role="button" href="#Principal">Principal</a> <a data-role="button" href="#Armas">Armas Biologicas</a> <a data-role="button" href="#Armas_Tipos">Tipos De Armas</a> <a data-role="button" href="#Un_Poco" >Un Poco De...</a><a data-role="button" href="#Segunda" >2da Guerra Mundial</a> </div> <a data-role="button" href="#Acerca_de" >Informacion</a></div> <div align="center"><img src="imagenes/Zombiedoctor.gif" width="100" height="100" > <img src="imagenes/Ptolecommander.gif" width="100" height="70" > </div> <img src="imagenes/Creepyzombie.gif" width="50" height="60" > </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('.Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
}); //document ready

