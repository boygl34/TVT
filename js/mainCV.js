var useCaher,useCaher2={}
var emailnhanvienhen = "quipham@toyotavungtau.com";
var urlTX = "https://fluffy-iris-selenium.glitch.me/XeTrongXuong"
var urlDG = "https://fluffy-iris-selenium.glitch.me/XeDaGiao"
var TenCoVan = localStorage.getItem("Ten")
var PhanQuyen = localStorage.getItem("PhanQuyen")

setInterval(function (){getData(urlTX)},60000);
getData(urlTX)


function getData(url){
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    useCaher=data
    dataTableTiepNhan()
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
    $("#message").html("<div class='alert alert-success'>Thành Công</div>")
    document.getElementById("NutNhan").innerHTML = ""
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




function dataTableTiepNhan(){
    var CoHen=0,ChoTN=0,DangTN=0,DaTN=0,DangSC=0,ChoRX=0,DangRX=0,ChoGiao=0
      var dataArray0 =  useCaher
      var CoVan = TenCoVan;
      var dataArray= dataArray0.filter(function(r){return (r.CoVanDichVu===CoVan&&r.TrangThaiXuong!=="09 Đã Giao Xe")})
     // if(document.getElementById("TenCoVan").value==""){ dataArray= dataArray0.filter(function(r){return (r.TrangThaiXuong!=="09 Đã Giao Xe")})}
      var tbodyTim = document.getElementById('table-body')
      tbodyTim.innerHTML=""
        dataArray.forEach(function(r){
            var tbodyTim = document.getElementById('table-body')
            var row = document.createElement("tr"); 
            var ColBS = document.createElement("td");
            var ColCV = document.createElement("td");
            var ColTKH = document.createElement("td");
            var ColCD = document.createElement("td");
            var ColLHSCC = document.createElement("td");
            var ColLDDS = document.createElement("td");
            var ColRX = document.createElement("td");
            var ColKD = document.createElement("td");
            var ColNH = document.createElement("td");
            var ColGH = document.createElement("td");
            var ColTime = document.createElement("td");
            ColBS.textContent = r.BienSoXe;
            ColTKH.textContent = r.TenKH
            ColCV.textContent = r.CoVanDichVu
            ColLHSCC.textContent = r.LoaiHinhSuaChua
            ColLDDS.textContent = r.LoaiHinhDongSon
            ColRX.textContent = r.KhachRuaXe
            ColKD.textContent = r.KhachHangDoi
            if(r.TrangThaiXuong=="00 Có Hẹn"){ColCD.innerHTML = "Có Hẹn"}
         if(r.TrangThaiXuong=="02 Chờ Tiếp Nhận"){ColCD.innerHTML = "Chờ TN"
         row.setAttribute('class', 'ChoTiepNhan');}
         if(r.TrangThaiXuong=="02 Chuẩn Bị Tiếp"){ColCD.innerHTML = "CB Tiếp"
         row.setAttribute('class', 'SapTiepNhan')}
         if(r.TrangThaiXuong=="03 Đang Tiếp Nhận"){ColCD.innerHTML = "Đang TN"
         row.setAttribute('class', 'DangTiepNhan')}
         if(r.TrangThaiXuong=="04 Đã Tiếp Nhận"){ColCD.innerHTML = "Đã TN"
         row.setAttribute('class', 'DaTiepNhan')}
         if(r.TrangThaiXuong=="05 Đang Sửa Chữa"){ColCD.innerHTML = "Đang SC"
         row.setAttribute('class', 'DangSuaChua')}
         if(r.TrangThaiXuong=="05 Dừng Công Việc"){ColCD.innerHTML = "Dừng CV"
         row.setAttribute('class', 'DungCongViec'); }
         if(r.TrangThaiXuong=="06 Chờ Rửa Xe"){ColCD.innerHTML = "Chờ RX"
          row.setAttribute('class', 'DangTiepNhan');}
         if(r.TrangThaiXuong=="07 Đang Rửa Xe"){ColCD.innerHTML = "Đang RX"
         row.setAttribute('class', 'DangSuaChua');}
         if(r.TrangThaiXuong=="08 Chờ Giao Xe"){ColCD.innerHTML = "Chờ Giao"
         row.setAttribute('class', 'ChoGiaoXe');}
            //if( r.NgayHen){ColNH.textContent = r.NgayHen.slice(5,10)}else{ColNH.textContent =""}
            if(r.ThoiGianHen){  
            ColGH.textContent =Doingay(DoiNgayDangKy(r.ThoiGianHen))
            }else{ ColGH.textContent = ""}
            if(r.TrangThaiXuong=="02 Chờ Tiếp Nhận"){ColTime.innerHTML=Math.round((new Date()- new Date(DoiNgayDangKy(r.TDGapLeTan)) )/(60*60*1000)*10)/10 +" h"}
           if(r.TrangThaiXuong=="05 Đang Sửa Chữa"||r.TrangThaiXuong=="04 Đã Tiếp Nhận"||r.TrangThaiXuong=="08 Chờ Giao Xe"){ColTime.innerHTML=Doingay(DoiNgayDangKy(r.TDHenGiaoXe) )}
            row.appendChild(ColBS);
            if(CoVan==""){row.appendChild(ColCV);}else{row.appendChild(ColTKH); }
            row.appendChild(ColCD); 
            row.appendChild(ColLHSCC);
            row.appendChild(ColLDDS);
            row.appendChild(ColRX);
            row.appendChild(ColKD);
            //row.appendChild(ColNH);
            row.appendChild(ColGH);
            row.appendChild(ColTime);
            tbodyTim.appendChild(row)
            sortTable1()
        })
  }




  function sortTable1() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("data-table");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
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





  function TiepNhan(){
    $("#message").html("<div class='alert alert-success'>Đang Cập Nhật</div>")
    var json2 = {
          TDBDTiepKhach: TimesClick(),
          LoaiHinhSuaChua: $('#LoaiHinh').val(),
          LoaiHinhDongSon: $('#LoaiHinhBP').val(),
          TrangThaiXuong: "03 Đang Tiếp Nhận"
        }
    postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  }







  function KetThucTiepNhan(){
  if( $('#KhachDoi').val() ==""){alert ("Thông Tin Khách Đợi");return false}
  if( $('#KhachRX').val() ==""){alert ("Thông Tin Rửa Xe");return false}
  if($('#LoaiHinh').val() ==""&&$('#LoaiHinhBP').val()==""){alert ("chưa Có Loại Hình");return false}
  if($('#LoaiHinh').val()=="Báo Giá SCC"||$('#LoaiHinhBP').val()=="Báo Giá BH"){$('#NgayGiaoXe').val("")}else{if( $('#NgayGiaoXe').val() ==""){alert ("chưa Có Ngày Giao Xe");return false}}
      $("#message").html("<div class='alert alert-success'>Đang Cập Nhật</div>") 
      var json2 = {
          TDKetThucTiepKhach: TimesClick(),
          LoaiHinhSuaChua: $('#LoaiHinh').val(),
          LoaiHinhDongSon: $('#LoaiHinhBP').val(),
          TrangThaiXuong: "04 Đã Tiếp Nhận",
          KhachHangDoi  :$('#KhachDoi').val() ,
          KhachRuaXe  :$('#KhachRX').val() ,
          TDHenGiaoXe :$('#NgayGiaoXe').val(),
          CongDoanDongSon:"Chờ SC",
          TrangThaiDongSon:"Chờ SC"
        }
        if($('#LoaiHinh').val()){json2["TrangThaiSCC"]="Chờ SC"}else{json2["TrangThaiSCC"]=""}
        if($('#LoaiHinhBP').val()){json2["CongDoanDongSon"]="Chờ SC";
        json2["TrangThaiDongSon"]="Chờ SC";}else{json2["CongDoanDongSon"]="";
        json2["TrangThaiDongSon"]=""}
        postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
  }        
  
  


  
  function GiaoXe(use){
     $("#message").html("<div class='alert alert-success'>Đang Cập Nhật</div>")
     var json3 = {
          TDRaKhoicong: TimesClick(),
          TrangThaiXuong: "09 Đã Giao Xe"
        }
          var MaSo = $('#MaSo').val()
        fetch(urlTX+"/"+checkID(MaSo), {
          method: "PATCH", // or 'PUT'
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(json3),
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          getData(urlTX)
          $("#message").html("<div class='alert alert-success'>Thành Công</div>")
          document.getElementById("NutNhan").innerHTML = ""
          document.getElementById("myForm").reset() 
          postData(data,urlDG,"POST")
          deleteData(urlTX+"/"+data.id )
          })
          .catch((error) => {
          console.error('Error:', error);
          });
 
  }








  function CapNhat(){
    if($('#LoaiHinh').val() ==""&&$('#LoaiHinhBP').val()==""){alert ("chưa Có Loại Hình");return false}
    if( $('#NgayGiaoXe').val() ==""){alert ("chưa Có Ngày Giao Xe");return false}
     $("#message").html("<div class='alert alert-success'>Đang Cập Nhật</div>")
  var json2 = {
          LoaiHinhSuaChua: $('#LoaiHinh').val(),
          LoaiHinhDongSon: $('#LoaiHinhBP').val(),
          KhachHangDoi  :$('#KhachDoi').val() ,
          KhachRuaXe  :$('#KhachRX').val() ,
          TDHenGiaoXe :$('#NgayGiaoXe').val(),
        }
        if($('#LoaiHinh').val()){json2["TrangThaiSCC"]="Chờ SC"}else{json2["TrangThaiSCC"]=""}
        if($('#LoaiHinhBP').val()){json2["CongDoanDongSon"]="Chờ SC";
        json2["TrangThaiDongSon"]="Chờ SC";}else{json2["CongDoanDongSon"]="";
        json2["TrangThaiDongSon"]=""}
  if($('#LoaiHinhBP').val()=="Đồng Sơn"){json2["TDKetThucTiepKhach"]=TimesClick()}
  postData(json2,urlTX+"/"+checkID($(MaSo).val()),"PATCH")
    
  }
  
  
  
  
  
  
  
    
  function changvalue(){
      var ojb =  useCaher 
      for(var a in ojb){
      document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="DangKyXeDongSon()" >Đăng Ký DS</button>'
          if(ojb[a].BienSoXe == $("#BienSoXe").val()){
      if(ojb[a].MaSo){	document.getElementById("MaSo").value = ojb[a].MaSo}
      if(ojb[a].LoaiHinhSuaChua){document.getElementById("LoaiHinh").value = ojb[a].LoaiHinhSuaChua}                
      if(ojb[a].LoaiHinhDongSon){document.getElementById("LoaiHinhBP").value = ojb[a].LoaiHinhDongSon}
      if(ojb[a].KhachHangDoi){document.getElementById("KhachDoi").value = ojb[a].KhachHangDoi }  
      if(ojb[a].KhachRuaXe){document.getElementById("KhachRX").value = ojb[a].KhachRuaXe } 
      if(ojb[a].GhiChu){alert(ojb[a].GhiChu)}
      if(ojb[a].TDHenGiaoXe){document.getElementById("NgayGiaoXe").value = TimesClick(DoiNgayDangKy( ojb[a].TDHenGiaoXe))} 
      if( ojb[a].TrangThaiXuong =="02 Chờ Tiếp Nhận"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="TiepNhan()" >Tiếp Nhận</button>'}
      if( ojb[a].TrangThaiXuong =="02 Chuẩn Bị Tiếp"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="TiepNhan()" >Tiếp Nhận</button>'}
      if( ojb[a].TrangThaiXuong =="03 Đang Tiếp Nhận"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="KetThucTiepNhan()" >Kết Thúc Tiếp Nhận</button>'}
      if( ojb[a].TrangThaiXuong =="08 Chờ Giao Xe"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="GiaoXe()" >Giao Xe</button>'}
      if( ojb[a].TrangThaiXuong =="04 Đã Tiếp Nhận"||ojb[a].TrangThaiXuong =="05 Dừng Công Việc"||ojb[a].TrangThaiXuong =="05 Đang Sửa Chữa"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>'}
      if( ojb[a].TrangThaiXuong =="00 Có Hẹn"){document.getElementById("NutNhan").innerHTML = ""}
    if( ojb[a].LoaiHinhDongSon =="Báo Giá BH"&&ojb[a].TrangThaiXuong =="04 Đã Tiếp Nhận"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="GiaoXe()" >Giao Xe</button> <button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>'}
    if( ojb[a].LoaiHinhSuaChua =="Báo Giá SCC"&&ojb[a].TrangThaiXuong =="04 Đã Tiếp Nhận"){document.getElementById("NutNhan").innerHTML = '<button type="button" class="btn btn-primary" onclick="GiaoXe()" >Giao Xe</button> <button type="button" class="btn btn-primary" onclick="CapNhat()" >Cập Nhật</button>'}
        return
          }
      }
  }





  function clickTableTiepNhan(){
      var table = document.getElementById('data-table');
      for(var i = 1; i < table.rows.length; i++){table.rows[i].onclick = function(){
        document.getElementById('myForm').reset()
         $("#message").html("<div class='alert alert-success'>Hello!!</div>")
         document.getElementById("NutNhan").innerHTML = ""
         $("#BienSoXe").val(this.cells[0].innerHTML) ;
        changvalue();
        return false
      }}
    }