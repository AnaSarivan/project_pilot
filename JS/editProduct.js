
const openModal = (id) => {
    showModal(1, id);
    getProduct(id)

}

const closeModal = (id) => {
    const name = $('#modalNameInput').val();
    if (!isEmpty(name)) {
        editSend(id);
        showModal(0);
    }
}

function isEmpty(str) {
    return (!str || str.trim().length === 0);
}

const showModal = (check, id) => {
   // console.log('show Modal');

    const content = document.getElementById("modalPage");
    check ? content.showModal() : content.close();
    if (check) {
        const button = document.querySelector("#modalClose")
        button.onclick = function () {
            closeModal(id);
        }
    }
    content.style.display = check ? "flex" : "none";
}

function getProduct(id) {

    $.ajax({
        type: "GET",
        url: "db/getAllProducts.php",
        success: function (res) {

            res = JSON.parse(res);
            var product = res.find(p => p.id == id)

            $("#modalNameInput").val(product.name);

        }
    });
}

function editSend(id) {
    let obj = {
        id: id,
        name: $('#modalNameInput').val()
    }
    $.ajax({
        type: "POST",
        url: "db/editProduct.php",
        data: obj,
        success: function (res) {
            loadData();
        }
    });
}





