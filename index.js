$(document).ready(function(){ 
    $(".show-filter").hide();
    var b = false;
    $(".btn-filter").click(function(){
        if(b == false){
            b = true;
            $(".dropdown").hide();
            $("#sort-by").hide();
            $(".show-filter").show();
            $(".btn-filter").addClass('click-btn-filter');

        }
        else{
            b = false;
            $(".show-filter").hide();
            $(".dropdown").show();
            $("#sort-by").show();
            $(".btn-filter").removeClass('click-btn-filter');
        }
    })
});