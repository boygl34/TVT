
var useCaher,useCaher2
var emailnhanvienhen = "quipham@toyotavungtau.com";
var urlTX = "https://deciduous-pentagonal-powder.glitch.me/XeTrongXuong"
var urlDG = "https://deciduous-pentagonal-powder.glitch.me/XeDaGiao"

setInterval(function (){getData(urlTX)},60000);
getData(urlTX)
function getData(url){
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    useCaher=data
    showData()
    loadData()
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
    $("#mesenge").html("<div class='alert alert-success'>Đăng Ký Thành Công</div>")
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





function showData(use){
    var dataArray =  useCaher
    var dataArray0= dataArray.filter(function(r){return ((r.LoaiHinhSuaChua==="SCC"||r.LoaiHinhSuaChua==="EM"||r.LoaiHinhSuaChua==="EM60"||r.LoaiHinhSuaChua==="FIR"))})
   
  if(document.getElementById('myfilter').value ==="Đã SC"){dataArray= dataArray0.filter(function(r){return (r.TrangThaiSCC==="Đã SC")})}
  else{
  dataArray= dataArray0.filter(function(r){return (r.TrangThaiXuong!=="00 Có Hẹn")})
  var dataArray1= dataArray.filter(function(r){return (r.TrangThaiSCC==="Đang SC")})
  dataArray1.sort(function(a, b) {return (a.KhoangSuaChua.toLowerCase() > b.KhoangSuaChua.toLowerCase() ? 1 : -1);})
  var dataArray3= dataArray.filter(function(r){return (r.TrangThaiSCC==="Dừng CV")})
  var dataArray2= dataArray.filter(function(r){return (r.TrangThaiSCC==="Chờ SC")})
  dataArray=  dataArray1.concat(dataArray3);
  dataArray=  dataArray.concat(dataArray2);
  }
  
    useCaher2 = dataArray
     var tbodyTim = document.getElementById('table-body-Tim-xe')
     tbodyTim.innerHTML=""

         dataArray.forEach(function(r){
            var row = document.createElement("tr"); 
            var tbodyTim = document.getElementById('table-body-Tim-xe')
            var ColNgayVao = document.createElement("td");
            if(r.TDGapLeTan){ColNgayVao.innerHTML = r.TDGapLeTan.slice(0,5)}else{ColNgayVao.innerHTML=""}
                
                row.appendChild(ColNgayVao);
            var ColBienSo = document.createElement("td")
                ColBienSo.innerHTML = r.BienSoXe
                row.appendChild(ColBienSo); 
            var ColCoVan = document.createElement("td")
                ColCoVan.innerHTML = r.CoVanDichVu
                row.appendChild(ColCoVan);
            var ColTrangThai = document.createElement("td")
            var div = ""
                if( r.TrangThaiXuong=="05 Đang Sửa Chữa"){div ="Đang SC" ;
                        row.setAttribute('class', 'DangSuaChua')}
                if( r.TrangThaiXuong=="04 Đã Tiếp Nhận"){div ="Đã TN";
                row.setAttribute('class', 'ChuaSuaChua')}
                if (r.TrangThaiXuong =='03 Đang Tiếp Nhận') { div="Đang TN";row.setAttribute('class', 'ChoSuaChua');}
                if (r.TrangThaiXuong =='02 Chờ Tiếp Nhận'||r.TrangThaiXuong =='02 Chuẩn Bị Tiếp') { div="Chờ TN";row.setAttribute('class', 'ChoSuaChua')}
                 if (r.TrangThaiXuong =='05 Dừng Công Việc') { div='Dừng CV';row.setAttribute('class', 'DungCongViec')}
                ColTrangThai.innerHTML = div
                row.appendChild(ColTrangThai);
            var ColKhoang = document.createElement("td")
                ColKhoang.textContent = r.KhoangSuaChua
                row.appendChild(ColKhoang);                    
            var ColKTV1 = document.createElement("td")
                ColKTV1.textContent = r.KyThuatVien1
                row.appendChild(ColKTV1);
            var ColKTV2 = document.createElement("td")
                ColKTV2.textContent = r.KyThuatVien2
                row.appendChild(ColKTV2); 
            var ColRuaXe = document.createElement("td")
                ColRuaXe.textContent = r.KhachRuaXe
                row.appendChild(ColRuaXe);     
            var ColTienDo = document.createElement("td")
                ColTienDo.innerHTML = addtimeline(r.TrangThaiSCC,DoiNgayDangKy(r.TimeStartGJ),DoiNgayDangKy(r.TimeEndGJ),DoiNgayDangKy(r.TDHenGiaoXe))
                row.appendChild(ColTienDo)
            var ColGioGiao = document.createElement("td")
                var timeNow=new Date()
                if(r.TDHenGiaoXe){
                ColGioGiao.innerHTML = Math.round((( new Date(DoiNgayDangKy(r.TDHenGiaoXe))-timeNow)/(60*60*1000))*10)/10
                row.appendChild(ColGioGiao)}
                if (r.TrangThaiXuong =='02 Chờ Tiếp Nhận'||r.TrangThaiXuong =='02 Chuẩn Bị Tiếp'||r.TrangThaiXuong =='03 Đang Tiếp Nhận') { 
                  if(r.TrangThaiHen=="Đúng Giờ"){
                    ColTrangThai.innerHTML = ColTrangThai.innerHTML+" [D]"
                    row.setAttribute('class', 'DungGio')}
                  if(r.TrangThaiHen=="Đến Sớm"){
                    ColTrangThai.innerHTML = ColTrangThai.innerHTML+" [S]"
                    row.setAttribute('class', 'DenSom')}
                  }    
            


            tbodyTim.appendChild(row)
           
        })
      ;} 
  
  function addtimeline(CongDoan,GioBatDau,GioKetThuc,GioGiaoXe){
      var timeNow=new Date()
      var value =Math.round((timeNow- new Date(GioBatDau))/(new Date(GioKetThuc)- new Date(GioBatDau))*100)
      if(CongDoan=="Dừng CV"){value =Math.round((timeNow- new Date(GioBatDau))/(new Date(GioGiaoXe)- new Date(GioBatDau))*100)}
      var Div 
      if(value<75){
      Div = '<div class="progress " style="height: 25px;" ><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width:'+value+'%; color: yellow;" aria-valuemin="0" aria-valuemax="100">'+CongDoan +'  '+value+'%</div></div>'
      }else{
      Div='<div class="progress " style="height: 25px;" ><div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width:'+value+'%;"" aria-valuemin="0" aria-valuemax="100">'+CongDoan  +'  '+value+'%</div></div>'
  
      }
  return Div
  
  }
  
  function Doingay(use){
  use=new Date()
  var Thang =use.getMonth()+1
  var Ngay = use.getDate()
  var Nam = use.getFullYear()
  var Gio = use.getHours()
  var Phut = use.getMinutes()
  if (Thang<10){Thang="0"+Thang}
  if (Ngay<10){Ngay="0"+Ngay}
  if (Gio<10){Gio="0"+Gio}
  if (Phut<10){Phut="0"+Phut}
  var ThoiGian = Ngay+"/"+Thang+" "+Gio+":"+Phut
  return ThoiGian}
  
    
     
  
  function clickTableTiepNhan(){
      var table = document.getElementById('data-table');
      $("#mesenge").html('<div class="alert alert-warning" role="alert">WellCome!</div>')
      for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
          $("#buttonSCC").html('')
          document.getElementById('FormSCC').reset()
         $('#ModalSCC').modal('show')
          document.getElementById("BienSoXe").value=this.cells[1].innerHTML
          changvalue()
          timeSuaChua()
          
          
      }}
      }
  
  
  
  function KhoangSCChang(){
    var json2 = {
        KhoangSuaChua: $('#KhoangSuaChua').val()
      }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
 
  }

  function CoVanChange(){
    var json2 = {
      CoVanDichVu: $('#CoVanDichVu').val()
      }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
 
  }

  function RuaXechange(){
    var json2 = {
      KhachRuaXe: $('#KhachRX').val()
      }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
 
  }
  function KTV1change(){
    var json2 = {
        KyThuatVien1: $('#KyThuatVien1').val()
      }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  
  }
  function KTV2change(){
    var json2 = {KyThuatVien2: $('#KyThuatVien2').val()}
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")

  }
  function Nhomchange(){
    var json2 = {KyThuatVien2: $('#KyThuatVien2').val()}
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  }
  function KetThuc(){
        var TThaiXuong
        if(document.getElementById("KhachRX").value=="Rửa Xe"){TThaiXuong="06 Chờ Rửa Xe"}else{TThaiXuong="08 Chờ Giao Xe"}
            var json2 = {
                TimeEndGJ: TimesClick(),
                TrangThaiSCC:"Đã SC",
                TrangThaiXuong:TThaiXuong,
                BaiDauXe:"Rửa Xe"
                }
        $("#mesenge").html('<div class="alert alert-warning" role="alert">Đang Dừng CV!</div>')
        postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
        $('#ModalSCC').modal('hide')
        $('#RuaXeModal').modal('show')
  }
  
  function Khongruaxe(){
    var json2 = {
      TrangThaiXuong:"08 Chờ Giao Xe",
      KhachRuaXe: "Không Rửa"
      }
      setTimeout($('#RuaXeModal').modal('hide'), 3000);
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
    }
    
    function Coruaxe(){
      var json2 = {
        TrangThaiXuong:"06 Chờ Rửa Xe",
        KhachRuaXe: "Rửa Xe"
        }
      postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
      setTimeout($('#RuaXeModal').modal('hide'), 3000);
   
    }
  
  

  

  
  function DungCongViecGJ(){
    var json2 = {
          TimeStopGJ: TimesClick(),
          TrangThaiSCC:"Dừng CV",
          TrangThaiXuong: "05 Dừng Công Việc",
        }

  $("#mesenge").html('<div class="alert alert-warning" role="alert">Đang Dừng CV!</div>')
  postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  }
  function BatDauSC(){
    if(document.getElementById("KyThuatVien1").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert"> Chưa Có Tên KTV!</div>');return false}
    if(document.getElementById("GioKetThucSC").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert">Chưa Có Thời Gian Sữa Chữa!</div>'); return false}
    if(document.getElementById("KhoangSuaChua").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert"> Chưa Có Khoang Làm Việc!</div>');return false}
    if(document.getElementById("CoVanDichVu").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert"> Chưa Có Cố Vấn!</div>');return false}
        var json2 = {

          TimeStartGJ: TimesClick(),
          TrangThaiSCC:"Đang SC",
          TrangThaiXuong: "05 Đang Sửa Chữa",
          KhoangSuaChua: $('#KhoangSuaChua').val() ,
          TimeEndGJ: $('#GioKetThucSC').val(),
          KyThuatVien1  :$('#KyThuatVien1').val() ,
          KyThuatVien2  :$('#KyThuatVien2').val() ,
          NhomKTV:$('#NhomKTV').val(),
          BaiDauXe :$('#KhoangSuaChua').val(),
        }
 
  var ojb =  useCaher 
      for(var a in ojb){
      if(ojb[a].MaSo ==  document.getElementById("MaSo").value){   
        if(ojb[a].TDKetThucTiepKhach){   }else{json2["TDKetThucTiepKhach"]=TimesClick();}
        if(ojb[a].KhachRuaXe){$('#RuaXeModal').modal('show')}
        if(ojb[a].TDHenGiaoXe){   }else{json2["TDHenGiaoXe"]=TimesClick(new Date(1000 * 60 * 29 + (new Date(DoiNgayDangKy($('#GioKetThucSC').val()))).valueOf()));}
      }
    }
  
  $("#mesenge").html('<div class="alert alert-warning" role="alert">Đang Cập Nhật!</div>')
  postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH") 
  }
  
  
  function KeHoach(){
    if(document.getElementById("KyThuatVien1").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert"> Chưa Có Tên KTV!</div>');return false}
     if(document.getElementById("KhoangSuaChua").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert"> Chưa Có Khoang Làm Việc!</div>');return false}
        
     
     var json2 = {
          TimeStartGJ: TimesClick(getNexttime($('#KhoangSuaChua').val())),
          TrangThaiSCC:"Chờ SC",
          KhoangSuaChua: $('#KhoangSuaChua').val() ,
          TimeEndGJ: TimesClick(new Date(1000 * 60 * 45 + (new Date(getNexttime($('#KhoangSuaChua').val()))).valueOf())),
          KyThuatVien1  :$('#KyThuatVien1').val() ,
          KyThuatVien2  :$('#KyThuatVien2').val() ,
          NhomKTV:$('#NhomKTV').val(),
        }
  console.log()
  $("#mesenge").html('<div class="alert alert-warning" role="alert">Đang Cập Nhật!</div>')
  postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
    
  }

  function getNexttime(KhoangSC){
    var dataArray0 =   useCaher
    var dataArray1= dataArray0.filter(function(r){return (r.KhoangSuaChua===KhoangSC)})
    var time=new Date()
    var nexttime
      for(var a in dataArray1){
      var r=dataArray1[a]
      if(r.TrangThaiSCC!=="Dừng SC"){
        if((new Date(DoiNgayDangKy(r.TimeEndGJ))).valueOf()>time.valueOf()){time=new Date(DoiNgayDangKy(r.TimeEndGJ));
        }}
    }
    nexttime = time;
  return new Date(1000 * 60 * 2 + (new Date(nexttime)).valueOf())
  }
  function CapNhatGioSC(){
    if(document.getElementById("GioKetThucSC").value==""){$("#mesenge").html('<div class="alert alert-danger" role="alert">Chưa Có Thời Gian Sữa Chữa!</div>'); return false}
    var json2 = {
        TimeEndGJ: $('#GioKetThucSC').val(),
      }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
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
  NhomSC(NhomKTV)
  function NhomSC(values){
    var list = document.getElementById('NhomKTV');   
      for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        list.appendChild(option);
      }
  }
  function changeNhom(){
    var nhom = document.getElementById('NhomKTV').value
    var json2 = {
        NhomKTV: $('#NhomKTV').val()
      }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
    if(nhom =="Bạo"){NhanVienDropDown(KTVBao)}
    if(nhom =="Hoan"){NhanVienDropDown(KTVHoan)}
    if(nhom =="EM"){NhanVienDropDown(KTVEM)}
  }
  function NhanVienDropDown(values) { 	
  var list = document.getElementById('KyThuatVien1');  
  var option = document.createElement("option")
  list.innerHTML="" 
  option.value = "";
  option.text = "";
  list.appendChild(option)
      for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        list.appendChild(option);
      }


      var list2 = document.getElementById('KyThuatVien2'); 
      var option2 = document.createElement("option");
      list2.innerHTML=""  
      option2.value = "";
      option2.text = "";
      list2.appendChild(option2);
      for (var i = 0; i < values.length; i++) {
        var option2 = document.createElement("option");
        option2.value = values[i];
        option2.text = values[i];
        list2.appendChild(option2);
      }
  }
  KhoangSuaChua(KhoangSC) 
  function KhoangSuaChua(values) { 	
     var list = document.getElementById('KhoangSuaChua');   
      for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        list.appendChild(option);
      }
  } 
  CoVanlist(NhomCV)
  function CoVanlist(values) { 	
    var list = document.getElementById('CoVanDichVu');   
     for (var i = 0; i < values.length; i++) {
       var option = document.createElement("option");
       option.value = values[i];
       option.text = values[i];
       list.appendChild(option);
     }
 }  
  function GioKetThucSCC(){
     var homnay=new Date()
      homnay = new Date (homnay*1+7*60*60*1000)
      homnay = homnay.toJSON()
      homnay = homnay.slice(0,homnay.length -5)
      if(document.getElementById("GioBatDauSCC").value==0){
        document.getElementById("GioBatDauSCC").value=TimesClick(homnay)}
    var hh = new Date(homnay)
    var TGianSuaChua =  document.getElementById("inputThoiGianSCC").value
    var div = Math.trunc(TGianSuaChua/8);
    var TGDu = TGianSuaChua-div*8
    var GioBatDau = hh.getHours()
    var  NgayHoanThanh = new Date(hh*1+div*24*60*60*1000) 
    if(TGDu<4){TGDu = TGDu}else{TGDu = TGDu*1+1}
    NgayHoanThanh = new Date(NgayHoanThanh*1+TGDu*60*60*1000)
    if(NgayHoanThanh.getHours()>=17){NgayHoanThanh =new Date(NgayHoanThanh*1+15*60*60*1000)}
    if(NgayHoanThanh.getHours()==12){NgayHoanThanh =new Date(NgayHoanThanh*1+60*60*1000)}
    if(NgayHoanThanh.getDay()==0){ NgayHoanThanh =new Date(NgayHoanThanh*1+24*60*60*1000)}
    NgayHoanThanh=new Date(NgayHoanThanh*1+7*60*60*1000)
    var aa = NgayHoanThanh.toJSON()
    var bb = aa.slice(0,aa.length -5)
    document.getElementById("GioKetThucSC").value=TimesClick(bb)
   return bb
  }
  
  function timeSuaChua(){
      var timeBD = new Date(document.getElementById("GioBatDauSCC").value)
      var timeKT =  new Date(document.getElementById("GioKetThucSC").value)
      var time = timeKT-timeBD
      document.getElementById("inputThoiGianSCC").value = time/(60*60*1000)
      document.getElementById("rangerThoiGianSCC").value = time/(60*60*1000)
      }
  function changvalue(){
      var ojb =  useCaher
   
      for(var a in ojb){
      $("#mesenge").html("<div class='alert alert-success'>Hello!!</div>")
          if(ojb[a].BienSoXe == BienSoXe.value){
      if(ojb[a].TDHenGiaoXe){$("#mesenge").html("<div class='alert alert-success'>Giờ Giao Xe : "+datevalue(DoiNgayDangKy(ojb[a].TDHenGiaoXe))+"</div>")} 
      if(ojb[a].MaSo){	document.getElementById("MaSo").value = ojb[a].MaSo}
      if(ojb[a].TrangThaiXuong){document.getElementById("TrangThai").value = ojb[a].TrangThaiXuong} 
      if(ojb[a].NhomKTV){document.getElementById("NhomKTV").value = ojb[a].NhomKTV;changeNhom()}  
      if(ojb[a].CoVanDichVu){document.getElementById("CoVanDichVu").value = ojb[a].CoVanDichVu}
      if(ojb[a].KhoangSuaChua){document.getElementById("KhoangSuaChua").value =ojb[a].KhoangSuaChua}
      if(ojb[a].TimeStartGJ){document.getElementById("GioBatDauSCC").value =TimesClick(DoiNgayDangKy(ojb[a].TimeStartGJ))} 
      if(ojb[a].TimeEndGJ){document.getElementById("GioKetThucSC").value =TimesClick(DoiNgayDangKy(ojb[a].TimeEndGJ))}
      if(ojb[a].KyThuatVien1){document.getElementById("KyThuatVien1").value =ojb[a].KyThuatVien1}
      if(ojb[a].KyThuatVien2){document.getElementById("KyThuatVien2").value =ojb[a].KyThuatVien2}
      if(ojb[a].KhachRuaXe){document.getElementById("KhachRX").value =ojb[a].KhachRuaXe}
      if(ojb[a].TrangThaiSCC=="Đang SC"){ $("#buttonSCC").html('<button  type="button" class="btn btn-danger me-2" onclick="DungCongViecGJ()">Dừng CV!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="KetThuc()">Kết Thúc!</button>')
         return    }else{ $("#buttonSCC").html('<button  type="button" class="btn btn-success me-2" onclick="BatDauSC()">Bắt Đầu!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="KeHoach()">Kế Hoạch!</button>');        return}
        return
          }
      }
  }
  function datevalue(value){
  var NgayHoanThanh=new Date(value)
        NgayHoanThanh=new Date(NgayHoanThanh*1+7*60*60*1000)
        var aa = NgayHoanThanh.toJSON()
        var bb = aa.slice(0,aa.length -5)
  return bb
  }
  
  
  var slider = document.getElementById("rangerThoiGianSCC");
  var output = document.getElementById("inputThoiGianSCC");
  output.value = slider.value;
  slider.oninput = function() {
  output.value = this.value/6;
  GioKetThucSCC()
  }
  
  function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data-table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "none";
        } else {
          tr[i].style.display = "";
        }
      }
    }
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
  
          $('#GioBatDauSCC').datetimepicker({
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
    function DoiNgayDangKy(ngayhen){
        var aa=""
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
      const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

 var recognition = new SpeechRecognition();
recognition.onaudioend = function() {
  
      console.log('Audio capturing ended');
    }
      recognition.continuous = false;
      recognition.lang = 'vi-VN';
      recognition.interimResults = true;
      //recognition.maxAlternatives = 1;

	function start(){
    document.getElementById('textbienso').innerHTML="";
		recognition.onresult = function(event) { 
                var value =  event.results[0][0].transcript;
           
                document.getElementById('bStart').innerHTML="Stop"
                 //document.getElementById('textbienso').innerHTML=suabiensospeech(value)
                for(i in useCaher2){
                   var a = suabiensospeech(useCaher2[i].BienSoXe).indexOf(suabiensospeech(value))
                  if(a>0){
                      document.getElementById('FormSCC').reset()
                      $('#ModalSCC').modal('show')
                      document.getElementById("BienSoXe").value=useCaher2[i].BienSoXe
                      changvalue()
                      timeSuaChua()
                      recognition.stop() 
                  }
                } recognition.stop()
               
              }
		recognition.start();
	}
  


  function suabiensospeech(myValue) {
    var myValue2 = myValue.toUpperCase()
    myValue = myValue2.replaceAll (" ","")
    myValue = myValue.replaceAll (".","")
    myValue = myValue.replaceAll ("-","")  
        
        return myValue;
  } 
