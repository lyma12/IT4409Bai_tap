

const MSSV = "_20204582";
// thêm group infor
function addGroup(id){
    var doc = document.getElementById("content");
    var divF = document.createElement("div");
    divF.setAttribute('class', 'boxLine');
    var divC = document.createElement("div");
    divC.setAttribute('class', 'divInfor');
    var h2 = document.createElement("h2");
    h2.style.color =  "rgb(0, 166, 255)";
    h2.textContent = "Group Item" + MSSV;
    var p = document.createElement("p");
    svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg>`;
    p.insertAdjacentHTML('beforeend', svgString);
    var button1 = document.createElement("p");
    button1.textContent = "<Add Infor Item>";
    button1.setAttribute('class', 'addInfor');
    button1.onclick = function(){
        addInfor(this);
    }
    var button2 = document.createElement("p");
    button2.textContent = "<Add Group Item>";
    button2.setAttribute('class', 'addCroup');
    button2.onclick = function(){
        addGroup(this);
    }
    var form = document.createElement("form");
    form.style.display = "grid";
    form.style.gridTemplateColumns = "35% 50% 5%";
    form.addEventListener("submit", function(event) {
        event.preventDefault();
      });
    divF.appendChild(divC);
    divF.appendChild(form);
    divC.appendChild(h2);
    divC.appendChild(p);
    divC.appendChild(button1);
    divC.appendChild(button2);
    doc.insertBefore( divF, id.parentNode.parentNode.nextSibling);
    p.onclick = function(){
        prompt("Mã Thiên Lý - 20204582");
        divF.remove();
    }
    h2.addEventListener("dblclick", function(){
        this.textContent = "";
        var inputH2 = document.createElement("input");
        h2.appendChild(inputH2);
        inputH2.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                if(inputH2.value ===""){
                    alert("Nhập vào input!");
                }
                else{
                    h2.textContent = inputH2.value + MSSV;
                    inputH2.remove();
                }
            }
        });
    } );
    cssForHTML();
}


function addInfor(id){
    var type = prompt("Bạn muốn dữ liệu nhập vào là:\nText/Check/Date/Number/List/Image", "");
    if(type === "") type = "text";
    type = type.toUpperCase();
    if(type.indexOf("CHECK") != -1){
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.style.height = "20px";

    }
    else if(type.indexOf("LIST") != -1){
        var input = document.createElement("p");
        var textAre = document.createElement("textarea");
        textAre.style.maxWidth = "100%";
        textAre.style.minWidth = "60%";
        input.appendChild(textAre);
        textAre.readOnly = true;
        textAre.ondblclick = function(){
            var but = document.createElement("button");
            but.textContent = "OK";
            input.appendChild(but);
            textAre.readOnly = false;
            but.onclick = function(){
                textAre.readOnly = true;
                but.remove();
            }
            textAre.addEventListener('blur', function(){
                textAre.readOnly = true;
                but.remove();
            });
        }
    }
    else if(type.indexOf("IMAGE") != -1){
        var input = document.createElement("div");
        var img = document.createElement("img");
        input.appendChild(img);
        img.style.border = "2px solid red";
        img.style.width = "100%";
        img.style.height = "80%";
        input.ondblclick = function(){
            var inputImage = document.createElement("input");
            inputImage.setAttribute("type", "file");
            input.appendChild(inputImage);
            inputImage.onchange = function(event){
                    // Lấy tệp ảnh được tải lên
                    var files = event.target.files;
                    uploadedImage = files[0];
                
                    // Đặt đường dẫn của ảnh mới vào thuộc tính src của thẻ <img> để xem trước
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(uploadedImage);
            }
            var bu = document.createElement("button");
            bu.textContent = "OK";
            input.appendChild(bu);
            bu.onclick = function(){
                bu.remove();
                inputImage.remove();
            }
        }
    }
    else{
        var input = document.createElement("p");
        input.style.border = "2px solid red";
        input.ondblclick = function() {
            input.textContent = "";
            var inputVal;
            inputVal = document.createElement("input");
            if(type.indexOf("NUMBER") != -1){
                inputVal.setAttribute("type", "number");
            }
            else if (type.indexOf("DATE") != -1) inputVal.setAttribute("type", "date");
            else{
                inputVal.setAttribute("type", "text");
        }
    input.appendChild(inputVal);
            inputVal.style.width = "98%";
            inputVal.style.height = "98%";
            input.style.border = "none";
            inputVal.addEventListener("keydown", function(event){
                if(event.key === "Enter"){
                    input.textContent = inputVal.value;
                    input.style.border = "2px solid red";
                    inputVal.remove();
                }
            });
            inputVal.addEventListener('blur', function(){
                input.textContent = inputVal.value;
                    input.style.border = "2px solid red";
                    inputVal.remove();
            })
        }

    }
    div = id.parentNode.parentNode;
    var form = div.children[1];
    var label = document.createElement("p");
    label.style.marginLeft = "20px";
    label.textContent = "Item Infor Name" + "\u2003 :";
    input.style.marginRight = "10px";
    form.appendChild(label);
    form.appendChild(input);
    var label1 = document.createElement("p");
    svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg>`;
    label1.insertAdjacentHTML('beforeend', svgString);
    form.appendChild(label1);
    input.style.marginBottom = "10px";
    input.style.width = "auto";
    form.style.marginBottom = "30px";
    form.style.marginTop = "20px";
    div.appendChild(form);
    label1.onclick = function(){
        prompt("Mã Thiên Lý - 20204582");
        label.remove();
        label1.remove();
        input.remove();
    }
    label.addEventListener('dblclick', function(){
        label.textContent = "";
        var inputLabel = document.createElement("input");
        label.appendChild(inputLabel);
        inputLabel.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                if(inputLabel.value ===""){
                    alert("Nhập vào input!");
                }
                else{
                    label.textContent = inputLabel.value + "\u2003 : ";
                    inputLabel.remove();
                }
            }
        });
    });
    
}

function h2Text(id){
    id.textContent = "";
        var inputH2 = document.createElement("input");
        id.appendChild(inputH2);
        inputH2.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                if(inputH2.value ===""){
                    alert("Nhập vào input!");
                }
                else{
                    id.textContent = inputH2.value + MSSV;
                    inputH2.remove();
                }
            }
        });
}


// them css
function cssForHTML(){

    var body = document.body;
    body.style.fontFamily = "sans-serif";
    body.style.fontSize = "14px";
    body.style.textAlign = "center";
    var tab = document.getElementsByClassName("divInfor");
    for(var i of tab){
        i.style.marginTop = "-25px";
        i.style.display = "grid";
        i.style.gridTemplateColumns = "40% 10% 15% 15%";
        for(var j = 0; j < i.children.length; j++){
            if(j === 0){
                i.children[j].style.textAlign = "right";
                i.children[j].style.marginLeft = "20px";
            }
            if(j === 1) i.children[j].style.textAlign = "left";
            i.children[j].style.gridColumn = j+1;
            i.children[j].style.background = "white";
        }
    }
    var div = document.getElementsByClassName("boxLine");
    for(var i of div){
        i.style.width = "70%";
        i.style.border = "4px solid orange";
        i.style.marginLeft = "15%";
        i.style.marginTop = "60px";
        i.style.minHeight = "100px";
    }

}