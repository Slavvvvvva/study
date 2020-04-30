$(document).ready( function(){
   $(".main_btna").click(function(){
       $(".overlay").fadeIn("6000");
       $(".modal").slideDown("slow");
   });
   $(".close").click(function(){
    $(".overlay").fadeOut("slow");
    $(".modal").slideUp("slow");
   });
  });