
 var useCaher,useCaher2={}
 var emailnhanvienhen = "Phạm Kim Quí";
 var urlTX = "https://fluffy-iris-selenium.glitch.me/XeTrongXuong"
 var urlDG = "https://fluffy-iris-selenium.glitch.me/XeDaGiao"
getData(urlTX)
 setInterval(function (){getData(urlTX)},60000);
  //DanhSachCoVan();
 function getData(url){
   fetch(url)
   .then(response => response.json())
   .then(data =>{
     useCaher=data
      loadData ()
   } );
 }


 function postData(data,url,methor){
     fetch(url, {
     method: methor, // or 'PUT'
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(data),
     })
     .then(response => response.json())
     .then(data => {
     getData(urlTX)
     setTimeout(function(){$('#ModalSCC').modal('hide')},1000)
     })
     .catch((error) => {
     console.error('Error:', error);
     });
 }


 function deleteData(url){
   fetch(url, {
   method: "DELETE", // or 'PUT'
   headers: {'Content-Type': 'application/json'},
   })
   .then(response => response.json())
   .then(data => {
   getData(urlTX)
   })
   .catch((error) => {
   console.error('Error:', error);
   });
}



function checkID(MaSo){
 var ojb =  useCaher
 for(var a in ojb){
   if(ojb[a].MaSo == MaSo){return ojb[a].id }
}
}
 



