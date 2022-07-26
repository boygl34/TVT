var useCaher,useCaher2={}
var emailnhanvienhen = "quipham@toyotavungtau.com";
var urlTX = "https://fluffy-iris-selenium.glitch.me/XeTrongXuong"
var urlDG = "https://fluffy-iris-selenium.glitch.me/XeDaGiao"

setInterval(function (){getData(urlTX)},60000);
getData(urlTX)

 
function getData(url){
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    useCaher=data
    loadData ()
    
    //dataTableTimXe()
  } );
}
function ajaxRequest(params) {
  var urlTX = "https://fluffy-iris-selenium.glitch.me/XeTrongXuong"
  setInterval(function (){$.get(urlTX + '?' + $.param(params.data))
    .then(function (res) {
      var res= res.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn")})
    params.success(res)
    SetTrangThai()
  })},5000);
  
}

function SetTrangThai(){
  var table = document.getElementById('table-TimXe');
  for(var i = 1; i < table.rows.length; i++){
    
    if(table.rows[i].cells[4].innerHTML=="Đang SC"){table.rows[i].setAttribute("class","DangSuaChua")}
    if(table.rows[i].cells[4].innerHTML=="Chờ SC"){table.rows[i].setAttribute("class","ChoSuaChua")}
    if(table.rows[i].cells[4].innerHTML=="Dừng SC"){table.rows[i].setAttribute("class","DungSuaChua")}
  }
  }


