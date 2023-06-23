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

            result = `<table>
                         <thead>
                             <tr>
                                 <td class="sorttable_alpha">Name</td>
                                 <td class="sorttable_numeric">Price</td>
                                 <td class="sorttable_nosort">Edit</td>
                                 <td class="sorttable_nosort">Delete</td>
                             </tr>
                         </thead>
                     <tbody>`;


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