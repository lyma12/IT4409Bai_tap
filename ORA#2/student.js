class sinhvien{
    constructor(name,year, bacdaotao, chuongtrinh, vienquanly, tinhtrang, sex, lop, khoa, email, tongkethocky, trungbinhtichluy, no, tichluy, trinhdo, muccanhbao, dantoc, namTN, address, CMND, noicap, father, fbirthday, fcareer, fphone, femail, tongiao, school3, hokhau, sphone, mother, mbirthday, mcareer, mphone, memail ){
        this.name = name;
        this.year = year;
        this.bacdaotao = bacdaotao;
        this.chuongtrinh = chuongtrinh;
        this.vienquanly = vienquanly;
        this.tinhtrang = tinhtrang;
        this.sex = sex;
        this.lop = lop;
        this.email = email;
        this.khoa = khoa;
        this.tongkethocky = tongkethocky;
        this.tichluy = tichluy;
        this.no = no;
        this.trungbinhtichluy = trungbinhtichluy;
        this.trinhdo = trinhdo;
        this.muccanhbao = muccanhbao;
        this.dantoc = dantoc;
        this.namTN = namTN;
        this.address = address;
        this.CMND = CMND;
        this.noicap = noicap;
        this.father = father;
        this.fbirthday = fbirthday;
        this.fcareer = fcareer;
        this.fphone = fphone;
        this.femail = femail;
        this.tongiao = tongiao;
        this.school3 = school3;
        this.hokhau = hokhau;
        this.sphone = sphone;
        this.mother = mother;
        this.mbirthday = mbirthday;
        this.mcareer = mcareer;
        this.mphone = mphone;
        this.memail = memail;
    }

    log(){
        console.log("Tên: " + this.name + "\nNăm vào trường: " + this.year + "\nBậc đào tạo: " + this.bacdaotao + "\nChương trình: " + this.chuongtrinh + "\nKhoa/Viện quản lý: " + this.vienquanly + "\nTính trạng học tập: " + this.tinhtrang);
        console.log("Giới tính: " + this.sex + "\nLớp: " + this.lop + "\nKhóa: " + this.khoa + "\nEmail: " + this.email );
        console.log("Tổng kết học kỳ: " + this.tongkethocky + "\nTrung bình tích lũy: " + this.trungbinhtichluy + "\nSố TC nợ đăng ký: " + this.no + "\nSố TC tích lũy: " + this.tichluy + "\nTrình độ sinh viên: " + this.trinhdo + "\nMức cảnh báo: " + this.muccanhbao);
        console.log("Dân tộc: " + this.dantoc + "\nNăm TN cấp 3: "  + this.namTN + "\nĐịa chỉ: " + this.address + "\nSố CMTND: " + this.CMND + "\nNơi cấp: " + this.noicap );
        console.log("Họ tên bố: " + this.father + "\nNăm sinh: " + this.fbirthday + "\nNghề nghiệp: " + this.fcareer + "\nĐiện thoại: " + this.fphone + "\nEmail: " + this.femail );
        console.log("Tôn giáo: " + this.tongiao + "\nTrường THPT: " + this.school3 + "\nHộ khẩu: " + this.hokhau + "\nSố điện thoại: " + this.sphone);
        console.log("Họ tên mẹ: " + this.mother + "\nNghề nghiệp: " + this.mcareer + "\nĐiện thoại: " + this.mphone + "\nEmail: " + this.memail);
    }

    

}


const ttsv = new sinhvien("Mã Thiên Lý", 2020, "Đại học đại trà", "Khoa học Máy tính 2020", "Trường Công nghệ Thông tin và Truyền thông", "Học", "Nữ", "Khoa học máy tính 06-k65", 65, "ly.mt204582@sis.hust.edu.vn", "20212", 3.52, 0, 67, 3, "M0", "Nùng", "Không có dữ liệu", "xã Quốc Phong, Huyện Quảng Uyên, tỉnh Cao Bằng", 085927341, "công an Cao Bằng", "Mã Văn Tôn", "23-03-1972", "Công nhân", 0974379459, "vbtsarmy31@gmail.com", "không", "Trường THPT Chuyên Cao Bằng", "xã Quốc Phong, huyện Quảng Uyên, tỉnh Cao Bằng", 0916039064, "Đàm Thị Liếp", "20-02-1971", "Công nhân", 0858500138, "danchandat@gmail.com");
var sv = new sinhvien();

function inForttsv(){
    for(let key in ttsv){
        sv[key] = ttsv[key];
    }
}
inForttsv();

