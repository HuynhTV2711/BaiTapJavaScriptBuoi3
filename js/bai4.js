
/**Phân tích theo sơ đồ 3 khối
 * - Đầu vào: Nhập vào chiều dài và chiêu rộng của hình chữ nhật
 * - Xử lí: Chu vi = (Dài + rộng)*2, Diện tích = dài * rộng
 * - Đầu ra: Chu vi và diện tích của hình chữ nhật
 */

document.getElementById("btnTinh").onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value*1;
    var chieuRong = document.getElementById("chieuRong").value*1;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;
    document.getElementById("chuVi").innerHTML = `Chu vi Hình chữ nhật là: ${chuVi}`;
    document.getElementById("dienTich").innerHTML = `Diện tích Hình chữ nhật là: ${dienTich}`;
 }