BANGTIENDO(localStorage.getItem("BangTD"))
function postData(data,url,methor){
    fetch(url, {
    method: methor, // or 'PUT'
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    getData(urlTX)
    $("#alert").html("<div class='alert alert-success'>Thành Công</div>")
    //document.getElementById("FormDS").reset() 
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



function dataTableTimXe(){  
    var dataArray0 =   useCaher
  var dataArray1= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Đang SC")})
  var dataArray2= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Chờ SC"&&r.CongDoanDongSon!=="Chờ SC")})
  var dataArray3= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Dừng SC")})
  var dataArray4= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Chờ SC"&&r.CongDoanDongSon==="Chờ SC")})
  var dataArray5= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Chờ Giao"&&r.CongDoanDongSon==="QC")})
   var dataArray= dataArray1.concat(dataArray2);dataArray.sort()
       dataArray=dataArray.concat(dataArray3);
       dataArray=dataArray.concat(dataArray4);
       dataArray=dataArray.concat(dataArray5);
   if(document.getElementById("NhomFilter").value==="Đồng"){
    dataArray1= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Đang SC"&&r.CongDoanDongSon==="Đồng")});
    dataArray2= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Đang SC"&&r.CongDoanDongSon==="Lắp Ráp")});
    dataArray3= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Chờ SC"&&r.CongDoanDongSon==="Lắp Ráp")});
    dataArray4= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Dừng SC"&&r.CongDoanDongSon==="Đồng")});
    dataArray5= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Dừng SC"&&r.CongDoanDongSon==="Lắp Ráp")});
    dataArray6= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Chờ SC"&&r.CongDoanDongSon==="Chờ SC")});
  dataArray= dataArray1.concat(dataArray2);
  dataArray= dataArray.concat(dataArray3);
  dataArray= dataArray.concat(dataArray4);
  dataArray= dataArray.concat(dataArray5);
  dataArray= dataArray.concat(dataArray6);
   }
   dataArray.sort(function(a, b) {return (a.TrangThaiXuong.toLowerCase() > b.TrangThaiXuong.toLowerCase() ? 1 : -1);})
    var tbodyTim = document.getElementById('table-body-Tim-xe')
     var BienSolisst = document.getElementById('BienSoXeList'); 
     BienSolisst.innerHTML=""
    tbodyTim.innerHTML=""
    var option = document.createElement("option");
  
    option.value ="";
    option.text = "";
    BienSolisst.appendChild(option);
      dataArray.forEach(function(r){
       
  var option = document.createElement("option");
  
      option.value =r.BienSoXe;
      option.text = r.BienSoXe;
      BienSolisst.appendChild(option);
          var tbodyTim = document.getElementById('table-body-Tim-xe')
          var row = document.createElement("tr"); 
          var ColRating = document.createElement("td");
          var ColBS = document.createElement("td");
          var ColCV = document.createElement("td");
          var ColKTV = document.createElement("td");
          var ColNhomSon = document.createElement("td");
          var ColNR = document.createElement("td");
          var ColTienDo = document.createElement("td");
          var ColTGTX = document.createElement("td");
          var ColNgayGiao = document.createElement("td");
          var ColNgayKT = document.createElement("td");
          //ColMS.innerHTML = r.MaSo;
          ColBS.textContent = r.BienSoXe;
         var timeGT= Math. round((new Date().valueOf()-new Date(DoiNgayDangKy( r.TDKetThucTiepKhach)).valueOf())/(60*1000*60*24)*10)/10
         // ColTGTX.textContent=timeGT
          ColNgayGiao.textContent = ngayGiohen(DoiNgayDangKy( r.TDHenGiaoXe))
          if(r.TDKetThucSX){ColNgayKT.textContent = ngayGiohen(DoiNgayDangKy( r.TDKetThucSX))}else{ColNgayKT.textContent=""}
          ColCV.textContent = r.CoVanDichVu;
          ColNhomSon.textContent = r.NhomSon;
          ColKTV.textContent = "";
           if(new Date(DoiNgayDangKy( r.TDKetThucSX)).valueOf()>new Date(DoiNgayDangKy(r.TDHenGiaoXe)).valueOf()){  ColTGTX.textContent ="["+timeGT+"] " ;}else{ ColTGTX.textContent = timeGT}
          if(r.CongDoanDongSon=="Đồng"){ColKTV.textContent = r.KyThuatVienDong;}
          if(r.CongDoanDongSon=="Nền"){ColKTV.textContent = r.KyThuatVienNen;}
          if(r.CongDoanDongSon=="Sơn"){ColKTV.textContent = r.KyThuatVienSon;}
          if(r.CongDoanDongSon=="Pass"){ColKTV.textContent = r.KyThuatVienPass;}
          if(r.CongDoanDongSon=="Lắp Ráp"){ColKTV.textContent = r.KyThuatVienLap;}
          ColRating.innerHTML = Chenraiting(r.BienSoXe)
          ColTienDo.innerHTML = chentimeline(r.BienSoXe)
          if(r.CongDoanDongSon=="QC"){ColRating.innerHTML = '<i class="fa fa-star  fa-1x fa-fw BigStar" aria-hidden="true"></i>'}
          if(r.TrangThaiDongSon=="Đang SC"){row.setAttribute('class', 'DangSuaChua');}
          if(r.TrangThaiDongSon=="Chờ SC"&&r.CongDoanDongSon!="Chờ SC"){row.setAttribute('class', 'ChoSuaChua');}
          if(r.TrangThaiDongSon=="Dừng SC"){row.setAttribute('class', 'DungSuaChua');}
          if(r.CongDoanDongSon=="Chờ SC"){row.setAttribute('class', 'ChuaSuaChua');}
         // row.appendChild(ColMS); 
            row.appendChild(ColBS);
            row.appendChild(ColCV); 
            row.appendChild(ColNhomSon);
            row.appendChild(ColKTV);
            row.appendChild(ColTGTX);
            row.appendChild(ColNgayGiao);
            row.appendChild(ColNgayKT);
            row.appendChild(ColTienDo);
            row.appendChild(ColRating);
            tbodyTim.appendChild(row)
          
          if(document.getElementById("NhomFilter").value){ myFunctionNhom()}else if(document.getElementById("CoVanFilter").value){myFunctionCoVan()}else if(document.getElementById("selection").value){myFunctionBienSo()}
           sortTable()
      })
}
function changvalue(){
    $("#alert").html("<div class='alert alert-success'>Hello!!</div>")
   var ojb =  useCaher
      for(var a in ojb){
      if(ojb[a].BienSoXe == BienSoXe.value){
      
        $("#biensods").html(ojb[a].BienSoXe+" "+ojb[a].CongDoanDongSon+ " "+ojb[a].TrangThaiDongSon)
        if(ojb[a].TDHenGiaoXe){ $("#alert").html("<div class='alert alert-success'>Ngày Giao Xe : "+datevalue(DoiNgayDangKy(ojb[a].TDHenGiaoXe)).replace("T"," ")+"</div>") }
      if(ojb[a].MaSo){	document.getElementById("MaSo").value = ojb[a].MaSo} 
      if(ojb[a].NhomSon){document.getElementById("NhomSon").value =ojb[a].NhomSon}
      if(ojb[a].KieuXe){document.getElementById("KieuXe").value =ojb[a].KieuXe}
      tennhanvien(ojb[a].CongDoanDongSon,ojb[a].NhomSon)
      if(ojb[a].CongDoanDongSon){document.getElementById("CongDoanDongSon").value =ojb[a].CongDoanDongSon
                 if(ojb[a].CongDoanDongSon=="Đồng"){
                        if(ojb[a].KyThuatVienDong){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienDong}
                        if(ojb[a].TimeStartBody){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartBody))}
                        if(ojb[a].TimeEndBody){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndBody))}
                 }
                  if(ojb[a].CongDoanDongSon=="Nền"){
                        if(ojb[a].KyThuatVienNen){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienNen}
                        if(ojb[a].TimeStartNen){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartNen))}
                        if(ojb[a].TimeEndNen){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndNen))}
                 }
                 if(ojb[a].CongDoanDongSon=="Sơn"){
                        if(ojb[a].KyThuatVienSon){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienSon}
                        if(ojb[a].TimeStartPaint){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartPaint))}
                        if(ojb[a].TimeEndPaint){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndPaint))}
                 }
                 if(ojb[a].CongDoanDongSon=="Lắp Ráp"){
                        if(ojb[a].KyThuatVienLap){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienLap}
                        if(ojb[a].TimeStartLap){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartLap))}
                        if(ojb[a].TimeEndLap){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndLap))}
                 }
                 if(ojb[a].CongDoanDongSon=="Pass"){
                        if(ojb[a].KyThuatVienPass){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienPass}
                        if(ojb[a].TimeStartPass){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartPass))}
                        if(ojb[a].TimeEndPass){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndPass))}
                 }
                              }
      if(ojb[a].PhongSon){document.getElementById("PhongSon").value =ojb[a].PhongSon}
      if(ojb[a].TrangThaiDongSon){document.getElementById("TrangThaiDongSon").value =ojb[a].TrangThaiDongSon}
        CongDoanDongSon(ojb[a].CongDoanDongSon,ojb[a].TrangThaiDongSon)
        
        return
          }
  }
  }
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table-TimXe");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[5];
      y = rows[i + 1].getElementsByTagName("TD")[5];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function Chenraiting(BienSo){
 var DivHTLM = "<div>"
 var dataArray =  useCaher
    for(var a=0;a<dataArray.length;a++){
      var r = dataArray[a]
        if(dataArray[a].BienSoXe==BienSo){
              if(r.CongDoanDongSon=="Đồng"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTDong=="Okie"){
              DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTDong=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTDong==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}

              if(r.CongDoanDongSon=="Nền"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTNen=="Okie"){
              DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTNen=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTNen==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}
              
              if(r.CongDoanDongSon=="Sơn"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTSon=="Okie"){
              DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTSon=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTSon==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}

              if(r.CongDoanDongSon=="Lắp Ráp"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTLap=="Okie"){
              DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTLap=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTLap==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}
            
            if(r.CongDoanDongSon=="Pass"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTPass=="Okie"){
              DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTPass=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTPass==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}
            
            return DivHTLM 
        }
    }
}
function chentimeline(BienSo){
  var dataArray = useCaher
   for(var a=0;a<dataArray.length;a++){
      var r = dataArray[a];
      var timeNow=new Date
       if(r.BienSoXe==BienSo){
         if(r.CongDoanDongSon=="Đồng"&&r.TrangThaiDongSon=="Đang SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TimeStartBody)))/(new Date(DoiNgayDangKy(r.TimeEndBody))- new Date(DoiNgayDangKy(r.TimeStartBody)))*100
           return  addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
         if(r.CongDoanDongSon=="Nền"&&r.TrangThaiDongSon=="Đang SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TimeStartNen)))/(new Date(DoiNgayDangKy(r.TimeEndNen))- new Date(DoiNgayDangKy(r.TimeStartNen)))*100
             return addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
         if(r.CongDoanDongSon=="Sơn"&&r.TrangThaiDongSon=="Đang SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TimeStartPaint)))/(new Date(DoiNgayDangKy(r.TimeEndPaint))- new Date(DoiNgayDangKy(r.TimeStartPaint)))*100
            return addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
         if(r.CongDoanDongSon=="Pass"&&r.TrangThaiDongSon=="Đang SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TimeStartPass)))/(new Date(DoiNgayDangKy(r.TimeEndPass))- new Date(DoiNgayDangKy(r.TimeStartPass)))*100
            return addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
         if(r.CongDoanDongSon=="Lắp Ráp"&&r.TrangThaiDongSon=="Đang SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TimeStartLap)))/(new Date(DoiNgayDangKy(r.TimeEndLap))- new Date(DoiNgayDangKy(r.TimeStartLap)))*100
            return  addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
         if(r.TrangThaiDongSon=="Chờ SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)))/(new Date(DoiNgayDangKy(r.TDHenGiaoXe))- new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)))*100
            return  addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
           if(r.TrangThaiDongSon=="Dừng SC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TimeStopBP)))/(new Date(DoiNgayDangKy(r.TDHenGiaoXe))- new Date(DoiNgayDangKy(r.TimeStopBP)))*100
         
            return  addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
         if(r.CongDoanDongSon=="QC"){
          var time = (timeNow- new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)))/(new Date(DoiNgayDangKy(r.TDHenGiaoXe))- new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)))*100
            return  addtimeline( Math.round(time),r.CongDoanDongSon,r.TrangThaiDongSon)
         }
        
    }
  }
}

function addtimeline(value,CongDoan,TrangThai){
var Div 
if(value<75){
  Div = '<div class="progress " style="height: 25px;" ><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width:'+value+'%; color: yellow;" aria-valuemin="0" aria-valuemax="100">'+CongDoan+' '+TrangThai  +'  '+value+'%</div></div>'
}else{
Div='<div class="progress " style="height: 25px;" ><div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width:'+value+'%;"" aria-valuemin="0" aria-valuemax="100">'+CongDoan+' '+TrangThai  +'  '+value+'%</div></div>'

}
return Div

}

function CongDoanDongSon(congdoan,trangthai){
        $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartDong()">Bắt Đầu Đồng!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="StartNen()">Bắt Đầu Nền!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="StartPass()">Bắt Đầu Pass!</button>')

        if(trangthai=="Chờ Pass"){$("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartPass()">Bắt Đầu Pass!</button>')}
        if(trangthai=="Chờ Lắp"){$("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartLap()">Bắt Đầu Lắp!</button>')}
        if(trangthai=="Chờ Sơn"){$("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartSon()">Bắt Đầu Sơn!</button>')}
        if(trangthai=="Chờ Nền"){$("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartNen()">Bắt Đầu Nền!</button>')}
        if(trangthai=="Chờ QC"){$("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartQC()">Bắt Đầu QC!</button>')}

        if(trangthai=="Đang SC"&&congdoan=="Đồng"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="WaitNen()">Chờ Nền!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="WaitQC()">Chờ QC!</button>')}
        if(trangthai=="Đang SC"&&congdoan=="Nền"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="WaitSon()">Chờ Sơn!</button>')}
        if(trangthai=="Đang SC"&&congdoan=="Sơn"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="WaitLap()">Chờ Lắp!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="WaitPass()">Chờ Pass!</button>')}
        if(trangthai=="Đang SC"&&congdoan=="Pass"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="WaitLap()">Chờ Lắp!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="WaitQC()">Chờ QC!</button>')}
        if(trangthai=="Đang SC"&&congdoan=="Lắp Ráp"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="WaitPass()">Chờ Pass!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="WaitQC()">Chờ QC!</button>')}
        if(trangthai=="Đang SC"&&congdoan=="QC"){ $("#ButEnd").html('<button type="button"id="bnt-ChoGiaoXe" class="btn btn-success" onclick="KetThucQC()">Kết Thúc QC</button>')}

        if(trangthai=="Dừng SC"&&congdoan=="Đồng"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartDong()">Bắt Đầu Đồng!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="WaitQC()">Chờ QC!</button>')}
        if(trangthai=="Dừng SC"&&congdoan=="Nền"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartNen()">Bắt Đầu Nền!</button>')}
        if(trangthai=="Dừng SC"&&congdoan=="Sơn"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartSon()">Bắt Đầu Sơn!</button>')}
        if(trangthai=="Dừng SC"&&congdoan=="Pass"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartPass()">Bắt Đầu Pass!</button>&nbsp &nbsp <button  type="button" class="btn btn-primary me-2" onclick="WaitQC()">Chờ QC!</button>')}

        if(trangthai=="Chờ SC"&&congdoan=="Đồng"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartDong()">Bắt Đầu Đồng!</button>')}
        if(trangthai=="Chờ SC"&&congdoan=="Nền"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartNen()">Bắt Đầu Nền!</button>')}
        if(trangthai=="Chờ SC"&&congdoan=="Sơn"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartSon()">Bắt Đầu Sơn!</button>')}
        if(trangthai=="Chờ SC"&&congdoan=="Pass"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartPass()">Bắt Đầu Pass!</button>')}
        if(trangthai=="Chờ SC"&&congdoan=="Lắp Ráp"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartLap()">Bắt Đầu Lắp!</button>')}
        if(trangthai=="Chờ SC"&&congdoan=="QC"){ $("#ButEnd").html('<button  type="button" class="btn btn-primary me-2" onclick="StartQC()">Bắt Đầu QC!</button>')}
}


function ChangCongDoan(CongDoan){
    var ojb =  useCaher
    document.getElementById("KTVDS1").value ="";
    document.getElementById("NgayBDSC").value ="";
    document.getElementById("NgayKTSC").value ="";
    for(var a in ojb){
    if(ojb[a].MaSo ==  document.getElementById("MaSo").value){   
    tennhanvien(CongDoan,ojb[a].NhomSon)
        if(CongDoan=="Đồng"){
                if(ojb[a].KyThuatVienDong){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienDong}
                if(ojb[a].TimeStartBody){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy( ojb[a].TimeStartBody))}
                if(ojb[a].TimeEndBody){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndBody))}
        }
        if(CongDoan=="Nền"){
                if(ojb[a].KyThuatVienNen){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienNen}
                if(ojb[a].TimeStartNen){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartNen))}
                if(ojb[a].TimeEndNen){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndNen))}
        }
        if(CongDoan=="Sơn"){
                if(ojb[a].KyThuatVienSon){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienSon}
                if(ojb[a].TimeStartPaint){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartPaint))}
                if(ojb[a].TimeEndPaint){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndPaint))}
        }
        if(CongDoan=="Lắp Ráp"){
                if(ojb[a].KyThuatVienLap){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienLap}
                if(ojb[a].TimeStartLap){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartLap))}
                if(ojb[a].TimeEndLap){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndLap))}
        }
        if(CongDoan=="Pass"){
                if(ojb[a].KyThuatVienPass){document.getElementById("KTVDS1").value =ojb[a].KyThuatVienPass}
                if(ojb[a].TimeStartPass){document.getElementById("NgayBDSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeStartPass))}
                if(ojb[a].TimeEndPass){document.getElementById("NgayKTSC").value =datevalue(DoiNgayDangKy(ojb[a].TimeEndPass))}
        }
                    
    if(ojb[a].PhongSon){document.getElementById("PhongSon").value =ojb[a].PhongSon}
    return
    }
    }
}

function StartDong(){
    if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
 var timehientai = new Date().valueOf()
 var timeKT= new Date(document.getElementById("NgayKTSC").value).valueOf()
 if(timehientai>timeKT){$("#alert").html('<div class="alert alert-warning" role="alert" >Sai Gio Ket Thuc</div>');return false}
     var json2 = {
         KyThuatVienDong: $('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeStartBody: TimesClick() ,
         TimeEndBody: TimesClick(new Date().valueOf()+chieudaichip),
         CongDoanDongSon  :"Đồng" ,
         BaiDauXe  :"KV Đồng" ,
         HTDong  :"KH" ,
         TrangThaiDongSon :"Đang SC",
       }

   $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
     postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
     
 
 }
 function StartNen(){
    if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
    var timehientai = new Date().valueOf()
 var timeKT= new Date(document.getElementById("NgayKTSC").value).valueOf()
 if(timehientai>timeKT){$("#alert").html('<div class="alert alert-warning" role="alert" >Sai Gio Ket Thuc</div>');return false}  
    var json2 = {
         KyThuatVienNen: $('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeStartNen: TimesClick() ,
         TimeEndNen:  TimesClick(new Date().valueOf()+chieudaichip),
         CongDoanDongSon  :"Nền" ,
         BaiDauXe  :"KV Sơn" ,
         HTNen  :"KH" ,
         TrangThaiDongSon :"Đang SC",
       }
   $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
   postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
     
 }
 function StartSon(){
  if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
  var timehientai = new Date().valueOf()
  var timeKT= new Date(document.getElementById("NgayKTSC").value).valueOf()
  if(timehientai>timeKT){$("#alert").html('<div class="alert alert-warning" role="alert" >Sai Gio Ket Thuc</div>');return false}
    if(document.getElementById("PhongSon").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Phòng Sơn</div>');return false}
      var json2 = {
  
         KyThuatVienSon: $('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeStartPaint: TimesClick() ,
         TimeEndPaint:  TimesClick(new Date().valueOf()+chieudaichip),
         CongDoanDongSon  :"Sơn" ,
         BaiDauXe  :$('#PhongSon').val() ,
         HTSon  :"KH" ,
         TrangThaiDongSon :"Đang SC",
       }
     
  $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
     postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 
 }
 function StartLap(){
 
    if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
    var timehientai = new Date().valueOf()
    var timeKT= new Date(document.getElementById("NgayKTSC").value).valueOf()
    if(timehientai>timeKT){$("#alert").html('<div class="alert alert-warning" role="alert" >Sai Gio Ket Thuc</div>');return false}
   var json2 = {
         KyThuatVienLap: $('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeStartLap: TimesClick() ,
         TimeEndLap:  TimesClick(new Date().valueOf()+chieudaichip),
         CongDoanDongSon  :"Lắp Ráp" ,
         BaiDauXe  :"KV Đồng" ,
         HTLap  :"KH" ,
         TrangThaiDongSon :"Đang SC",
       }

   $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
   postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 
    
 }
 function StartPass(){
   if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
   var timehientai = new Date().valueOf()
   var timeKT= new Date(document.getElementById("NgayKTSC").value).valueOf()
   if(timehientai>timeKT){$("#alert").html('<div class="alert alert-warning" role="alert" >Sai Gio Ket Thuc</div>');return false}
   var json2 = {
         KyThuatVienPass: $('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeStartPass: TimesClick() ,
         TimeEndPass: TimesClick(new Date().valueOf()+chieudaichip),
         CongDoanDongSon  :"Pass" ,
         BaiDauXe  :"Pass" ,
         HTPass  :"KH" ,
         TrangThaiDongSon :"Đang SC",
       }

   $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
   postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
    
   
 }
 function StartQC(){
    var json2 = {
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeStartQC: TimesClick() ,
         TimeEndQC: TimesClick(document.getElementById("NgayKTSC").value),
         CongDoanDongSon  :"QC" ,
         TrangThaiDongSon :"Đang SC",
       }

 $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
 postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 }
 function WaitNen(){
     var json2 = {
         KyThuatVienDong:$('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeEndBody: TimesClick() ,
         CongDoanDongSon  :"Nền" ,
         HTDong  :"Okie" ,
         TrangThaiDongSon :"Chờ SC",
       }

 $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
 postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 }
 function WaitSon(){
   var json2 = {
         KyThuatVienNen:$('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeEndNen: TimesClick() ,
         CongDoanDongSon  :"Sơn" ,
          HTNen  :"Okie" ,
         TrangThaiDongSon :"Chờ SC",
       }

 $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
 postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")     
 }
 function WaitPass(){
    $("#alert").html("<div class='alert alert-warning '>Đang Cập Nhật</div>")
   if(document.getElementById("CongDoanDongSon").value=="Sơn"){ 
     var json2 = {
         KyThuatVienSon:$('#KTVDS1').val(),
         TrangThaiXuong: "05 Đang Sửa Chữa",
         TimeEndPaint: TimesClick() ,
         CongDoanDongSon  :"Pass" ,
           HTSon  :"Okie" ,
         TrangThaiDongSon :"Chờ SC",
       }
     }
   if(document.getElementById("CongDoanDongSon").value=="Lắp Ráp"){
       var json2 = {
                   KyThuatVienLap:$('#KTVDS1').val(),
                   TrangThaiXuong: "05 Đang Sửa Chữa",
                   TimeEndPaint: TimesClick() ,
                   CongDoanDongSon  :"Pass" ,
                   HTLap  :"Okie" ,
                   TrangThaiDongSon :"Chờ SC",
                 }
               }
     $("#alert").html("<div class='alert alert-warning'>Đang Cập Nhật 2</div>")
     postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 }
 function WaitLap(){
    
   if(document.getElementById("CongDoanDongSon").value=="Sơn"){
       var json2 = {
                       KyThuatVienSon:$('#KTVDS1').val(),
                   TrangThaiXuong: "05 Đang Sửa Chữa",
                   TimeEndPaint: TimesClick() ,
                   CongDoanDongSon  :"Lắp Ráp" ,
                    HTSon  :"Okie" ,
                   TrangThaiDongSon :"Chờ SC",
                 }
               }
 
   if(document.getElementById("CongDoanDongSon").value=="Pass"){
       var json2 = {
                   KyThuatVienPass:$('#KTVDS1').val(),
                   TrangThaiXuong: "05 Đang Sửa Chữa",
                   TimeEndPass: TimesClick() ,
                   CongDoanDongSon  :"Lắp Ráp" ,
                   HTPass  :"Okie" ,
                   TrangThaiDongSon :"Chờ SC",
                 }
               }  
 $("#alert").html("<div class='alert alert-warning ger'>Đang Cập Nhật 2</div>")
 postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
  
 }
 function WaitQC(){
   if(document.getElementById("CongDoanDongSon").value=="Sơn"){  
         var json2 = {
                   KyThuatVienSon:$('#KTVDS1').val(),
                   TrangThaiXuong: "05 Đang Sửa Chữa",
                   TimeEndPaint: TimesClick() ,
                    HTSon  :"Okie" ,
                   CongDoanDongSon  :"QC" ,
                   TrangThaiDongSon :"Chờ SC",
                 }
               }
   if(document.getElementById("CongDoanDongSon").value=="Đồng"){  
     var json2 = {
                   KyThuatVienDong:$('#KTVDS1').val(),
                   TrangThaiXuong: "05 Đang Sửa Chữa",
                   TimeEndBody: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                    HTDong  :"Okie" ,
                   TrangThaiDongSon :"Chờ SC",
                 }
               }

   if(document.getElementById("CongDoanDongSon").value=="Pass"){
     var json2 = {

                   KyThuatVienPass:$('#KTVDS1').val(),
                   TrangThaiXuong: "05 Đang Sửa Chữa",
                   TimeEndPass: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                    HTPass  :"Okie" ,
                   TrangThaiDongSon :"Chờ SC",
                 }
               }

 $("#alert").html("<div class='alert alert-warning '>Đang Cập Nhật</div>")    
 postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 }
 function ChoGiaoXeBP(){
    $("#alert").html("<div class='alert alert-warning '>Đang Cập Nhật</div>")
        var json2 = {
      
                   TrangThaiXuong: "08 Chờ Giao Xe",
                   TimeEndPaint: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                   TrangThaiDongSon :"Chờ Giao",
                 }
               
     
 
     if(document.getElementById("CongDoanDongSon").value=="Sơn"){  
       var json2 = {
     
                   KyThuatVienSon:$('#KTVDS1').val(),
                   TrangThaiXuong: "08 Chờ Giao Xe",
                   TimeEndPaint: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                    HTSon  :"Okie" ,
                   TrangThaiDongSon :"Chờ Giao",
                 }
               }
        
  
   
   if(document.getElementById("CongDoanDongSon").value=="Đồng"){  
       var json2 = {
     
                   KyThuatVienDong:$('#KTVDS1').val(),
                   TrangThaiXuong: "08 Chờ Giao Xe",
                   TimeEndBody: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                    HTDong  :"Okie" ,
                   TrangThaiDongSon :"Chờ Giao",
                 }
               }

   if(document.getElementById("CongDoanDongSon").value=="Pass"){
     var json2 = {
     
                   KyThuatVienPass:$('#KTVDS1').val(),
                   TrangThaiXuong: "08 Chờ Giao Xe",
                   TimeEndPass: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                    HTPass  :"Okie" ,
                   TrangThaiDongSon :"Chờ Giao",
                 }
                }
 $("#alert").html("<div class='alert alert-warning '>Đang Cập Nhật</div>")    
 postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
 
 }
 
 
 function KetThucQC(){
   var json2 = {
                   KyThuatVienPass:$('#KTVDS1').val(),
                   TrangThaiXuong: "08 Chờ Giao Xe",
                   TimeEndQC: TimesClick() ,
                   CongDoanDongSon  :"QC" ,
                   TrangThaiDongSon :"Chờ Giao",
                 }
   
    $("#alert").html("<div class='alert alert-warning '>Đang Cập Nhật</div>") 
    postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")     
     
 }
 function DungCongviecBP(){
    var json2 = {
                   TrangThaiXuong: "05 Dừng Công Việc",
                   TimeStopBP: TimesClick() ,
                   TrangThaiDongSon :"Dừng SC",
                 }
                
   $("#alert").html("<div class='alert alert-warning '>Đang Dừng CV</div>")
   postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")   
    
 }
 function LuuKeHoach(){
   if($('#ThoiGSCD').val()==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Thời gian sc</div>');return false}
    if($('#PhongSon').val()==""){$('#PhongSon').val("Phòng Sơn 1")}
   var CongDoan = document.getElementById("CongDoanDongSon").value
   var ThoiGianSC = $('#ThoiGSCD').val()
   var json2 = {}; 
   var timebatdaudong = getNexttimeDong($('#KTVDS1').val())
 if(timebatdaudong.getHours()>16){timebatdaudong = new Date(1000 * 60 * 60*24  + (new Date(timebatdaudong).valueOf()));timebatdaudong.setHours(8)}
   var timeketthucdong = new Date(1000 * 60 * 60*ThoiGianSC  + (new Date(timebatdaudong).valueOf()))
   var timebatdaunen =  new Date(1000 * 60 * 5  + (new Date(timeketthucdong).valueOf()))
   if(timebatdaunen.getHours()>16){timebatdaunen = new Date(1000 * 60 * 60*24  + (new Date(timebatdaunen).valueOf()));timebatdaunen.setHours(8)}
   var timeketthucnen =  new Date(1000 * 60 * 60*ThoiGianSC  + (new Date(timebatdaunen).valueOf()))
   var timebatdauson =  new Date(1000 * 60 * 5  + (new Date(timeketthucnen).valueOf()))
   if(timebatdauson.getHours()>16){timebatdauson = new Date(1000 * 60 * 60*24  + (new Date(timebatdauson).valueOf()));timebatdauson.setHours(8)}
   var timeketthucson =  new Date(1000 * 60 * 60*ThoiGianSC  + (new Date(timebatdauson).valueOf()))
   var timebatdaulap =  new Date(1000 * 60 * 5  + (new Date(timeketthucson).valueOf()))
   if(timebatdaulap.getHours()>16){timebatdaulap = new Date(1000 * 60 * 60*24  + (new Date(timebatdaulap).valueOf()));timebatdaulap.setHours(8)}
   var timeketthuclap =  new Date(1000 * 60 * 60*ThoiGianSC  + (new Date(timebatdaulap).valueOf()))
   var timebatdaupass =  new Date(1000 * 60 * 5  + (new Date(timeketthuclap).valueOf()))
   if(timebatdaupass.getHours()>16){timebatdaupass = new Date(1000 * 60 * 60*24  + (new Date(timebatdaupass).valueOf()));timebatdaupass.setHours(8)}
   var timeketthucpass =  new Date(1000 * 60 * 60*ThoiGianSC  + (new Date(timebatdaupass).valueOf()))
 if($('#LoaiSC').val()=="DongSon"){
   if($('#PhongSon').val()==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Phòng Sơn</div>');return false}
   if($('#NhomSon').val()==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Nhóm Sơn</div>');return false}
   if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
   json2["KyThuatVienDong"]=$('#KTVDS1').val();
   json2["HTDong"]="KH";
   json2["TimeStartBody"]=TimesClick(timebatdaudong);
   json2["TimeEndBody"]=TimesClick(timeketthucdong)
   json2["HTNen"]="KH";
   json2["TimeStartNen"]=TimesClick(timebatdaunen);
   json2["TimeEndNen"]=TimesClick(timeketthucnen)
   json2["HTSon"]="KH";
   json2["TimeStartPaint"]=TimesClick(timebatdauson);
   json2["TimeEndPaint"]=TimesClick(timeketthucson)
   json2["PhongSon"]=$('#PhongSon').val()
   json2["KyThuatVienLap"]=$('#KTVDS1').val();
   json2["HTLap"]="KH";
   json2["TimeStartLap"]=TimesClick(timebatdaulap);
   json2["TimeEndLap"]=TimesClick(timeketthuclap)
   json2["HTPass"]="KH";
   json2["TimeStartPass"]=TimesClick(timebatdaupass)
   json2["TimeEndPass"]=TimesClick(timeketthucpass)
   json2["TDKetThucSX"]=TimesClick(timeketthucpass)
   }
   else if($('#LoaiSC').val()=="Dong"){
       if(document.getElementById("KTVDS1").value==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Tên KTV</div>');return false}
       json2["KyThuatVienDong"]=$('#KTVDS1').val();
       json2["HTDong"]="KH";
       json2["TimeStartBody"]=TimesClick(timebatdaudong);
       json2["TimeEndBody"]=TimesClick(timeketthucdong)
       json2["TDKetThucSX"]=TimesClick(timeketthucdong)
   }else if($('#LoaiSC').val()=="Son"){
       if($('#PhongSon').val()==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Phòng Sơn</div>');return false}
       if($('#NhomSon').val()==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Nhóm Sơn</div>');return false}
       json2["HTNen"]="KH";
       json2["TimeStartNen"]=TimesClick(timebatdaudong);
       json2["TimeEndNen"]=TimesClick(timeketthucdong)
       json2["HTSon"]="KH";
       json2["TimeStartPaint"]=TimesClick(timebatdaunen);
       json2["TimeEndPaint"]=TimesClick(timeketthucnen)
       json2["PhongSon"]=$('#PhongSon').val()
       json2["KyThuatVienLap"]=$('#KTVDS1').val();
       json2["HTPass"]="KH";
       json2["TimeStartPass"]=TimesClick(timebatdaulap)
       json2["TimeEndPass"]=TimesClick(timeketthuclap)
       json2["TDKetThucSX"]=TimesClick(timeketthuclap)
   }else if($('#LoaiSC').val()=="Pass"){
       if($('#NhomSon').val()==""){$("#alert").html('<div class="alert alert-warning" role="alert" >Chưa Có Nhóm Sơn</div>');return false}
       json2["HTPass"]="KH";
       json2["TimeStartPass"]=TimesClick(timebatdaudong)
       json2["TimeEndPass"]=TimesClick(timeketthucdong)
       json2["TDKetThucSX"]=TimesClick(timeketthucdong)
       }
   
   
   $("#alert").html("<div class='alert alert-warning '>Đang Lưu Kế Hoạch</div>")
 
   postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")    
    
 }
 function getNexttimeDong(KTV){
      var dataArray0 =   useCaher
      var dataArray1= dataArray0.filter(function(r){return (r.KyThuatVienDong===KTV)})
      var time=new Date()
      var nexttime
        for(var a in dataArray1){
        var r=dataArray1[a]
        if(r.TrangThaiDongSon!=="Dừng SC"){
          if((new Date(DoiNgayDangKy(r.TimeEndBody))).valueOf()>time.valueOf()){time=new Date(DoiNgayDangKy(r.TimeEndBody));
          }}
      }
      nexttime = time;
    return new Date(1000 * 60 * 2 + (new Date(nexttime)).valueOf())
    }


 function getNexttimeNen(MaSo){
        var dataArray0 =   useCaher
        var dataArray1= dataArray0.filter(function(r){return (r.MaSo===MaSo)})
        var time=new Date()
        var nexttime
          for(var a in dataArray1){
          var r=dataArray1[a]
            if((new Date(DoiNgayDangKy(r.TimeEndBody))).valueOf()>time.valueOf()){time=new Date(DoiNgayDangKy(r.TimeEndBody));
            }
        }
      nexttime = time;
      return new Date(1000 * 60 * 2 + (new Date(nexttime)).valueOf())
      }


 function getNexttimeSon(MaSoxe){
   var dataArray0 =   useCaher
    var dataArray1= dataArray0.filter(function(r){return (r.MaSo===MaSoxe)})
   var time=new Date()
   var nexttime
     for(var a in dataArray1){
     var r=dataArray1[a]
      if((new Date(DoiNgayDangKy(r.TimeEndNen))).valueOf()>time.valueOf()){time=new Date(DoiNgayDangKy(r.TimeEndNen));
      }
   }
 nexttime = time;
 return new Date(1000 * 60 * 2 + (new Date(nexttime)).valueOf())
 }



 function getNexttimeLap(MaSoxe){
   var dataArray0 =   useCaher
   var dataArray1= dataArray0.filter(function(r){return (r.MaSo===MaSoxe)})
   var time=new Date()
   var nexttime
     for(var a in dataArray1){
     var r=dataArray1[a]
      if((new Date(DoiNgayDangKy(r.TimeEndPaint))).valueOf()>time.valueOf()){time=new Date(DoiNgayDangKy(r.TimeEndPaint));
      }
   }
 nexttime = time;
 return new Date(1000 * 60 * 2 + (new Date(nexttime)).valueOf())
 }


 function getNexttimePass(MaSoxe){
   var dataArray0 =   useCaher
   var dataArray1= dataArray0.filter(function(r){return (r.MaSo===MaSoxe)})
   var time=new Date()
   var nexttime
     for(var a in dataArray1){
     var r=dataArray1[a]
      if((new Date(DoiNgayDangKy(r.TimeEndLap))).valueOf()>time.valueOf()){time=new Date(DoiNgayDangKy(r.TimeEndLap));
      }
   }
 nexttime = time;
 return new Date(1000 * 60 * 2 + (new Date(nexttime)).valueOf())
 }
 


 function CapNhatGioSC(){
    $("#alert").html("<div class='alert alert-warning '>Đang Cập Nhật</div>")
     if($('#NgayKTSC').val()==""){$("#alert").html('<div class="alert alert-danger" role="alert">Chưa Có Thời Gian Sữa Chữa!</div>'); return false}
      if($('#CongDoanDongSon').val()=="Đồng"){ 
      var json2={"TimeEndBody" :TimesClick($('#NgayKTSC').val())}
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")}
      if($('#CongDoanDongSon').val()=="Nền"){
      var json2 = {"TimeEndNen"  : TimesClick($('#NgayKTSC').val()) }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")  }
      if($('#CongDoanDongSon').val()=="Sơn"){ 
      var json2={ "TimeEndPaint"  :TimesClick($('#NgayKTSC').val()) }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")  }
      if($('#CongDoanDongSon').val()=="Pass"){ 
      var json2 = {"TimeEndPass"  :TimesClick($('#NgayKTSC').val()) }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH")  }
      if($('#CongDoanDongSon').val()=="Lắp Ráp"){ 
      var json2 = {"TimeEndLap"  :TimesClick($('#NgayKTSC').val()) }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH") }
 }
 
       
 
 
 
   function GioKetThucBP(){
    var homnay=new Date()
     homnay = new Date (homnay*1+7*60*60*1000)
     homnay = homnay.toJSON()
     homnay = homnay.slice(0,homnay.length -5)
       document.getElementById("NgayBDSC").value=homnay
   var hh = new Date(document.getElementById("NgayBDSC").value)
   var TGianSuaChua =  document.getElementById("inputThoiGianBP").value
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
   document.getElementById("NgayKTSC").value=bb
  return bb
 }
 function timeSuaChua(){
   var homnay=new Date()
     homnay = new Date (homnay*1+7*60*60*1000)
     homnay = homnay.toJSON()
     homnay = homnay.slice(0,homnay.length -5)
     if(document.getElementById("NgayBDSC").value==0){
       document.getElementById("NgayBDSC").value=homnay
     }
 var timeBD = new Date(document.getElementById("NgayBDSC").value)
 var timeKT =  new Date(document.getElementById("NgayKTSC").value)
  var time = (timeKT-timeBD)/(60*60*1000)
  var div = Math.trunc(time/16);
  var TDdu = time-div*16
  document.getElementById("inputThoiGianBP").value = time
  document.getElementById("myRangeBP").value = time
 }
     var slider = document.getElementById("myRangeBP");
       var output = document.getElementById("inputThoiGianBP");
       output.value = slider.value;
       slider.oninput = function() {
       output.value = Math.round((this.value/6)*100)/100;
       GioKetThucBP()
 }

function NhomSonChange(){
  var json2 = {"NhomSon"  :$('#NhomSon').val() }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH") 
       
}
function PhongSonChange(){
  var json2 = {"PhongSon"  :$('#PhongSon').val() }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH") 
     
}
function KieuXeChange(){
  var json2 = {"KieuXe"  :$('#KieuXe').val() }
      postData(json2,urlTX+"/"+checkID($("#MaSo").val()),"PATCH") 
   
}

function clickTableTiepNhan(){
    var table = document.getElementById('table-TimXe');
    for(var i = 1; i < table.rows.length; i++){
      table.rows[i].onclick = function(){
        $("#buttonSCC").html('')
        document.getElementById('FormDS').reset()
       $('#ModalDongSon').modal('show')
        document.getElementById("BienSoXe").value=this.cells[0].innerHTML
        changvalue()
        timeSuaChua()
    }
    }
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

function tennhanvien(CongDoan,NhomSon){
  if(CongDoan==="Chờ SC"){NhanVienDropDown(KTVDongSon);}
      if(CongDoan==="Đồng"||CongDoan==="Lắp Ráp"){NhanVienDropDown(KTVDong);}
      if(CongDoan==="Nền"||CongDoan==="Sơn"||CongDoan==="Pass"){
        if(NhomSon==="Thành"){NhanVienDropDown(KTVSonThanh)}
        if(NhomSon==="Đình"){NhanVienDropDown(KTVSonDinh)}
        if(NhomSon==="Thiên"){NhanVienDropDown(KTVSonThien)}
      }
     
      }

function NhanVienDropDown(values) { 	
var list = document.getElementById('KTVDS1'); 
  var option = document.createElement("option");
     list.innerHTML=""
      option.value ="";
      option.text = "";
      list.appendChild(option);
         for (var i = 0; i < values.length; i++) { 
       option = document.createElement("option");    
      option.value = values[i];
      option.text = values[i];
      list.appendChild(option);
    }
}
CoVanDropDown()
function CoVanDropDown(values) { 
    var values = NhomCV	
// var list = document.getElementById('CoVanFilter');   
//     for (var i = 0; i < values.length; i++) {
//       var option = document.createElement("option");
//       option.value = values[i];
//       option.text = values[i];
//       list.appendChild(option);
//     }
    var list2 = document.getElementById('CoVanDK');   
    for (var i = 0; i < values.length; i++) {
      var option2 = document.createElement("option");
      option2.value = values[i];
      option2.text = values[i];
      list2.appendChild(option2);
    }
}
 nhonsonDropDown()

function nhonsonDropDown(values) { 
  
  var values = NhomSon	
var list = document.getElementById('NhomSonDK');   
  for (var i = 0; i < values.length; i++) {
    var option = document.createElement("option");
    option.value = values[i];
    option.text = values[i];
    list.appendChild(option);
  }
  
}

function KieuXeDropDown(values){
var list = document.getElementById('KieuXe');   
    for (var i = 0; i < values.length; i++) {
      var option = document.createElement("option");
      option.value = values[i];
      option.text = values[i];
      list.appendChild(option);
    }

}

function BienSoDropDown() { 
	
   var values= useCaher.Object.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn")})
   var values = values.map(function (r){return  r.BienSoXe})
	var list = document.getElementById('BienSoXeList')
  list.innerHTML="";   
	for (var i = 0; i < values.length; i++) {
    if (values[i]!=undefined){
		var option = document.createElement("option");
		option.value = values[i];
		option.text = values[i];
		list.appendChild(option);}
	}
} 
function changeNhom(){
  document.getElementById("CoVanFilter").value =""
  dataTableTimXe()
  myFunctionNhom()
}
function changeCoVan(){
  document.getElementById("NhomFilter").value =""
  myFunctionCoVan()
}

function myFunctionCoVan() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("CoVanFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("table-TimXe");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  } 
}
function myFunctionNhom() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("NhomFilter");
  if(input.value=="Đồng"){;return false}
  filter = input.value.toUpperCase();
  table = document.getElementById("table-TimXe");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function myFunctionBienSo() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("selection");
  if(input.value=="Đồng"){;return false}
  filter = input.value.toUpperCase();
  table = document.getElementById("table-TimXe");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

 function ngayGiohen(ngayhen){
     var  use=new Date(ngayhen)
    var Thang =use.getMonth()+1;
    var Ngay = use.getDate();
    var Nam = use.getFullYear();var Gio = use.getHours();
    var Phut = use.getMinutes();
    if (Thang<10){Thang="0"+Thang};
    if (Ngay<10){Ngay="0"+Ngay};
    if (Gio<10){Gio="0"+Gio};
     if (Phut<10){Phut="0"+Phut}
    var NgayThang = Ngay+"/"+Thang+"/"+Nam
     return Ngay+"/"+Thang+" "+ Gio+":"+Phut ;
 }

 var btn = document.getElementById("bnt-DangKy");

var DSDK = document.getElementById("BienSoDK");

DSDK.onchange =function(){
   var ojb =  useCaher
	for(var a in ojb){
    if(ojb[a].BienSoXe == $('#BienSoDK').val()){
    if( ojb[a].TDHenGiaoXe){document.getElementById("NgayGiaXeDK").value= TimesClick(ojb[a].TDHenGiaoXe)};
    if( ojb[a].CoVanDichVu){document.getElementById("CoVanDK").value= ojb[a].CoVanDichVu;}
    if(ojb[a].NhomSon){document.getElementById("NhomSonDK").value= ojb[a].NhomSon;}
    }
}

}



  btn.onclick = function() {
    try{
      document.getElementById("bnt-DangKy").disabled=true
    if(document.getElementById("BienSoDK").value==""){$("#alertDK").html('<div class="alert alert-warning" role="alert" >Chưa Có Biển Số</div>');return false}
    if(document.getElementById("NgayGiaXeDK").value==""){$("#alertDK").html('<div class="alert alert-warning" role="alert" >Chưa Có Ngày Giao</div>');return false}
    if(document.getElementById("CoVanDK").value==""){$("#alertDK").html('<div class="alert alert-warning" role="alert" >Chưa Có Cố Vấn</div>');return false}
   var ojb =  useCaher
   var MaSoNew =TaoMaSo()+$('#BienSoDK').val()
    for(var a in ojb){
      if(ojb[a].BienSoXe == $('#BienSoDK').val()){
      MaSoNew = ojb[a].MaSo
      }
    }
   var json2 = {
                  MaSo:MaSoNew,
                  BienSoXe:$('#BienSoDK').val(),
                  TrangThaiXuong: "04 Đã Tiếp Nhận",
                  LoaiHinhDongSon: "Đồng Sơn" ,
                  TrangThaiDongSon :"Chờ SC",
                  CongDoanDongSon :"Chờ SC",
                  CoVanDichVu :$('#CoVanDK').val(),
                  TDKetThucTiepKhach:TimesClick(),
                  TDHenGiaoXe : TimesClick(document.getElementById("NgayGiaXeDK").value),
                  NhomSon:$('#NhomSonDK').val()
                }
  $("#alertDK").html("<div class='alert alert-warning '>Đang Đăng Ký</div>") 

   document.getElementById("selection").value = $('#BienSoDK').val()

  if(checkID(MaSoNew)) {postData(json2,urlTX+"/"+checkID(MaSoNew),"PATCH") }else{postData(json2,urlTX,"POST")}
              }catch(erros){ alert(erros)

                 
              }finally{
                $("#alertDK").html("<div class='alert alert-success'>Dang Ky Thanh Cong</div>") 
                setTimeout(function(){ $('#ModalDangKy').modal('hide')},2000)
              }
}



 function showDangKy() {
    document.getElementById("bnt-DangKy").disabled=false
 $('#ModalDangKy').modal('show');
 $('#FormDK').trigger("reset");
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