var uploadedImage;
var currentImage;
function show(nameId){
    const t = document.getElementById("name_img");
    t.innerText = sv["name"];
    const st = document.getElementById(nameId);
    for(let key in sv){
     //   if(Object.hasOwnProperty.call(sv, key)){
            let value = sv[key];
            const element = document.getElementById(key);
            if(element){
                if(key == "CMND"){
                    value = value.toString();
                    if(value.length <=7){
                        value = value;
                    }else{
                        const tmp = value.substring(value.length -2);
                        value = value.substring(0,3) + "**" + tmp;
                    }
                }
                else if(key.indexOf("phone") != -1){
                    value = value.toString();
                    if(value.length <= 8) value = value;
                    else{
                        const tmp = value.substring(value.length -2);
                        value = value.substring(0,3) + "***" + tmp;
                    }
                    
                }
                else if(key.indexOf("email") != -1 && key != "email"){
                    value = value.toString();
                    if(value.length > 11) {
                        const tmp = value.substring(value.length - 6);
                        value = value.substring(0,2) + "*@*" + tmp;
                    }
                }
                element.innerText = value;
            }
      //  }
    }
}

function showInput(){
    var nameId = "form_";
   for(let i = 1; i<=5; i++){
        nameId = nameId.substring(0, 5) + i.toString();
        const form = document.getElementById(nameId); // Lấy form bằng cách sử dụng ID
  // Duyệt qua từng phần tử của form để tìm thẻ input tương ứng
  for (let element of form.elements) {
    if(element){
    if (element.type !== "submit") {
      // Gán giá trị thuộc tính của đối tượng Student cho giá trị của thẻ input
      element.value = sv[element.id];
    }
}
  }
}
}



function getInforbyInput(){
    var nameId = "form_";
    for(let i = 1; i<=5; i++){
        nameId = nameId.substring(0, 5) + i.toString();
    const form = document.getElementById(nameId); // Lấy form bằng cách sử dụng ID

  // Duyệt qua từng phần tử của form để tìm thẻ input tương ứng
  for (let element of form.elements) {
    if (element.type !== "submit") {
        sv[element.id] = element.value;
    }
}
}

}


function hideForm(){
    const element = document.getElementsByClassName("nhaplieu");
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
    
    const element1 = document.getElementsByClassName("hienthi");
    for (let i = 0; i < element1.length; i++) {
        element1[i].style.display = "block";
    }
    const element2 = document.getElementsByClassName("yeucau2");
    for (let i = 0; i < element2.length; i++) {
        element2[i].style.display = "none";
    }
    
}

function editClick(){
    if(document.getElementById("thehocsinh")){
        currentImage = document.getElementById("thehocsinh").src;
    }
    const element = document.getElementsByClassName("nhaplieu");
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "block";
    }
    
    const element1 = document.getElementsByClassName("hienthi");
    for (let i = 0; i < element1.length; i++) {
        element1[i].style.display = "none";
    }
    const element2 = document.getElementsByClassName("yeucau2");
    for (let i = 0; i < element2.length; i++) {
        element2[i].style.display = "block";
    }
    showInput();
}

function okClick(){
    getInforbyInput();
    hideForm();
    if (uploadedImage) {
            // Lưu ảnh mới vào máy chủ tại đây
            // Sau đó, đặt đường dẫn ảnh mới vào thuộc tính src của thẻ <img>
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = document.getElementById("thehocsinh");
                image.src = e.target.result;
            };
            reader.readAsDataURL(uploadedImage);
        }
        uploadedImage = null;
        document.getElementById("upload-image").value = null;
    sv.log();
    show("student-infor");
}
function cancelClick(){
    hideForm();
    if(currentImage){
    document.getElementById("thehocsinh").src = currentImage;
    }
    else{
        document.getElementById("thehocsinh").src = "download.png";
    }
    sv.log();
    show();
}
function resetClick(){
    inForttsv();
    hideForm();
    show("student-infor");
    document.getElementById("thehocsinh").src = "download.png";
    sv.log();
}

function previewImage(event) {
    // Lấy tệp ảnh được tải lên
    var files = event.target.files;
    uploadedImage = files[0];

    // Đặt đường dẫn của ảnh mới vào thuộc tính src của thẻ <img> để xem trước
    var reader = new FileReader();
    reader.onload = function (e) {
        var image = document.getElementById("thehocsinh");
        image.src = e.target.result;
    };
    reader.readAsDataURL(uploadedImage);
}

