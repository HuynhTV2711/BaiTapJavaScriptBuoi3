
/**Phân tích theo sơ đồ 3 khối
 * - Đầu vào: Số tiền đô cần quy đổi và đổi sang tiền việt là 23.500
 * - Xử lí: Tiền việt = số tiền đô * 23.500
 * - Đầu ra: số Tiền Việt đã được quy đổi
 */

document.getElementById("btnDoiTien").onclick = function(){
    var ngayCong = document.getElementById("tienDo").value*1;
    var luong = ngayCong *23500;
    document.getElementById("tienViet").innerHTML = `Số tiền việt đổi được là: ${luong.toLocaleString('vi', {style : 'currency', currency : 'VND'})}`;
 }