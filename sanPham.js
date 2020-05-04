//Mô tả: Để tạo ra đối tượng, dựa vào các thuộc tính được truyền vào
//Input: Các thuộc tính
//Output: Môt đối tượng

function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    //Viết phương thức tạo ID cho đối tượng
    if( id != null ){
        sanPham.id = id;
    } else {
        sanPham.id = taoID();
    }
    //Bước 1: Gắn các thuộc tính cho đối tượng
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;
    //Bước 2: Viết phương thức cho đối tượng
    sanPham.tinhGiaBan = function () {
        //Logic xử lý của phương thức
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia * 0.01);
        return giaBan;
    }
    
    /*sanPham.toJson =  function(){
        var json = JSON.stringify(this);
        return json;
    }
    //Từ JSON chuyển thành một đối tượng đầy đủ các phương thức
    //Input : json
    //Output: đối tượng đầy đủ
    sanPham.fromJSON = function(json){
        var doiTuongDayDu = new Object();
        //Bước 1: Chuyển từ JSON thành đối tượng
        var doiTuong = JSON.parse(json);
        //Bước 2: Chuyển đối tượng thành đối tượng đầy đủ phương thức
        var doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);
        
        return doiTuongDayDu;
    }*/
    sanPham.fromJSON = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanpham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanpham.hinhAnh, sanpham.ten, sanpham.giaGoc, sanpham.phanTramGiamGia, sanpham.khuVuc, sanpham.id);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }
    return sanPham;
}

function taoDanhSachSanPham() {
    var sonMoi = taoDoiTuongSanPham("images/sonMoi.jpg", "Son Kem Black Rouge", 298000, 30, "Hà Nội", taoID());
    var phanMat = taoDoiTuongSanPham("images/phanMat.jpg", "Phấn mắt Black Rouge", 400000, 20, "TP HCM", taoID());
    var phanNen = taoDoiTuongSanPham("images/phanNuoc.jpg", "Phấn nước Black Rouge", 640000, 20, "Đà Nẵng", taoID());
    var phanMa = taoDoiTuongSanPham("images/phanMa.jpg", "Phấn má hồng Black Rouge", 298000, 40, "Hải Phòng", taoID());
    var toner = taoDoiTuongSanPham("images/toner.jpg", "Toner dạng xịt IYOUB", 1000000, 63, "TP BMT", taoID());
    var bangTaoKhoi = taoDoiTuongSanPham("images/bangTaoKhoi.jpg", "Bảng tạo khối Black Rouge", 358000, 40, "Hà Nội", taoID());
    var chuotMi = taoDoiTuongSanPham("images/chuotMi.jpg", "Chuốt mi Black Rouge", 300000, 40, "Đà Nẵng", taoID());
    var keMat = taoDoiTuongSanPham("images/keMat.jpg", "Kẻ mắt Black Rouge", 318000, 40, "TP HCM", taoID());
    var gelMat = taoDoiTuongSanPham("images/gelMat.jpg", "Gel mắt Black Rouge", 318000, 40, "Hà Nội", taoID());
    var suaRuaMat = taoDoiTuongSanPham("images/suaRuaMat.jpg", "Sữa rửa mặt Black Rouge T", 298000, 50, "Hà Nội", taoID());
    var matNa = taoDoiTuongSanPham("images/matNa.jpg", "Mặt nạ cấp ẩm Banobagi", 25000, 8, "Hà Nội", taoID());
    var cheKhuyetDiem = taoDoiTuongSanPham("images/cheKhuyetDiem.jpg", "Kem Che Khuyết Điểm G9Skin", 300000, 50, "Hà Nội", taoID());
    var chongNang = taoDoiTuongSanPham("images/chongNang.jpg", "Kem chống nắng nâng tone da A'pieu", 199000, 40, "Hà Nội", taoID());
    var kemLot = taoDoiTuongSanPham("images/kemLot.jpg", "Kem Lót Trang Điểm, Chống Nắng Missha ", 320000, 38, "Hà Nội", taoID());
    var guongTay = taoDoiTuongSanPham("images/guongTay.jpg", "Gương Cầm Tay Mini Romand", 200000, 61, "Hà Nội", taoID());
    var mutDanh = taoDoiTuongSanPham("images/mutDanh.jpg", "Mút Đánh Cushion Merzy", 120000, 26, "Hà Nội", taoID());
    var coTan = taoDoiTuongSanPham("images/coTan.jpg", "Cọ Tán Kem Nền Merzy Dome", 220000, 32, "Hà Nội", taoID());
    var coMat = taoDoiTuongSanPham("images/coMat.jpg", "Cọ Đánh Phấn Mắt Innisfree", 140000, 29, "Hà Nội", taoID());
    var bongTayTrang = taoDoiTuongSanPham("images/bongTayTrang.jpg", "Bông Tẩy Trang Wellderma", 129000, 26, "Hà Nội", taoID());
    var mayRuaMat = taoDoiTuongSanPham("images/mayRuaMat.jpg", "Máy Rửa Mặt Massage WellDerma", 1000000, 40, "Hà Nội", taoID());

    var danhSachSanPham = new Array();
    danhSachSanPham.push(sonMoi);
    danhSachSanPham.push(phanMat);
    danhSachSanPham.push(phanNen);
    danhSachSanPham.push(phanMa);
    danhSachSanPham.push(toner);
    danhSachSanPham.push(bangTaoKhoi);
    danhSachSanPham.push(chuotMi);
    danhSachSanPham.push(keMat);
    danhSachSanPham.push(gelMat);
    danhSachSanPham.push(suaRuaMat);
    danhSachSanPham.push(matNa);
    danhSachSanPham.push(cheKhuyetDiem);
    danhSachSanPham.push(chongNang);
    danhSachSanPham.push(kemLot);
    danhSachSanPham.push(guongTay);
    danhSachSanPham.push(mutDanh);
    danhSachSanPham.push(coTan);
    danhSachSanPham.push(coMat);
    danhSachSanPham.push(bongTayTrang);
    danhSachSanPham.push(mayRuaMat);

    return danhSachSanPham;
}

