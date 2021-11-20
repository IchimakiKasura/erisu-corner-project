const w = window;
let sakura = true;

function topNavbar(el)
{
    let box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
}

// change style by code cuz fuck css
if(か.isMobile) {

    // banner
    か(".footer").atr("class","footer mobile-footer")
    か(".erisu-text").sty("bottom", "175px");
    か(".erisu-text").sty("fontSize", "95px");
    か(".banner").sty("width", "1500px");
    か(".banner").sty("height", "350px");
    か(".parallelogram").sty("width", "700px");
    か(".parallelogram").sty("height", "180px");
    か(".discord-link").sty("marginLeft", "850px");
    か(".discord-link").sty("marginTop", "-10px");
    か(".facebook-link").sty("marginLeft", "950px");

    // preload
    か("#preload-img").sty("height", "650px");
    か(".lds-ellipsis").atr("class", "lds-ellipsis-mobile preload-circle");
    
    try {
        か("style[id='less:pages-Featured-css-index']").gt.remove();
        か("[h2Desktop]").gt.remove();
        か("[h2Mobile]").sty("display","block");
    } catch { /* none */ }
}

function LoadingScreen()
{
    か(".preload-body").sty("display", "block");
    か("#preload-img").sty("display", "inline-flex");
    か(".preload-circle").sty("display", "inline-flex");

    setTimeout(()=>{
        か(".preload-body").sty("opacity", 1);
    }, 10);

    setTimeout(()=>{
        か("#preload-img").sty("opacity", 0);
        か(".preload-circle").sty("opacity", 0);
    }, 1000);
}

// document
か(w).contentLoad(()=>
{
    if (!topNavbar(か(".banner").gt)) か(".navbar").sty("top", 0);

    // preload-image
    setTimeout(()=>{
        か("#preload-img").sty("opacity", 1);
        か(".preload-circle").sty("opacity", 1);
    }, 500);

    // preload-disappear
    setTimeout(()=>{
        か(".preload-body").sty("opacity", 0);
    }, 4000);

    // preload-go-by-bye
    setTimeout(()=>{
        か(".preload-body").sty("display", "none");
        か("#preload-img").sty("display", "none");
        か(".preload-circle").sty("display", "none");
    }, 5000);

    $("img[alt='ErisuFeaturesCentre']").click(()=>{

        LoadingScreen();

        setTimeout(()=>{
            window.location.href = "./pages/ErisuFeaturesCentre.html";
        }, 2000);
    
    })

    $(".erisu-text").click(()=>{

        LoadingScreen();
        let loc = window.location.pathname;

        loc = loc.replace(/[^\/]/g,"").replaceAll("/","/..")

        setTimeout(()=>{
            window.location.href = loc;
        }, 2000);
    
    })
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

function getPage(url)
{
    か(".preload-body").sty("display", "block");
    か("#preload-img").sty("display", "inline-flex");
    か(".preload-circle").sty("display", "inline-flex");

    setTimeout(()=>{
        か(".preload-body").sty("opacity", 1);
    }, 10);

    setTimeout(()=>{
        か("#preload-img").sty("opacity", 0);
        か(".preload-circle").sty("opacity", 0);
    }, 1000);
    setTimeout(()=>{
        window.location.href = `./Featured/${url}.html`;
    }, 2000);
}

// topnavbar
か(w).scroll(()=>
{
    if (!topNavbar(か(".banner").gt)) か(".navbar").sty("top", 0);
    else か(".navbar").sty("top", -80);
});