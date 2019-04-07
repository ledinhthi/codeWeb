function quayso() {

    repeat = setInterval(function(){
        $(".col2").each(function () {
            var soNN = Math.round(Math.random() * 99);
            $(this).html(soNN);
        });
    },50); 
    
} 