function chuyenDoiDanhSachSanPhamThanhHTML(danhSachSanPham) {
    //Bước 1: Tạo vòng lặp duyệt tất cả các phần tử trong mảng
    //Bước 2: Tạo ra đọan  HTML cho mỗi phần tử
    //Bước 3: Cộng chuỗi các đoạn HTML để tạo thành một đoạn HTML lớn gồm các HTML nhỏ hơn
    var HTMLTong = "";
    for (let i = 0; i < danhSachSanPham.length; i++) {
        //lấy sản phẩm ở vị trí i
        var sanPham = danhSachSanPham[i];
        var HTML = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLTong += HTML;
    }
    return HTMLTong;
}

function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id)
    var HTML = "";
    //Chuyển đổi sang HTML
    HTML += "<div class = 'san-pham'>";
    HTML += "   <div class = 'hinh-anh-san-pham'>   "
    HTML += "       <img src='" + sanPham.hinhAnh + "'>";
    HTML += "   </div>";
    HTML += "   <h3 class='ten-san-pham'>" + sanPham.ten + "</h3>";
    HTML += "   <p class='gia-truoc-khi-giam'>" + "Giá gốc: " + sanPham.giaGoc + "đ" + "</p>";
    HTML += "   <p class='gia-sau-khi-giam'>" + "Giá bán: " + sanPham.tinhGiaBan() + "đ" + "</p>";
    HTML += "   <p class='gia-giam'>" + "(" + "Giảm " + sanPham.phanTramGiamGia + "%" + ")" + "</p>";
    HTML += "   <p class='khu-vuc-ban'>" + sanPham.khuVuc + "</p>";
    HTML += '<button onclick="onClickDuaVaoGioHang(\''+ sanPham.id +'\')" class="btn btn-primary">Đưa vào giỏ hàng</button>';
    HTML += "</div>";
    return HTML;
}

/* Xây dựng hàm sinh ID tự động, output là chuỗi ID duy nhất */
function taoID() {
    var id = "";
    //Lấy ms ở thời điểm hiện tại; 1s = 1000ms
    id = Math.random().toString().substring(2, 10) + "_" + String(new Date().getTime());
    return id;
}

/*Mô tả: Từ ID sản phẩm lấy lên đối tượng sản phẩm với đầy đủ các hàm bên trong đối tượng
    Input: idSanPham
    Output: đối tượng sản phẩm
*/
function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    //Bước 1: Load toàn bộ sản phẩm dưới local storage lên
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    //Bước 2: Tìm ra đối tượng nào trong danh sách mà có id = idSanPham
    for (var i = 0; i < danhSachSanPham.length; i++){
        var sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham){
            sanPham = sanPhamHienTai;
            break;
        }
    }
    //Bước 3: Chuyển đổi đối tượng thành đối tượng đầy đủ
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    
    return sanPham;
}

//Mô tả: Lấy toàn bộ danh sách 
function layDanhSachSanPhamDuoiLocalStorage() {
    //Bước 1: Load json
    var jsonDanhSachSanPham = localStorage.getItem("danhSachSanPham");
    //Bước 2: Chuyển json thành đối tượng 
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}