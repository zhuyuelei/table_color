(function () {
    $.fn.init_itable_color=function(){
        return this.each(function(){
            if($(this).attr("itable_color")==1){
                return ;
            }
            var color=$(this).attr("itable_color");
            console.log(color);
            $(this).attr("itable_color","1");
            console.log($(this).parent().find(".itable_color"));
            $(this).parent().find(".itable_color").each(function(i,select){
                console.log(123);
                if(i%2!=0){
                    $(select).css("backgroundColor",color);
                }
            })
        })
    }
})(window.jQuery);