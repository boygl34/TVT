
var useCaher,useCaher2={}
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
    
    showData(data)
  } );
} 

function showData(data){
    
  let dataArray0=data
  let dataArray1= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn")})
  let dataArrayDangSC= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiDongSon=="Đang SC")})
  var tbodyTim = document.getElementById('TablePhuKien')
  tbodyTim.innerHTML=""
  console.log(dataArrayDangSC)
  dataArrayDangSC.forEach(function(r){

         var row = document.createElement("tr"); 
         var tbodyTim = document.getElementById('TablePhuKien')
         var BienSo = document.createElement("td");
             BienSo.innerHTML = r.BienSoXe 
             row.appendChild(BienSo);
          var trangthai=document.createElement("td");
          trangthai.innerHTML='<select required class="form-control" id="TrangThai'+r.BienSoXe+'"   >'+
          '<option value="Xưởng">Xưởng</option>'+
          '<option value="Đồng">Đồng</option>'+
          '<option value="Thiên">Thiên</option>'+
          '<option value="Đình">Đình</option>'+
          '<option value="Pass">Pass</option>'  +
          '</select>' 
            
          row.appendChild(trangthai);  
                 
         tbodyTim.appendChild(row) 
         document.getElementById("TrangThai"+r.BienSoXe).value = "Đồng"
       
     })
     
    }
function Click(){
var table = $('#Table').tableToJSON(); // Convert the table into a javascript object

  alert(JSON.stringify(table));

}