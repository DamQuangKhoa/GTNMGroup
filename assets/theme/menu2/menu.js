$(document).ready(function(){
    $("#nav li").hover(
    	alert('msg');
    function(){
        $(this).children('ul').hide();
        $(this).children('ul').slideDown('fast');
    },
    function () {
        $('ul',this).slideUp('fast');            
    });

     
});