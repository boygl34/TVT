var NhomTN=["Có Hẹn","Tiếp Nhận"]
var NhomCV=["Toàn","Tài","Rôn","Mẫn","Sang","Vinh","Triêng","Lộc","Hiệp","None"]
var NhomDH=["EM","SCC","Đồng Sơn","Báo Giá BH"]
var KTVDong=["Châu","Trường","Phúc","Trương","Quang","Định"]
var KTVSonDinh=["Đình","Thành","Lưu","Hùng","Lâm","Duy","Tài"]
var KTVSonThien=["Thiên","Dũng","Lực","Tú","Chương","Đồng","Quốc","Lưu"]
var PhongSon=["Phòng Sơn 1","Phòng Sơn 2","Phòng Sơn 3"]
var NhomSon=["Đình","Thiên"]
var KTVDongSon=["Châu","Trường","Phúc","Trương","Quang","Định","Đình","Thành","Lưu","Hùng","Lâm","Duy","Tài","Thiên","Dũng","Lực","Tú","Chương","Đồng","Quốc","Lưu"]
var KhoangSC =["EM 01","EM 02","EM 03","EM 04","SCC 05","SCC 06","SCC 07","SCC 08","SCC 09","SCC 10","4 Trụ","K Ngoài"]
var NhomKTV =["EM","Bạo","Hoan"]
var KTVBao=["Bạo","Hiếu","Duy","Phước","Huy","Tân"]
var KTVHoan=["Hoan","Lâm","Tâm","Sơn","Thiên"]
var KTVEM=["Sáng","Hưng","Vinh","Khoa","Đ Anh","Hiển","Cường","Trí"]
var KhuVucVT=["Bà Rịa","Vũng Tàu","Long Điền","Phú Mỹ","Đất Đỏ","Châu Đức","Xuyên Mộc","Côn Đảo","KV Khác"]
var ListXe=["Camry","Inova","Fortuner","Altis","Altis Cross","Veloz","Wigo","Land Cruiser","Land Prado","Hilander","Rav4","Vios","Rush","Avanza","Raize","Lexus"]
function Doingay2(use){
    use=new Date(use)
    var Thu = use.getDay()+1
    var Thang =use.getMonth()+1
    var Ngay = use.getDate()
    var Nam = use.getFullYear()
    var Gio = use.getHours()
    var Phut = use.getMinutes()
    if (Thang<10){Thang="0"+Thang}
    if (Ngay<10){Ngay="0"+Ngay}
    if (Gio<10){Gio="0"+Gio}
    if (Phut<10){Phut="0"+Phut}
    var ThoiGian = Gio+":"+Phut +" Thứ "+Thu +" ngày "+Ngay+"/"+Thang+" "
    return ThoiGian
  }
  checkPhanQuyen()
  function checkPhanQuyen(){
    var PhanQuyen =  localStorage.getItem("PhanQuyen");
    if(PhanQuyen=="KTVBP"){ 
      document.getElementById("mySidebar").innerHTML ='<a class="w3-bar-item w3-button w3-border-bottom w3-large" href="main.html">Toyota TVT</a>'
    document.getElementById("mySidebar").innerHTML += '<a class="w3-bar-item w3-button w3-teal" href="Body.html" id="name">Home</a>'
      document.getElementById("mySidebar").innerHTML +=  '<a class="w3-bar-item w3-button"  href="Body.html">Đồng Sơn</a>'
      document.getElementById("mySidebar").innerHTML +=' <a class="w3-bar-item w3-button" ><select required class="form-control"  id="LOAIBANGTD" onchange=" BANGTIENDO(this.value)" ><option value="Xưởng">Xưởng</option><option value="Đồng">Đồng</option><option value="Thiên">Thiên</option><option value="Đình">Đình</option><option value="Pass">Pass</option></select> </a>'
  
    
    
    
    }
    if(PhanQuyen=="SALE"){
      document.getElementById("mySidebar").innerHTML ='<a class="w3-bar-item w3-button w3-border-bottom w3-large" href="main.html">Toyota TVT</a>'
    document.getElementById("mySidebar").innerHTML += '<a class="w3-bar-item w3-button w3-teal" href="Body.html" id="name">Home</a>'
      
      document.getElementById("mySidebar").innerHTML +=  '<a class="w3-bar-item w3-button"  href="DatHen.html">Đặt Hẹn</a>'}
    
  }

