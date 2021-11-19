$(document).ready(()=>{

    // // preload-image
    setTimeout(()=>{
        $("#preload-img").css("opacity", 1);
        $(".preload-circle").css("opacity", 1);
    }, 500);

    // // preload-disappear
    setTimeout(()=>{
        $(".preload-body").css("opacity", 0);
    }, 4000);

    // // preload-go-by-bye
    setTimeout(()=>{
        $(".preload-body").css("display", "none");
        $("#preload-img").css("display", "none");
        $(".preload-circle").css("display", "none");
    }, 5000);

});

// buttons
$(".facebook-link").click(function(){
    window.open("https://facebook.com/erisukona");
})

$(".discord-link").click(function(){
    window.open("https://discord.gg/gSKhxcEdny");
})