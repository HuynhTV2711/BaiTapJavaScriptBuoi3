/**
 * Mô hình 3 khối:
 * Đầu vào: Người dùng nhập vào 5 số thực
 * Xử lí: Giá trị trung bình = tổng 5 số thực chia 5
 * Đầu ra: Giá trị trung bình
 */
document.getElementById("btnTinhTrungBinh").onclick = function(){
    var soThuc1 = document.getElementById("soThuc1").value *1;
    var soThuc2 = document.getElementById("soThuc2").value *1;
    var soThuc3 = document.getElementById("soThuc3").value *1;
    var soThuc4 = document.getElementById("soThuc4").value *1;
    var soThuc5 = document.getElementById("soThuc5").value *1;
    var trungBinh = (soThuc1 + soThuc2 + soThuc3+ soThuc4+soThuc5)/5
    document.getElementById("trungBinh").innerHTML = `Số trung bình là: ${trungBinh}`;
}