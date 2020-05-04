/*Yêu cầu: lấy giỏ hàng từ local storage lên
    output: giỏ hàng
*/
function layGioHangTuLocalStorage() {
    var gioHang = new Array();
    //TODO: truy cập vào local storage để lấy giỏ hàng
    //Bước 1: Lấy JSON
    var jsonGioHang = localStorage.getItem("gioHang");

    //Bước 2: Chuyển JSON thành đối tượng giỏ hàng
    if (jsonGioHang != null) {
        gioHang = JSON.parse(jsonGioHang);
    }
    return gioHang;
}

/* Yêu cầu: Thêm sản phẩm vào giỏ hàng
    input: idSanPham, giỏ hàng
    output: giỏ hàng sau khi được thêm sản phẩm
*/
function themSanPhamVaoGioHang(idSanPham, gioHang) {
    var gioHangSauKhiDuocThem = gioHang;
    //Bước 1: Tạo ra đối tượng item giỏ hàng
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    //Bước 2: Thêm vào giỏ hàng item mới
    console.log(gioHang);
    gioHangSauKhiDuocThem.push(itemGioHang);

    return gioHangSauKhiDuocThem;
}

/* Yêu cầu: Lưu trữ giỏ hàng xuống local storage
    input: gioHang
    output:
*/
function luuGioHangVaoLocalStorage(gioHang) {
    //Bước 1: Chuyển thành chuỗi json
    var jsonGioHang = JSON.stringify(gioHang);
    //Bước 2: Lưu vào Local Storage
    localStorage.setItem("gioHang", jsonGioHang);
}

/* Yêu cầu: Tạo ra đối tượng item giỏ hàng
    Input: idSanPham, soLuong
    Output: Đối tượng item giỏ hàng
 */
function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

function taoDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, soLuong);
    danhSachItemGioHang.push(itemGioHang);
    return danhSachItemGioHang;
}

function chuyenDanhSachItemGioHangThanhJson(danhSachItemGioHang) {
    var danhSachItemGioHang = taoDanhSachItemGioHang();
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    return jsonDanhSachItemGioHang;
}

function xoaSanPhamTrongGioHang(idSanPham) {
    var danhSachItemGioHang = layGioHangTuLocalStorage();
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var sanPham = danhSachItemGioHang[i];
        if (sanPham.id == idSanPham) {
            var index = i;
            break;
        }
    }
    //Xóa giỏ hàng
    danhSachItemGioHang.splice(index, 1);
    localStorage.setItem("gioHang", JSON.stringify(danhSachItemGioHang));

    hienThiGioHang();
}
