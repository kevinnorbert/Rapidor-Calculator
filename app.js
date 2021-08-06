new Vue({
    el:"#vueapp",
    data:{
        price: 0,
        quantity: 0,
        discount: 0,
        cess: 0,
        gross_amount: 0,
        discount_amount: 0,
        cess_amount: 0,
        total_bill_with_discount: 0
    },
    methods:{
        change:function(){
            var gross_val = this.price * this.quantity;
            this.gross_amount = gross_val.toFixed(2);
            var discount_value = gross_val * this.discount / 100;
            this.discount_amount = discount_value.toFixed(2);

            var net_price = this.gross_amount - discount_value;
            var cess_value = net_price * this.cess;
            this.cess_amount = cess_value.toFixed(2);

            var total = net_price + cess_value;
            this.total_bill_with_discount = total.toFixed(2);

            console.log(" Price = ", this.price, '\n',
                "Quantity = ", this.quantity, '\n',
                "Cess = ", this.cess, '\n',
                "Gross = ", this.gross_amount, '\n',
                "Discount = ", this.discount, '\n',
                "Discount Amount = ", this.discount_amount, '\n',
                "Cess Amount = ",this.cess_amount, '\n',
                "Total = ", this.total_bill_with_discount,
                net_price, cess_value, total
            );
        }
    },
    
});