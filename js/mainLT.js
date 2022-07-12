var useCaher,useCaher2={}
var emailnhanvienhen = "quipham@toyotavungtau.com";
var urlTX = "https://fluffy-iris-selenium.glitch.me/XeTrongXuong"
var urlDG = "https://fluffy-iris-selenium.glitch.me/XeDaGiao"

//getData(urlTX).then(DanhSachCoVan()).then(loadData ())
setInterval(function (){getData(urlTX)},60000);
getData(urlTX)
DanhSachCoVan2()
function getData(url){
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    useCaher=data
    showData()
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
    document.getElementById("myForm").reset()
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
     for (var i = 0; i < values.length; i++) {
       var option = document.createElement("option");
       option.value = values[i];
       option.text = values[i];
       list.appendChild(option);
     }
     }
   

function getValueALL(){
    var use={
        MaSo : MaSo.value,
        BienSoXe: BienSoXe.value,
        TenKH : TenKH.value,
        SoThe: SoThe.value,
        TrangThaiHen : document.getElementById("TrangThaiHen").value,
        LoaiHinhSuaChua : LoaiHinh.value,
        LoaiHinhDongSon : LoaiHinhBP.value,
        TDGapLeTan:TimesClick(),
        TrangThaiXuong:"02 Chờ Tiếp Nhận",
        CoVanDichVu : CoVanDichVu.value}
        if(LoaiHinh.value){use["TrangThaiSCC"]="Chờ SC"}else{use["TrangThaiSCC"]=""}
        if(LoaiHinhBP.value){use["CongDoanDongSon"]="Chờ SC";
        use["TrangThaiDongSon"]="Chờ SC";}else{use["CongDoanDongSon"]="";
        use["TrangThaiDongSon"]=""}
  return use
  }
  
  function DangKy(){
    if($("#TenKH").val()==""){$("#mesenge").html("<div class='alert alert-danger'>Chưa Có Tên KH</div>");return false}
    if($("#SoThe").val()==""){$("#mesenge").html("<div class='alert alert-danger'>Chưa Số Thẻ</div>");return false}
    if($("#LoaiHinh").val()==""&&$("#LoaiHinhBP").val()==""){$("#mesenge").html("<div class='alert alert-danger'>Chưa Loại Hình</div>");return false}
    if($("#CoVan").val()==""){$("#mesenge").html("<div class='alert alert-danger'>Chưa Chọn Cố Vấn</div>");return false}
    $("#mesenge").html("<div class='alert alert-success'><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div>Đang Đăng Ký</div>")
   if(checkID($(MaSo).val())){ 
    postData(getValueALL(),urlTX+"/"+checkID($(MaSo).val()),"PATCH")
   }else{postData(getValueALL(),urlTX,"POST")}
   
    
  }
  function ChuanBi(){
     $("#mesenge").html("<div class='alert alert-success'><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div>Đang Chuyển Trạng Thái</div>")
     var use={
        TrangThaiXuong:"02 Chuẩn Bị Tiếp"
        }
     postData(use,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
     
  }
  function ChoTiepNhan(){
     $("#mesenge").html("<div class='alert alert-success'><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div>Đang Chuyển Trạng Thái</div>")
     var use={
        TrangThaiXuong:"02 Chờ Tiếp Nhận"
        }
     postData(use,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  }
  function DangTiepNhan(){
    $("#mesenge").html("<div class='alert alert-success'><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div>Đang Chuyển Trạng Thái</div>")
    var use={
       TrangThaiXuong:"03 Đang Tiếp Nhận",
       TDBDTiepKhach:TimesClick()
       }
    postData(use,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
 }
  function HuyDK(){
     $("#mesenge").html("<div class='alert alert-success'><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div>Đang Hủy</div>")
     var MaSo = $('#MaSo').val()
     var ojb =  useCaher
     var json2 
       for(var a in ojb){
       if(ojb[a].MaSo == MaSo){json2 = ojb[a]}}
       $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxIfaWmzDpVW3erjRGP6y-da5aEOKaG5tKrQYz-wrqSpHKqPU0zNqsc_BUxZ-bhEnKL/exec",
        method: "GET",
        mode: 'no-cors',
        dataType: "json",
        data: json2
    });
       console.log(json2)
       var data2=json2
        delete data2.id
       postData(data2,urlDG,"POST")
       deleteData(urlTX+"/"+json2.id )
  }
  function CapNhat(){
     $("#mesenge").html("<div class='alert alert-success'><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div>Đang Cập Nhật</div>")
     var use={
        MaSo : MaSo.value,
        BienSoXe: BienSoXe.value,
        TenKH : TenKH.value,
        SoThe: SoThe.value,
        TrangThaiHen : document.getElementById("TrangThaiHen").value,
        LoaiHinhSuaChua : LoaiHinh.value,
        LoaiHinhDongSon : LoaiHinhBP.value,
        TrangThaiXuong:"02 Chờ Tiếp Nhận",
        CoVanDichVu : CoVanDichVu.value}
        if(LoaiHinh.value){use["TrangThaiSCC"]="Chờ SC"}else{use["TrangThaiSCC"]=""}
        if(LoaiHinhBP.value){use["CongDoanDongSon"]="Chờ SC";
        use["TrangThaiDongSon"]="Chờ SC";}else{use["CongDoanDongSon"]="";
        use["TrangThaiDongSon"]=""}
     postData(use,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  }
  
  
  
  function changvalue(){
      var ojb =  useCaher
    getValueALL()
    NutNhan.innerHTML="";
    document.getElementById("MaSo").value = TaoMaSo()+BienSoXe.value;
     $("#mesenge").html("<div class='alert alert-success'>Hello!!</div>")
     NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="DangKy()" >Đăng Ký</button>'
      for(var a in ojb){
      NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="DangKy()" >Đăng Ký</button>'
          if(ojb[a].BienSoXe == BienSoXe.value){
        document.getElementById("BienSoXe").value = ojb[a].BienSoXe
      if(ojb[a].MaSo){	document.getElementById("MaSo").value = ojb[a].MaSo}
      if(ojb[a].CoVanDichVu){	document.getElementById("CoVanDichVu").value = ojb[a].CoVanDichVu}
      if(ojb[a].LoaiHinhDongSon){	document.getElementById("LoaiHinhBP").value = ojb[a].LoaiHinhDongSon}
      if(ojb[a].LoaiHinhSuaChua){	document.getElementById("LoaiHinh").value = ojb[a].LoaiHinhSuaChua}
      if(ojb[a].ThoiGianHen){document.getElementById("GioHen").value = Doingay(DoiNgayDangKy( ojb[a].ThoiGianHen))}
      if(ojb[a].CoVanDichVu){document.getElementById("CoVanDichVu").value = ojb[a].CoVanDichVu;}
      if(ojb[a].NoiDungHen){	document.getElementById("NoiDungCV").value = ojb[a].NoiDungHen}
      if(ojb[a].TenKH){	document.getElementById("TenKH").value = ojb[a].TenKH}
      if(ojb[a].SoThe){	document.getElementById("SoThe").value = ojb[a].SoThe}
      if(ojb[a].ThoiGianHen){ document.getElementById("TrangThaiHen").value =  TrangThaiHen(ojb[a].ThoiGianHen)   }
      if(ojb[a].TrangThaiXuong){	document.getElementById("ThongTin").value = ojb[a].TrangThaiXuong}
      NutNhan.innerHTML = ''
      if(ojb[a].TrangThaiXuong=="00 Có Hẹn"||ojb[a].TrangThaiXuong=="01 Đã Vào Cổng"){NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="DangKy()" >Đăng Ký</button>';}
      if(ojb[a].TrangThaiXuong=="02 Chuẩn Bị Tiếp"){NutNhan.innerHTML ='<button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>&emsp;<button type="button" class="btn btn-primary" onclick="ChoTiepNhan()" >Chờ Tiếp Nhận</button>&emsp; <button type="button" class="btn btn-danger" onclick="HuyDK()" >Hủy TN</button>';}
       if(ojb[a].TrangThaiXuong=="02 Chờ Tiếp Nhận"){NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>&emsp;<button type="button" class="btn btn-primary" onclick="ChuanBi()" >Chuẩn Bị Tiếp</button>&emsp;<button type="button" class="btn btn-danger" onclick="HuyDK()" >Hủy TN</button>';}
       if(ojb[a].MaSo!==TaoMaSo()+ojb[a].BienSoXe){NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="DangKy()" >Đăng Ký</button>';
       document.getElementById("SoThe").value = "";
       
       }
      return
          }
      }
  }
  
  
  
       //---------------------------------------------------------------------------------------------
    function showData(){
           // tieude.innerHTML = "Cố Vấn "+ Doingay()
    var dataArray =  useCaher
    var dataArray0= dataArray.filter(function(r){return ((r.TrangThaiXuong==="02 Chờ Tiếp Nhận"||r.TrangThaiXuong==="02 Chuẩn Bị Tiếp"||r.TrangThaiXuong==="03 Đang Tiếp Nhận"))})
    
   dataArray0=  dataArray0.sort(function(a, b) {return (new Date(DoiNgayDangKy(a.ThoiGianHen)).valueOf()> new Date(DoiNgayDangKy(b.ThoiGianHen)).valueOf() ? 1 : -1);}) 
    dataArray0= dataArray0.sort(function(a, b) {return (a.TrangThaiXuong.toLowerCase() > b.TrangThaiXuong.toLowerCase() ? 1 : -1);})
    var tbodyTim = document.getElementById('table-body-Tim-xe')
     tbodyTim.innerHTML=""
  
    dataArray0.forEach(function(r){
       var row = document.createElement("tr"); 
        var BienSo = document.createElement("td");
          BienSo.innerHTML = r.BienSoXe
          if(r.TrangThaiHen=="Đúng Giờ"){ BienSo.innerHTML = "[H] "+r.BienSoXe}
          if(r.TrangThaiHen=="Đến Trễ"){ BienSo.innerHTML = "[T] "+r.BienSoXe}
          if(r.TrangThaiHen=="Đến Sớm"){ BienSo.innerHTML = "[S] "+r.BienSoXe}
          if(r.TrangThaiHen=="Không Đúng Hẹn"){ BienSo.innerHTML = "[h] "+r.BienSoXe}
               
                row.appendChild(BienSo);
        var SoThe = document.createElement("td");
                SoThe.innerHTML = r.SoThe
                row.appendChild(SoThe);
       var TenKH = document.createElement("td");
                TenKH.innerHTML = r.TenKH
                row.appendChild(TenKH); 
        var GioHen = document.createElement("td");
                if(r.ThoiGianHen){GioHen.innerHTML =  Doingay(DoiNgayDangKy(r.ThoiGianHen) )}else{GioHen.innerHTML =""}
                row.appendChild(GioHen);  
        var LHGJ = document.createElement("td");
                 if(r.LoaiHinhSuaChua){ LHGJ.innerHTML = r.LoaiHinhSuaChua}else{LHGJ.innerHTML =""}
                row.appendChild(LHGJ);
        var LHBP = document.createElement("td");
                 if(r.LoaiHinhDongSon){ LHBP.innerHTML = r.LoaiHinhDongSon}else{LHBP.innerHTML =""}
                row.appendChild(LHBP); 
        var CoVan = document.createElement("td");
                 if(r.CoVanDichVu){ CoVan.innerHTML = r.CoVanDichVu}else{CoVan.innerHTML =""}
                row.appendChild(CoVan);           
        var trangtx = document.createElement("td");
                 if(r.TrangThaiXuong=="02 Chờ Tiếp Nhận"){ trangtx.innerHTML = "Chờ Tiếp Nhận";row.setAttribute('class', 'ChoTiepNhan')}
                else if(r.TrangThaiXuong=="02 Chuẩn Bị Tiếp"){ trangtx.innerHTML = "Chuẩn Bị Tiếp";row.setAttribute('class', 'SapTiepNhan')}
                else if(r.TrangThaiXuong=="03 Đang Tiếp Nhận"){ trangtx.innerHTML = "Đang Tiếp Nhận";row.setAttribute('class', 'DangTiepNhan')}
                else {trangtx.innerHTML =""}
                row.appendChild(trangtx);
        var TGCHO = document.createElement("td");
                 if(r.TrangThaiXuong=="02 Chờ Tiếp Nhận"){TGCHO.innerHTML= Math. round((new Date().valueOf()- new Date(DoiNgayDangKy( r.TDGapLeTan)).valueOf())/(60*1000)*1)/1}
                 if(r.TrangThaiXuong=="02 Chuẩn Bị Tiếp"){TGCHO.innerHTML= Math. round((new Date().valueOf()- new Date(DoiNgayDangKy( r.TDGapLeTan)).valueOf())/(60*1000)*1)/1}
                 if(r.TrangThaiXuong=="03 Đang Tiếp Nhận"){TGCHO.innerHTML= Math. round((new Date().valueOf()- new Date(DoiNgayDangKy( r.TDBDTiepKhach)).valueOf())/(60*1000)*1)/1}
                row.appendChild(TGCHO); 
  
        var MaSo = document.createElement("td");
                 if(r.MaSo){ MaSo.innerHTML = r.MaSo}else{MaSo.innerHTML =""}
                row.appendChild(MaSo);                                                   
       tbodyTim.appendChild(row)
        
    })
             
    var dataArrayhen= dataArray.filter(function(r){return ((r.TrangThaiXuong==="00 Có Hẹn"))})
   dataArrayhen=  dataArrayhen.sort(function(a, b) {return (a.ThoiGianHen.toLowerCase() > b.ThoiGianHen.toLowerCase() ? 1 : -1);})  
  var tbodyhen = document.getElementById('table-body-hen')
     tbodyhen.innerHTML=""
   dataArrayhen.forEach(function(r){
       var row = document.createElement("tr"); 
       var GioHen = document.createElement("td");
                if(r.ThoiGianHen){GioHen.innerHTML =  Doingay(DoiNgayDangKy( r.ThoiGianHen))}else{GioHen.innerHTML =""}
                row.appendChild(GioHen); 
        var BienSo = document.createElement("td");
                BienSo.innerHTML = r.BienSoXe
                row.appendChild(BienSo);
        var TenKH = document.createElement("td");
                TenKH.innerHTML = r.TenKH
                row.appendChild(TenKH);  
        var CoVan = document.createElement("td");
                 if(r.CoVanDichVu){ CoVan.innerHTML = r.CoVanDichVu}else{CoVan.innerHTML =""}
                row.appendChild(CoVan);        
        var LHGJ = document.createElement("td");
                 if(r.LoaiHinhSuaChua){ LHGJ.innerHTML = r.LoaiHinhSuaChua}else{LHGJ.innerHTML =""}
                row.appendChild(LHGJ);
        var LHBP = document.createElement("td");
                 if(r.LoaiHinhDongSon){ LHBP.innerHTML = r.LoaiHinhDongSon}else{LHBP.innerHTML =""}
                row.appendChild(LHBP); 
          var NoiDungCV = document.createElement("td");
                 if(r.NoiDungHen){ NoiDungCV.innerHTML = r.NoiDungHen}else{NoiDungCV.innerHTML =""}
                row.appendChild(NoiDungCV); 
          var MaSo = document.createElement("td");
            if(r.MaSo){ MaSo.innerHTML = r.MaSo}else{MaSo.innerHTML =""}
          row.appendChild(MaSo);  
           tbodyhen.appendChild(row)                      
         })
         
    }
  
  
  
  function clickTableTiepNhan(){
      var table = document.getElementById('data-table');
      for(var i = 1; i < table.rows.length; i++){table.rows[i].onclick = function(){
      var BienSoXe = this.cells[0].innerHTML;
      $("#mesenge").html("<div class='alert alert-success'>Hello!!</div>")
       NutNhan.innerHTML ="";NutNhan2.innerHTML =""
        document.getElementById("myForm").reset();
      document.getElementById("MaSo").value = this.cells[9].innerHTML;
      if(BienSoXe.indexOf(" ")!=(-1)){
      document.getElementById("BienSoXe").value = BienSoXe.slice(BienSoXe.indexOf(" ")+1,BienSoXe.length)}
      else{ document.getElementById("BienSoXe").value=this.cells[0].innerHTML}
      document.getElementById("SoThe").value = this.cells[1].innerHTML;
      document.getElementById("TenKH").value = this.cells[2].innerHTML;
      document.getElementById("GioHen").value = this.cells[3].innerHTML;
      document.getElementById("LoaiHinh").value = this.cells[4].innerHTML;
      document.getElementById("LoaiHinhBP").value = this.cells[5].innerHTML;
      document.getElementById("CoVanDichVu").value = this.cells[6].innerHTML;
      changvalue()
      if(this.cells[7].innerHTML=="Chờ Tiếp Nhận"){
      NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>&emsp;<button type="button" class="btn btn-primary" onclick="ChuanBi()" >Chuẩn Bị Tiếp</button>'
      NutNhan2.innerHTML = '<button type="button" class="btn btn-success" onclick="DangTiepNhan()" >Bắt Đầu Tiếp Khách</button>&emsp;<button type="button" class="btn btn-danger" onclick="HuyDK()" >Hủy TN</button>'
    }
      if(this.cells[7].innerHTML=="Chuẩn Bị Tiếp"){
      NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>&emsp;<button type="button" class="btn btn-primary" onclick="ChoTiepNhan()" >Chờ Tiếp Nhận</button>'
      NutNhan2.innerHTML = '<button type="button" class="btn btn-success" onclick="DangTiepNhan()" >Bắt Đầu Tiếp Khách</button>&emsp;<button type="button" class="btn btn-danger" onclick="HuyDK()" >Hủy TN</button>'
    }
      }}
      }
  function clickTableTiepNhanHen(){
      var table = document.getElementById('data-table-hen');
      $("#mesenge").html("<div class='alert alert-success'>Hello!!</div>")
      for(var i = 1; i < table.rows.length; i++){table.rows[i].onclick = function(){
            document.getElementById("myForm").reset();
            NutNhan.innerHTML =""
            document.getElementById("BienSoXe").value=this.cells[1].innerHTML
            document.getElementById("GioHen").value=this.cells[0].innerHTML
            document.getElementById("LoaiHinh").value = this.cells[4].innerHTML;
            document.getElementById("CoVanDichVu").value = this.cells[3].innerHTML;
            document.getElementById("TenKH").value = this.cells[2].innerHTML;
            document.getElementById("NoiDungCV").value = this.cells[5].innerHTML;
            document.getElementById("MaSo").value = this.cells[7].innerHTML;
            changvalue()
      NutNhan.innerHTML = '<button type="button" class="btn btn-primary" onclick="DangKy()" >Đăng Ký</button>'
    
      }}
  
  
      }
  
  
  function TrangThaiHen(NgayHen){ 
        var TDhen = new Date(DoiNgayDangKy( NgayHen))
        var DenSom = (TDhen.getTime() - new Date().getTime())/(60*1000)
        var DenTre = (new Date().getTime()-TDhen.getTime() )/(60*1000)
        var TrangThaiHen="Không Có Hẹn"
        if((DenSom>=0&&DenSom<=30)||(DenTre>=0&&DenTre<=0)){TrangThaiHen="Đúng Giờ"}
        if(DenSom <=60&&DenSom>30){TrangThaiHen="Đến Sớm"}
        if(DenTre <=60&&DenTre>0){TrangThaiHen="Đến Trễ"}
        if(DenSom >60||DenTre>60){TrangThaiHen="Không Đúng Hẹn"}
  return TrangThaiHen
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
  function CoVanDropDown(values) { 	
     var list = document.getElementById('CoVanDichVu');   
      for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        list.appendChild(option);
      }
  } 
  function BienSoDropDown() { 
      var values = useCaher.map(function (r){return  r.BienSoXe})
      var list = document.getElementById('BienSoList')
    list.innerHTML="";   
      for (var i = 0; i < values.length; i++) {
      if (values[i]!=undefined){
          var option = document.createElement("option");
          option.value = values[i];
          option.text = values[i];
          list.appendChild(option);}
      }
  } 
  function TaoMaSo(){
     var  use=new Date();
      var useinfo = {}
      var Thang =use.getMonth()+1;
      var Ngay = use.getDate();
      var Nam = use.getFullYear();var Gio = use.getHours();
      var Phut = use.getMinutes();
      if (Thang<10){Thang="0"+Thang};
      if (Ngay<10){Ngay="0"+Ngay};
      if (Gio<10){Gio="0"+Gio};
       if (Phut<10){Phut="0"+Phut};useinfo.ThoiGian = Ngay+"/"+Thang+" "+Gio+":"+Phut;
       var MaSo = "TVT"+Nam+Thang+Ngay+"_"
       return MaSo;
      }
      function Doingay(use){
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
      var ThoiGian = Ngay+"/"+Thang+" "+Gio+":"+Phut
      return ThoiGian
   }
