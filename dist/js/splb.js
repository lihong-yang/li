// $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
//         uid: 43966
//     }).then(data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/20f5742c908acc6bac33c4a9076bdb28.jpg@!200w-c",
//         pname: "个解耦递四方速递",
//         pdesc: "加咖啡",
//         pprice: 123,
//         uid: 43966
//     },
//     data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/df961f2188b67c76a34992de281c1a77.jpg@!200w-c",
//         pname: "UI破放高考假",
//         pdesc: "投入和",
//         pprice: 4534,
//         uid: 43966
//     },
//     data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/cd5a64d289f8d08ef809767bca57efd5.jpg@!200w-c",
//         pname: "哦豁IG啊啊发",
//         pdesc: "热人格",
//         pprice: 234,
//         uid: 43966
//     },
//     data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/df961f2188b67c76a34992de281c1a77.jpg@!200w-c",
//         pname: "事故发生呢",
//         pdesc: "爱好带感",
//         pprice: 165,
//         uid: 43966
//     },
//     data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//             pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/6a1671eaaaa3af6cb0ec60876b8559ed.jpg@!200w-c",
//             pname: "三天假睫毛",
//             pdesc: "寡妇年",
//             pprice: 12314,
//             uid: 43966
//         },
//         data => {
//             console.log(data);
//         })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/5ed6c3d978f36e402721f16ad2ea8827.jpg@!200w-c",
//         pname: "覅哦豁大VAVv",
//         pdesc: "让我当初",
//         pprice: 1245,
//         uid: 43966
//     },
//     data => {
//         console.log(data);
//     })
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pimg: "https://img2.epetbar.com/nowater/2020-11/10/00/00ccdbe7f9a45b2d46b47db710162ce0.jpg@!200w-c",
//         pname: "工具方法更好地",
//         pdesc: "移动话费",
//         pprice: 123634,
//         uid: 43966
//     },
//     data => {
//         console.log(data);
//     })
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
                    <span>${v.pname}</span>
                    <span>${v.pdesc}</span>
                    <span>${v.pprice}</span>
                    </li>`
                })
                $("#list").html(html);
            }
        })
    })
    // $(function() {
    //     $.ajax({
    //         url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
    //         type: "get",
    //         data: {
    //             uid: 44082
    //         },
    //         success: function(res) {
    //             console.log(res.data)
    //             let products = res.data;

//             let html = "";
//             products.forEach(v => {
//                 html +=
//                     `<li>
//                     <a href="shop.html?pid=${v.pid}">
//                     <img src="${v.pimg}"alt=""></a>
//                     <div>
//                         <span>${v.pname}</span>
//                         <span>${v.pdesc}</span>
//                         <span>${v.pprice}<i>元起</i></span>
//                     </div>
//                     </li>`
//             })
//             $(".list").html(html);
//         }
//     })
// })