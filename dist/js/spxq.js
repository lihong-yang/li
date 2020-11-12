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