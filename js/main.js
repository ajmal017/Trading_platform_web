$(function(){

    resize();
    $(window).resize(function(event) {
        resize();
        if($(window).width()>1200){
            $(".header .wrap .frt").show()
        }else{
            $(".header .wrap .frt").hide()
        }
    });



    var isindex;
     if ($(".header").hasClass("pos")) {
        isindex = true;
    }
    else isindex = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $(".header").addClass("fixed");
            $(".header_ht").show();
            $(".topMenuBtnContainer").hide()
            $(".submenu").css('top','80px')
            if (isindex) { $(".header").removeClass("pos"); }
        }
        else {
            $(".header").removeClass("fixed")
            $(".header_ht").hide();
            $(".topMenuBtnContainer").show()
            $(".submenu").css('top','120px')
            if (isindex) { $(".header").addClass("pos"); }
        }
        if($(window).scrollTop() > 400){
            $(".NAB_rightbar_l ul li:last-child").show() 
        }else{
            $(".NAB_rightbar_l ul li:last-child").hide() 
        }
    })
    $(".NAB_rightbar_l ul li:last-child").click(function(){
        $(window).scrollTop(0)
    })
    $("#closemodal").click(function(){
        $("#modalbox").hide()
    })

    $(".bottom").click(function () {
        $("body,html").animate({ scrollTop: ($(".banner").height() - 50) }, 1000)
    })

    $(".banner").each(function () {
        if ($(this).find(".item").length > 2) {
            var owl = $(this).owlCarousel({ items: 1, loop: true, autoplay: true });//
            owl.on('changed.owl.carousel', function (event) {
                owl.find(".animated").each(function () { $(this).removeClass($(this).attr("data-animation")); })
                owl.find(".owl-item").eq(event.item.index).find(".animated").each(function () { $(this).addClass($(this).attr("data-animation")); });
            })
        }
    })
    $(".banner .owl-item").eq(2).find(".animated").each(function () {
        $(this).addClass($(this).attr("data-animation"));
    })
    $(window).scroll(function () {
        $(".animated").each(function () {
            if ($(this).offset().top - $(window).scrollTop() > $(window).height() - 80)
                $(this).removeClass($(this).attr("data-animation"));
            else
                $(this).addClass($(this).attr("data-animation"));
        })
    })

    $(".menu_wrap").click(function () {
        $(".menu").slideToggle()
    })




});

/*main*/
//

function font() {


}


/*call*/
//
function resize(){
    var ht=$(window).height();

} 