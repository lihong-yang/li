let obj = new URLSearchParams(location.search)
let pid = obj.get('pid')
console.log(pid);
$.get('http://jx.xuzhixiang.top/ap/api/detail.php', {
    id: pid

}, data => {
    console.log(data);
    let str = $(`

    <img src="${data.data.pimg}">
            `);
    $('#midArea').append(str);

})

$(function() {
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
        type: "get",
        data: {
            uid: 43966
        },
        success: function(res) {
            console.log(res.data)
            let products = res.data;

            let html = "";
            products.forEach(v => {
                html +=
                    `<li>
                    <a href="zhenspxq2.html?pid=${v.pid}">
                    <img src="${v.pimg}"alt=""></a>
                    <div>
                        <span>${v.pname}</span>
                        <span>${v.pdesc}</span>
                        <span>${v.pprice}<i>元起</i></span>
                    </div>
                    </li>`
            })
            $("#list").html(html);
        }
    })
})