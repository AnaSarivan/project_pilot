// ################################################################
   
    function create() {
        console.log("ADD");
        let obj = {
            name : $('#in_in').val(),
            price: $('#in_price').val()
        };
        if (obj.name === "" || obj.price === 0 || obj.name === 0 || obj.price === "") return
        $.ajax({
        type: "POST",
        url: "db/addProduct.php",
        data: obj,
        success: function (res) {
            console.log(res)
            loadData();
            $('#in_in').val("");
            $('#in_price').val("");
        }
    });
    }
