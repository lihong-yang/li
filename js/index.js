$(function() {
    $(".top .bj").mouseover(function() {
        $("div.place-hide.hide").show()
            // $("div.place-hide.hide").hide()
    })

    $(".top .bj").mouseout(function() {
        $("div.place-hide.hide").hide()
    })



    $("li#rm").mouseover(function() {
        $(".ggzl-right").show()
        $(".ggzl-right3").hide()
        $(".ggzl-right2").hide()
    })
    $("li#jkgl").mouseover(function() {
        $(".ggzl-right2").show()
        $(".ggzl-right").hide()
        $(".ggzl-right3").hide()
    })
    $("li#jkgl").mouseout(function() {
        $(".ggzl-right2").show()
    })
    $("li#gcgl").mouseover(function() {
        $(".ggzl-right3").show()
        $(".ggzl-right").hide()
    })
    $("li#jcjl").mouseout(function() {
        $(".ggzl-right3").hide()
    })




    $("li#remen").mouseover(function() {
        $(".ggls-right").show()
        $(".ggls-right3").hide()
        $(".ggls-right2").hide()
    })
    $("li#guocan").mouseover(function() {
        $(".ggls-right2").show()
        $(".ggls-right").hide()
        $(".ggls-right3").hide()
    })
    $("li#guocan").mouseout(function() {
        $(".ggls-right2").show()
    })
    $("li#rouzi").mouseover(function() {
        $(".ggls-right3").show()
        $(".ggls-right").hide()
    })
    $("li#guantou").mouseout(function() {
        $(".ggls-right3").hide()
    })





    $("a.petselct").mouseover(function() {
        $(".header-left-bottom").show()
        $(".header-left-bottom1").hide()
    })


    $(".header-left-top i").mouseover(function() {
        $(".header-left-bottom").hide()
        $(".header-left-bottom1").show()
    })




    $("#right .che").mouseover(function() {
        $("#denglukuang").show()

    })


    $(".header").mouseover(function() {
        $("#denglukuang").hide()
    })


    $("#chebian").mouseover(function() {
        $("#shouye #cebianzhankai").show()

    })


    $(".menus a").mouseover(function() {
        $("#shouye #cebianzhankai").hide()
    })



})