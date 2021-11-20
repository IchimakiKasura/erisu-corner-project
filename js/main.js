const w = window;
let sakura = true;

function topNavbar(el)
{
    let box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
}

// document
か(document).contentLoad(()=>
{

    if (!topNavbar(か(".banner").gt)) か(".navbar").sty("top", 0);

    // preload-image
    // setTimeout(()=>{
    //     か("#preload-img").sty("opacity", 1);
    //     か(".preload-circle").sty("opacity", 1);
    // }, 500);

    // preload-disappear
    // setTimeout(()=>{
    //     か(".preload-body").sty("opacity", 0);
    // }, 4000);

    // preload-go-by-bye
    // setTimeout(()=>{
        か(".preload-body").sty("display", "none");
        か("#preload-img").sty("display", "none");
        か(".preload-circle").sty("display", "none");
    // }, 5000);

});

// buttons
か(".facebook-link").click(function(){
    w.open("https://facebook.com/erisukona");
})
か(".discord-link").click(function(){
    w.open("https://discord.gg/gSKhxcEdny");
})
か("#sakura-btn").click(()=>{

    if(sakura) {
        か("#sakura-btn").text("turn on sakura leaves?");
        $("#blossom_container").sakura("stop");
        sakura = false;
    }
    else
    {
        か("#sakura-btn").text("turn off sakura leaves?");
        $('#blossom_container').sakura('start', {
            fallSpeed: 0.5,        
            maxSize: 20,         
            minSize: 9,          
            newOn: 500,          
        });
        sakura = true;
    }

})
か("img[alt='ErisuFeaturesCentre']").click(()=>{    
    window.location.href = "./pages/ErisuFeaturesCentre.html";
})

// topnavbar
$(w).scroll(()=>
{
    if (!topNavbar(か(".banner").gt)) か(".navbar").sty("top", 0);
    else か(".navbar").sty("top", -80);
});