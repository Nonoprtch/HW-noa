const Categories = [
    { value: "", text: "--chose a category--", active: true },
    { value: "sport", text: "sport", active: true },
    { value: "casual", text: "casual", active: true },
    { value: "evening", text: "evening", active: true },
    { value: "relax", text: "relax", active: true },

];

const Products = [];

var model = myInput("model-input", "Enter the model name", "text", "model");
var brand = myInput("brand-input", "Enter the brand name", "text", "brand");
var price = myInput("price-input", "Enter the  price", "number", "price");
var categories = mySelect("category-select", "category", Categories);
var sale = myInput("sale-input", "", "checkbox", "form-check-input");
var btn = myButton("submit", "", "Add this product", addProduct);
var formDiv = document.getElementById("form");
createForm();

function createForm() {
    formDiv.append(
        categories.div,
        model.div,
        brand.div,
        price.div,
        sale.div,
        btn);
}

function addProduct() {
    var obj = {};
    obj.model = model.input.value;
    obj.brand = brand.input.value;
    obj.price = price.input.value;
    obj.category = categories.select.value;
    if (obj.model && obj.brand && obj.price && obj.category) {
        Products.push(obj);
        model.input.value = "";
        brand.input.value = "";
        price.input.value = "";
        categories.select.value = "";

        carteProduct(obj);
    } else {
        if (!obj.model) {
            document.getElementsByClassName("model")[0].style.borderColor = "red";
        }

        if (!obj.brand) {
            document.getElementsByClassName("brand")[0].style.borderColor = "red";
        }

        if (!obj.price) {
            document.getElementsByClassName("price")[0].style.borderColor = "red";
        }

        if (!obj.category) {
            document.getElementsByClassName("category")[0].style.borderColor = "red";
        }
    }
}

function carteProduct(obj) {
    var div = document.createElement("div")
    div.className = "card";
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    p1.innerText = "Category: " + obj.category;
    p2.innerText = "Model: " + obj.model;
    p3.innerText = "Brand: " + obj.brand;
    p4.innerText = "Price: " + obj.price;
    div.append(
        p1,
        p2,
        p3,
        p4);
    document.getElementById("main").append(div);
}

function myInput(_id, _placehorder, _type, _class) {
    var obj = {};
    // document.eleme
    obj.div = document.createElement("div");
    obj.input = document.createElement("input");
    obj.input.className = "form-control " + _class;
    obj.input.id = _id;
    obj.input.placeholder = _placehorder;
    obj.input.type = _type;
    obj.div.append(obj.input);
    return obj;

}

function mySelect(_id, _class = "", _arr) {
    var obj = {};
    obj.div = document.createElement("div");
    obj.select = document.createElement("select");
    obj.select.className = "form-control " + _class;
    obj.select.id = _id;

    for (let i = 0; i < _arr.length; i++) {
        const opt = _arr[i];
        if (opt.active) {
            var option = document.createElement("option")
            option.value = opt.value
            option.innerText = opt.text
            obj.select.append(option)
        }

    }

    obj.div.append(obj.select)
    return obj
}

function myButton(_id, _class = "", _text, _callback) {
    var div = document.createElement("div");
    var btn = document.createElement("button");
    btn.className = "btn btn-success" + _class;
    btn.id = _id;
    btn.innerText = _text;
    btn.addEventListener("click", _callback);
    div.append(btn);
    return div;
}