$(document).ready(function () {
        loadData();
    });


// #############################################
    function loadData() {
        $.ajax({
        type: "GET",
        url: "db/getAllproducts.php",
        success: function (res) {

            res = JSON.parse(res);
            var result = "";
            for(let i = 0; i < res.length; i++) {
                result += "<tr>";                
                result += "<td id='editProduct'> " + res[i].name + "</td>";               
                result += "<td>" + res[i].price + "</td>";
                result += "<td><button onclick='openModal("+res[i].id+")'>Edit</button></td>";
                result += "<td><button onclick='del(" + res[i].id + ")'>Delete</button></td>";
                result += "</tr>";
            }
            $("#data_display tbody").html(result);
        }
    });
    }


    // result += "<td></td>";