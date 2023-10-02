
/**Phân tích theo sơ đồ 3 khối
 * - Đầu vào: Nhập vào số có 2 ký số
 * - Xử lí: chia số thành 2 chữ số hàng chục và hàng đơn vị, rồi tính tổng 2 số đó
 * - Đầu ra: tổng 2 ký số*/

document.getElementById("btnTinh").onclick = function(){
    var so = document.getElementById("soCoHaiKySo").value*1;
    var soHangChuc = so / 10;
    var sohangDonVi = so % 10;
    var tong = Math.floor(soHangChuc) + sohangDonVi;
    document.getElementById("tongHaiKySo").innerHTML = `Tổng của 2 ký số là: ${tong}`;
   
 }