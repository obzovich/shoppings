$(document).ready(function(){
    $("#mobile-menu-open").click(function () {
        if ($(".mobile__menu-open").is(":hidden")) {
            $(".mobile__menu-open").slideDown("fast");
            $(".mobile__menu-button-lines").css("display", "none");
            $(".mobile__menu-button-close").css("display", "block");
            $(".mobile__menu-button--caption").html('закрыть');
        } else {
            $(".mobile__menu-open").slideUp("fast");
            $(".mobile__menu-button-lines").css("display", "flex");
            $(".mobile__menu-button-close").css("display", "none");
            $(".mobile__menu-button--caption").html('меню');
        }
        return false;
    });
});

$(document).ready(function(){
    $(".mobile__menu-search").click(function () {
            $(".mobile__menu-logo").css("display", "none");
            $(".mobile__menu-search-input").show("slow");
           })
            
            $(".close-menu-search").click(function () {
            $(".mobile__menu-search-input").css("display", "none");
            $(".mobile__menu-logo").slideDown("fast");
           })

});