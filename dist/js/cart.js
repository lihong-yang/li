function Cart() {
    if (localStorage.getItem("cartDatas")) {
        this.cartDatas = JSON.parse(localStorage.getItem("cartDatas"));
    } else {
        this.cartDatas = {};
    }
}

Cart.prototype.saveData = function(id, num, ter) {
    //ter 表示是否是最终值 true 表示是
    if (this.cartDatas[id] === undefined || ter) {
        this.cartDatas[id] = num;
    } else {
        this.cartDatas[id] += num;
    }

    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}
Cart.prototype.showData = function(id) {
    this.oCartList = document.getElementById(id);

    let productDatas = JSON.parse(localStorage.getItem("productDatas"));

    let str = "";

    for (let id in this.cartDatas) {
        str += `<li data-id="${id}">
            <input type="checkbox" class="ck">
            <img src="${productDatas[id].imgsrc}">
            <span>${productDatas[id].title}</span>
            <span class="perPrice">${productDatas[id].price}</span>
            <span class="minus">-</span>
            <input type="text" value="${this.cartDatas[id]}" class="num">
            <span class="plus">+</span>
            <span class="perTotalPrice">${productDatas[id].price*this.cartDatas[id]}</span>
            <span class="del">x</span>
        </li>`;
    }

    this.oCartList.innerHTML = str;

    //全选
    let checkAll = document.getElementById("checkAll");
    this.list = document.querySelectorAll("li");
    this.cks = document.querySelectorAll(".ck");
    this.perPrice = document.querySelectorAll(".perPrice");
    this.minus = document.querySelectorAll(".minus");
    this.num = document.querySelectorAll(".num");
    this.plus = document.querySelectorAll(".plus");
    this.perTotalPrice = document.querySelectorAll(".perTotalPrice");
    this.del = document.querySelectorAll(".del");

    checkAll.onclick = () => {
            //让所有单个复选框的选中状态和全选复选框的状态一致
            for (let i = 0; i < this.cks.length; i++) {
                this.cks[i].checked = checkAll.checked;
            }

            this.getTotalPrice(); //计算总价
        }
        //在点击单个复选框时，判断选中的数量和总数量是否相同
    for (let i = 0; i < this.cks.length; i++) {
        this.cks[i].onclick = () => {
            var count = 0; //计数
            for (let j = 0; j < this.cks.length; j++) {
                if (this.cks[j].checked) {
                    count++;
                }
            }
            if (count == this.cks.length) {
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
            this.getTotalPrice(); //计算总价
        }
    }


    for (let i = 0; i < this.minus.length; i++) {
        //减
        this.minus[i].onclick = () => {
                this.num[i].value--;
                if (this.num[i].value < 1) {
                    this.num[i].value = 1;
                }
                this.updateData(i);

            }
            //加
        this.plus[i].onclick = () => {
                this.num[i].value++;
                this.updateData(i);
            }
            //改input
        this.num[i].onchange = () => {
                if (this.num[i].value < 1) {
                    this.num[i].value = 1;
                }
                this.updateData(i);
            }
            //删除
        this.del[i].onclick = () => {
            this.removeData(i);
            this.getTotalPrice();
        }
    }


}

Cart.prototype.updateData = function(i) {
    //改单个总价
    this.perTotalPrice[i].innerText = this.num[i].value * this.perPrice[i].innerText;
    //改总价
    this.getTotalPrice();
    //改购物车数据
    let id = this.list[i].getAttribute("data-id");
    this.saveData(id, +this.num[i].value, true);
}


Cart.prototype.getTotalPrice = function() {
    let totalPrice = document.getElementById("totalPrice");
    let price = 0;
    for (let i = 0; i < this.cks.length; i++) {
        if (this.cks[i].checked) {
            price += +this.perTotalPrice[i].innerText;
        }
    }

    totalPrice.innerText = price;

}

Cart.prototype.removeData = function(i) {
    let id = this.list[i].getAttribute("data-id");
    this.oCartList.removeChild(this.list[i]); //删节点
    this.cks[i].checked = false;
    delete this.cartDatas[id]; //删数据
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}