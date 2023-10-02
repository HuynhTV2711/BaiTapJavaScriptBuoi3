
/**Phân tích theo sơ đồ 3 khối
 * - Đầu vào: Số ngày làm và lương 1 ngày là 100.000
 * - Xử lí: Lương = số ngày làm * lương 1 ngày
 * - Đầu ra: Lương
 */

document.getElementById("btnTinhLuong").onclick = function(){
   var ngayCong = document.getElementById("ngayCong").value*1;
   var luong = ngayCong *100000;
   document.getElementById("luongNhanVien").innerHTML = `Lương của nhân viên là: ${luong.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`;
}