function DanhSachCoVan2() { 
    var values = NhomCV;
     var list = document.getElementById('CoVanDichVu'); 
     $("#CoVanDichVu").html("")
     var option = document.createElement("option");
      option.value = "";
       option.text = "";
       list.appendChild(option)
     for (var i = 0; i < values.length; i++) {
       var khongduoc=" 🆗"
      if(CoVanDuocDatHen(values[i])=="ok") {
       var option = document.createElement("option");
       option.value = values[i];
       option.text = values[i]+khongduoc;
       list.appendChild(option);
     }
     }
   }
 
 

   function DanhSachCoVan() { 
     $("#CoVanDichVu").html("")
      var list = document.getElementById('CoVanDichVu'); 
      var option = document.createElement("option");
      var values = NhomCV;
       option.value = "";
       option.text = "";
       list.appendChild(option)   
      for (var i = 0; i < values.length; i++) {
       var khongduoc=" 🆗"
       if(CoVanDuocDatHen(values[i])=="NotOK") {khongduoc=' ⛔'}
       var option = document.createElement("option");
       option.value = values[i];
       option.text = values[i]+khongduoc;
       list.appendChild(option);
     
     }
    
   }
 


   function CoVanDuocDatHen(tencovan){
       var ojb =  useCaher;
       ojb = ojb.filter(function(r){return (r.CoVanDichVu===tencovan&&r.TrangThaiXuong==="00 Có Hẹn")})
       var b="ok"
       var giodathen = new Date(DoiNgayDangKy($("#ThoiGianHen").val())) 
     for(var a in ojb){
      
     var start = new Date(DoiNgayDangKy(ojb[a].ThoiGianHen))
     if(giodathen.valueOf()==start.valueOf()){
       var b ="NotOK"; 
       }
   }
   return b
   }
 
 
 
 

 function checkloaihinhGJ(){
   var LoaiHinhSCC=$('#LoaiHinhSuaChua').val()
    var giodathen = new Date(DoiNgayDangKy($("#ThoiGianHen").val()))
   if(LoaiHinhSCC=="EM60"){LoaiHinhSCC="EM"}
    if(LoaiHinhSCC=="FIR"){LoaiHinhSCC="SCC"}
    if(LoaiHinhSCC=="SCC"){giodathen.setMinutes(0)}
      var dataArray1 =  useCaher;
      var dataArrayhen = dataArray1.filter(function (r){
        if(r.LoaiHinhSuaChua=="EM60"){r.LoaiHinhSuaChua="EM"}
        if(r.LoaiHinhSuaChua=="FIR"){r.LoaiHinhSuaChua="SCC"}
        return r.TrangThaiXuong=="00 Có Hẹn"&&r.LoaiHinhSuaChua==LoaiHinhSCC&&(new Date(r.ThoiGianHen).valueOf()==giodathen.valueOf())})
      var soluong = dataArrayhen.length
      if(LoaiHinhSCC=="EM"&&soluong>=3){$('#LoaiHinhSuaChua').val(""); alert("Quá Số lượng đặt hẹn cho xe EM. Tối đa 3 xe") }
       if(LoaiHinhSCC=="SCC"&&soluong>=2){$('#LoaiHinhSuaChua').val(""); alert("Quá Số lượng đặt hẹn cho xe SCC. Tối đa 2 xe") }
   return soluong
 }



 function checkloaihinhDS(){
   var LoaiHinhDS=$('#LoaiHinhDongSon').val()
    var giodathen = new Date(DoiNgayDangKy($("#ThoiGianHen").val()))
      var dataArray1 =  useCaher;
      var dataArrayhen = dataArray1.filter(function (r){
        return r.TrangThaiXuong=="00 Có Hẹn"&&r.LoaiHinhDongSon==LoaiHinhDS&&(new Date(r.ThoiGianHen).valueOf()==giodathen.valueOf())})
      var soluongDS = dataArrayhen.length
      if(soluongDS>=1){$('#LoaiHinhDongSon').val(""); alert("Quá Số lượng đặt hẹn cho xe "+LoaiHinhDS+ ". Tối đa 1 xe") }
   return soluongDS
 }
   
  

 function DangKyHen(){
   if($('#BienSoXe').val()==""){alert("Không Thể Đặt Hẹn, Thiếu Thông Tin");return false}
   if($('#TenKH').val()==""){alert("Không Thể Đặt Hẹn, Thiếu Thông Tin");return false}
   if($('#NoiDungHen').val()==""){alert("Không Thể Đặt Hẹn, Thiếu Thông Tin");return false}
   if($('#ThoiGianHen').val()==""){alert("Không Thể Đặt Hẹn, Thiếu Thông Tin");return false}
   if($('#CoVanDichVu').val()==""){alert("Không Thể Đặt Hẹn, Thiếu Thông Tin");return false}
  if($('#LoaiHinhDongSon').val()==""&&$('#LoaiHinhSuaChua').val()==""){alert("Không Thể Đặt Hẹn, Thiếu Thông Tin");return false}
         var MaSohen = TaoMaSo($('#ThoiGianHen').val())+$('#BienSoXe').val()
          var thoigiandung  = DoiNgayDangKy(document.getElementById("ThoiGianHen").value)
          var khachhen = "Khách Hẹn"
          var giohientai = new Date()
          var thoigiandathen = (thoigiandung.getTime()-giohientai.getTime())/(60*1000)
          if(thoigiandathen<=30){alert("Không Thể Đặt Hẹn, Đặt hẹn trước 30p");return false}
          if(thoigiandathen>30&&thoigiandathen<=120){ khachhen = "Hẹn Vãn Lai"}
          if($('#LoaiHinhSuaChua').val()=="SCC"){$('#ThoiGianHen').val(TimesClick(DoiNgayDangKy($('#ThoiGianHen').val()).setMinutes(0) ))}
          var json2 = {
                       MaSo:$('#MaSo').val(),
                       BienSoXe: $('#BienSoXe').val(),
                       TenKH: $('#TenKH').val(),
                       SoDT: $('#SoDT').val(),
                       NoiDungHen: $('#NoiDungHen').val(),
                       CoVanDichVu: $('#CoVanDichVu').val(),
                       LoaiHinhDongSon: $('#LoaiHinhDongSon').val(),
                       LoaiHinhSuaChua: $('#LoaiHinhSuaChua').val(),
                       ThoiGianHen: $('#ThoiGianHen').val(),
                       TDNgayHen: ngayGiohen($('#ThoiGianHen').val()).ngaythang,
                       GioHen: ngayGiohen($('#ThoiGianHen').val()).giophut,
                       KhachHangHen:khachhen,
                       TrangThaiXuong: "00 Có Hẹn",
                       NguoiDatHen: localStorage.getItem("userName"),
                       TDXacNhanHen:TimesClick()
                     }
                        
 $("#mesenge").html('<div class="alert alert-warning" role="alert">Đang Đăng Ký! '+khachhen+'</div>')
 postData(json2,urlTX,"POST")
 }
 
 


 function CapNhatHen(){
         var MaSohen = TaoMaSo($('#ThoiGianHen').val())+$('#BienSoXe').val()
          var json2 = {
                       MaSo:MaSohen,
                       BienSoXe: $('#BienSoXe').val(),
                       TenKH: $('#TenKH').val(),
                       SoDT: $('#SoDT').val(),
                       NoiDungHen: $('#NoiDungHen').val(),
                       CoVanDichVu: $('#CoVanDichVu').val(),
                       LoaiHinhDongSon: $('#LoaiHinhDongSon').val(),
                       LoaiHinhSuaChua: $('#LoaiHinhSuaChua').val(),
                       ThoiGianHen: $('#ThoiGianHen').val(),
                       TDNgayHen: ngayGiohen($('#ThoiGianHen').val()).ngaythang,
                       GioHen: ngayGiohen($('#ThoiGianHen').val()).giophut,
                       KhachHangHen:"Khách Hẹn",
                       TrangThaiXuong: "00 Có Hẹn",
                       NguoiDatHen: $('#NguoiDatHen').val(),
                       TDXacNhanHen:TimesClick()
                     }
             
 $("#mesenge").html('<div class="alert alert-warning" role="alert">Đang Cập Nhật!</div>')
 postData(json2,urlTX+"/"+checkID($('#MaSo').val()),"PATCH")
 }
 



 function CapNhatHenKeo(MaSo,ThoiGianHenMoi){
     var ojb =  useCaher
     for(var a in ojb){
         if(ojb[a].MaSo == MaSo){
       if(localStorage.getItem("userName")===ojb[a].NguoiDatHen||localStorage.getItem("userName")==emailnhanvienhen){
          var json2 = {
                       ThoiGianHen: ThoiGianHenMoi,
                       TDNgayHen: ngayGiohen(ThoiGianHenMoi).ngaythang,
                       GioHen: ngayGiohen(ThoiGianHenMoi).giophut,
                     }
    postData(json2,urlTX+"/"+checkID(MaSo),"PATCH")
 }else{alert("Bạn không thể dời hẹn, Bạn không Đặt hẹn xe này");loadData()}
 }
 }
 }



 function XacNhanHen(){
   var MaSo = $('#MaSo').val()
   var ojb =  useCaher
   var json2 
     for(var a in ojb){
     if(ojb[a].MaSo == MaSo){json2 = ojb[a]}}
   if($('#TrangThaiHen').val()=="Hủy Hẹn"){
     console.log(json2)
     postData(json2,urlDG,"POST")
     deleteData(urlTX+"/"+json2.id )
 }else{
    json2 = { TrangThaiHen: $('#TrangThaiHen').val(),
              TDXacNhanHen:TimesClick()}
 postData(json2,urlTX+"/"+checkID(MaSo),"PATCH")
 }
 }
 

 function changvalue(){
     var ojb =  useCaher
     for(var a in ojb){
     $("#mesenge").html("<div class='alert alert-success'>Hello!!</div>")
         if(ojb[a].MaSo == $("#MaSo").val()){
       if(ojb[a].BienSoXe){	document.getElementById("BienSoXe").value = ojb[a].BienSoXe}
       if(ojb[a].TrangThaiXuong){document.getElementById("TrangThaiXuong").value = ojb[a].TrangThaiXuong
       if(ojb[a].CoVanDichVu){document.getElementById("CoVanDichVu").value = ojb[a].CoVanDichVu} 
       if(ojb[a].LoaiHinhDongSon){document.getElementById("LoaiHinhDongSon").value = ojb[a].LoaiHinhDongSon} 
       if(ojb[a].LoaiHinhSuaChua){document.getElementById("LoaiHinhSuaChua").value = ojb[a].LoaiHinhSuaChua} 
       if(ojb[a].TenKH){document.getElementById("TenKH").value = ojb[a].TenKH} 
       if(ojb[a].SoDT){document.getElementById("SoDT").value = ojb[a].SoDT} 
       if(ojb[a].NoiDungHen){document.getElementById("NoiDungHen").value = ojb[a].NoiDungHen}
       if(ojb[a].ThoiGianHen){document.getElementById("ThoiGianHen").value = ojb[a].ThoiGianHen} 
       if(ojb[a].NguoiDatHen){document.getElementById("NguoiDatHen").value = ojb[a].NguoiDatHen} 
       if(ojb[a].TrangThaiHen){document.getElementById("TrangThaiHen").value = ojb[a].TrangThaiHen}
       if(ojb[a].TrangThaiXuong=="00 Có Hẹn"&&ojb[a].NguoiDatHen==$('#Email').val()){$("#buttonDK").html("<button  type='button' class='btn btn-primary me-2' onclick='CapNhatHen()'>Cập Nhật!</button>")}else if(ojb[a].TrangThaiXuong=="00 Có Hẹn"&& emailnhanvienhen==$('#Email').val()){$("#buttonDK").html("<button  type='button' class='btn btn-primary me-2' onclick='CapNhatHen()'>Cập Nhật!</button>")}else{$("#buttonDK").html("")}
       goithongtin()
     } 
     }
 }
 }




 function changvalueBS(){
     var ojb =  useCaher
     for(var a in ojb){
     $("#mesenge").html("<div class='alert alert-success'>Hello!!</div>")
     if(ojb[a].BienSoXe == $("#BienSoXe").val()&&ojb[a].TrangThaiXuong == "00 Có Hẹn"){ alert("Xe Đã Có Hẹn");
     $("#buttonDK").html("")
     return false }
 
 }
 }

 
   function goithongtin(){
      var dienthoai = "<a href='tel:+84"+$("#SoDT").val()+"' class='col-sm-7'>Click để Gọi</a>"
      var ThoiGianDen = DoiNgayDangKy($("#ThoiGianHen").val())
          ThoiGianDen = new Date(ThoiGianDen-15*60*1000)
      var sms = "<a href='sms:+84"+$("#SoDT").val()+"?&amp;body=Toyota Vũng Tàu xin xác nhận cuộc hẹn \n"+$("#BienSoXe").val()+" .Nội Dung: "+$("#NoiDungHen").val()+". Vào Lúc : "+Doingay2(ThoiGianDen)+".Quý Khách vui lòng đến ĐÚNG GIỜ để làm thủ tục.Xin cảm ơn!!' class='col-sm-7'>Click để Nhắn Tin</a>"
      var EMail = '<a href="mailto:'+$("#NguoiDatHen").val()+'?&subject=Thông báo xác nhận hẹn '+$("#BienSoXe").val()+' &body=Xác Nhận hẹn xe '+$("#BienSoXe").val()+' .Nội Dung :'+ $("#NoiDungHen").val()+'  .Vào Lúc:'+Doingay2(ThoiGianDen)+'.Thanks!!"> Emailr</a>'
    $("#NhanTin").html(sms)
    $("#CuocGoi").html(dienthoai)
     $("#email").html(EMail)
   }
 
 