function DoiNgayDangKy(ngayhen){
  var aa
  if(ngayhen){
    var Thang =ngayhen.slice(3,5)
    var Ngay = ngayhen.slice(0,2)
    var Nam = ngayhen.slice(6,10)
    var Gio = ngayhen.slice(11,13)
    var Phut = ngayhen.slice(14,16)
    var ThoiGianMoi = Nam+"-"+Thang+"-"+Ngay+"T"+Gio+":"+Phut+":00Z"
     var aa= new Date(ThoiGianMoi)
     aa= new Date(aa-7*60*60*1000)}
     return aa ;
    }
  
  function Doingay(use){
    var ThoiGian = "Chưa XN"
    if(use){
    use=new Date(use)
    var Thang =use.getMonth()+1
    var Ngay = use.getDate()
    var Nam = use.getFullYear()
    var Gio = use.getHours()
    var Phut = use.getMinutes()
    if (Thang<10){Thang="0"+Thang}
    if (Ngay<10){Ngay="0"+Ngay}
    if (Gio<10){Gio="0"+Gio}
    if (Phut<10){Phut="0"+Phut}
    var ThoiGian = Ngay+"/"+Thang+" "+Gio+":"+Phut}
    return ThoiGian
 }
 function ngayGiohen(ngayhen){
   var Thang =ngayhen.slice(3,5)
    var Ngay = ngayhen.slice(0,2)
    var Nam = ngayhen.slice(6,10)
    var Gio = ngayhen.slice(11,13)
    var Phut = ngayhen.slice(14,16)
    var NgayThang = Ngay+"/"+Thang+"/"+Nam
     var use={}
     use.ngaythang= NgayThang
     use.giophut= Gio+":"+Phut+":00"
    
     return use ;
 }

  function suabienso(myValue) {
    var myValue2 = myValue.toUpperCase()
    myValue = myValue.replace(" ","")
      myValue = myValue.replace("-","")
       myValue = myValue.replace(".","")
        if(myValue.length >5){
        myValue = myValue.replace("[h] ","")
        myValue = myValue.replace("[H] ","")
        myValue = myValue.replace("[L] ","")
        var ins = myValue.indexOf('-')
      var BiensoLD =  myValue.slice(2,4).toUpperCase()
      if(ins=="-1"&&BiensoLD=="LD"){myValue = myValue.slice(0,4)+"-"+myValue.slice(4,myValue.length)}
      if(ins=="-1"&&BiensoLD!="LD"){myValue = myValue.slice(0,3)+"-"+myValue.slice(3,myValue.length)}
        var myValue1 = myValue.replace(myValue.charAt(myValue.indexOf('.')),'');  
        var soxe = myValue1.slice(myValue1.indexOf('-')+1,myValue1.length);
        var aa = myValue1.slice(myValue1.length - 2,myValue1.length);
        if (soxe.length == 5 ){
        var aaaa= soxe.charAt(0)+soxe.charAt(1)+soxe.charAt(2)+soxe.charAt(3)+soxe.charAt(4)
        var bbbb = soxe.charAt(0)+soxe.charAt(1)+soxe.charAt(2)+'.'+soxe.charAt(3)+soxe.charAt(4)
        var myValue2 = myValue1.toString(6).replace(aaaa,bbbb).toUpperCase()
        }else{var myValue2 = myValue1.toUpperCase()}   }
        return myValue2;
  }

  $('.Ngay').datetimepicker({
    format: 'dd/mm/yyyy HH:MM:00 ', 
             uiLibrary: 'bootstrap4',
             modal: true,
             footer: true,
              datepicker: {
                 disableDates: function (date) {
                     const currentDate = new Date().setHours(0, 0, 0, 0);
                     return date.setHours(0, 0, 0, 0) >= currentDate ? true : false;
                 }}
         });
         $('.Ngay2').datetimepicker({
          format: 'dd/mm/yyyy HH:MM:00 ', 
                   uiLibrary: 'bootstrap4',
                   modal: true,
                   footer: true,
                    datepicker: {
                       disableDates: function (date) {
                           const currentDate = new Date().setHours(0, 0, 0, 0);
                           return date.setHours(0, 0, 0, 0) >= currentDate ? true : false;
                       }}
               });

         function datevalue(value){
            var NgayHoanThanh=new Date(value)
                  NgayHoanThanh=new Date(NgayHoanThanh*1+7*60*60*1000)
                  var aa = NgayHoanThanh.toJSON()
                  var bb = aa.slice(0,aa.length -5)
            return bb
            }
            function TaoMaSo(ngayhen){
             
                 var Thang =ngayhen.slice(3,5)
                 var Ngay = ngayhen.slice(0,2)
                 var Nam = ngayhen.slice(6,10)
                 var MaSo = "TVT"+Nam+Thang+Ngay+"_"
                 return MaSo;
                }
            
                function TimesClick(data){
                    if(data){var  use=new Date(data);}else{var  use=new Date()}
                      var useinfo = {}
                      var Thang =use.getMonth()+1;
                      var Ngay = use.getDate();
                      var Nam = use.getFullYear();var Gio = use.getHours();
                      var Phut = use.getMinutes();
                      if (Thang<10){Thang="0"+Thang};
                      if (Ngay<10){Ngay="0"+Ngay};
                      if (Gio<10){Gio="0"+Gio};
                      if (Phut<10){Phut="0"+Phut}
                  return Ngay+"/"+Thang+"/"+Nam+" "+Gio+":"+Phut+":00"
                  }   
                  function ngaydathen(){
                    var datehen = document.getElementById('ngaydathenval').value
                    console.log(datehen)
                    let optionngay={
                        //clickToUse:true,
                         verticalScroll: true,
                        zoomable:false, 
                        start:new Date(datehen).setHours(6),
                        end: new Date(datehen).setHours(17),
                      }
                      timeline.setOptions(optionngay);
                    }      
                    
function canhBaoThanhCong(tieude,noidung){
  var alert = ' <div class="alert alert-success" role="alert" data-delay="10000">'+
                  ' <h4 class="alert-heading">Thành Công!</h4>'+
                  '<p>Đăng Ký Thành công biến số xe</p>'+
                  '</div>'+
$("#alert").html($("#alert").html()+alert)
}