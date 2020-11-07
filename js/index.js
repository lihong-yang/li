$(function() {
    $(".top .bj").mouseover(function() {
        $("div.place-hide.hide").css({
            "display": "block"
        })
    })
    $(".top .bj").mouseout(function() {
        $("div.place-hide.hide").hide()
    })





    $("a.petselct").mouseover(function() {
        $(".header-left-bottom").show()
    })

    $("a.petselct").mouseout(function() {
        $(".header-left-bottom").hide()
    })
})