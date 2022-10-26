


var items = new vis.DataSet();
var container = document.getElementById('mytimeline');




var options = {
    hiddenDates: [{start: '2017-03-05 00:00:00',end: '2017-03-06 00:00:00',repeat: 'weekly'},
    { start: '2017-03-04 17:00:00',end: '2017-03-05 08:00:00',repeat: 'daily'}],
    //  onMoving:function (item) {
    //   if(item){
    //     document.getElementById("contextMenu2").style.display = 'block';
    //   $("#ThoiGian").html(TimesClick(item.end))
    //   }
      
              
    //           },
     onMove: function (item) {
    let text = "Thay Đổi kế hoạch xe "+item.content;
    if(item){
      capnhatthoigian(item)}
   // if (confirm(text) == true) {capnhatthoigian(item) } else {loadData()};
  },
    
    onUpdate: function (item) {
      var BienSo = item.content.slice(0,item.content.indexOf(" "))
      $("#buttonSCC").html('')
      document.getElementById('FormSCC').reset()
     $('#ModalSCC').modal('show')
      var chiudaichip = item.end-item.start
      $("#ChieuDaiChip").val(chiudaichip)
      document.getElementById("BienSoXe").value=BienSo
      changvalue()
      timeSuaChua() 
  },
  
   
  timeAxis: {scale: 'minute', step: 30},
    orientation: 'top',
    start:(new Date( (new Date()).valueOf())).setHours(6),
    end: (new Date( (new Date()).valueOf())).setHours(17),
    editable: true,
    autoResize:false,
    margin: {
      item: 1,  // distance between items
      axis: 5 ,  // distance between items and the time axis
      },
 stack: true,
    };

    var groups = new vis.DataSet();
    for(i in KhoangSC){
        groups.add({
                    id: KhoangSC[i],
                    content: KhoangSC[i] 
                })

    }
    groups.add({
      id: "Rửa Xe",
      content: "Rửa Xe" 
  })
 
  var timeline = new vis.Timeline(container, items,groups, options);



timeline.on('mouseUp', function (properties) {
  console.log(properties)
  document.getElementById("contextMenu2").style.display = 'block';
  
})

timeline.on('mouseMove', function (properties) {
  console.log(properties)
 // if(properties.item!==null){
  var menu = document.getElementById("contextMenu2")
  menu.style.display = 'block';
  menu.style.left = properties.pageX + "px";
  menu.style.top =(properties.pageY+30 ) + "px";
  $("#ThoiGian").html(TimesClick(properties.time))
  //}else{document.getElementById("contextMenu2").style.display = 'none'}
})


timeline.on('click', function (props) {document.getElementById("contextMenu").style.display = "none";})
timeline.on('contextmenu', function (props) {
  $("#biensomenu").html("")
  document.getElementById('FormSCC').reset()
  if(props.item){
    console.log(props)
  if (document.getElementById("contextMenu").style.display == "block")
      { document.getElementById("contextMenu").style.display = "none"
      }else {
      var menu = document.getElementById("contextMenu")
      menu.style.display = 'block';
      menu.style.left = props.pageX + "px";
      menu.style.top = props.pageY + "px";
  }
  var ojb =  useCaher
    for(var a in ojb){
    if(ojb[a].MaSo == props.item){
      document.getElementById("BienSoXe").value=ojb[a].BienSoXe;
      var start = new Date(DoiNgayDangKy(ojb[a].TimeStartGJ));
      var end = new Date(DoiNgayDangKy(ojb[a].TimeEndGJ));

      var chiudaichip = end-start
      
      $("#ChieuDaiChip").val(chiudaichip)
    
      $("#biensomenu").html(ojb[a].BienSoXe)
      changvalue();
      timeSuaChua() 
    }}
  $("#TTHuyChip").val(props.item)}
props.event.preventDefault();
});



function huyChip(item){
  item=$("#TTHuyChip").val()
  var ojb =  useCaher
    for(var a in ojb){
    if(ojb[a].MaSo == item){
          delete ojb[a].NhomKTV;
          delete ojb[a].KyThuatVien1;
          delete ojb[a].KyThuatVien2;
          delete ojb[a].TimeStartGJ;
          delete ojb[a].TimeEndGJ;
          ojb[a].TrangThaiSCC="Chờ SC";
          ojb[a].TrangThaiXuong="04 Đã Tiếp Nhận";
try{
  let text = "Bạn muốn Xóa Chíp Tiếp Độ: "+ojb[a].BienSoXe 
if (confirm(text) == true&&localStorage.getItem("PhanQuyen")=="DieuPhoi") { 
       alert(urlTX+"/"+ojb[a].id)
         $.ajax({
          url:urlTX+"/"+ojb[a].id,
          type:'PUT',
          data:ojb[a],
            success: function(data){
            loadData()
          }
        })
      }else{alert("Bạn không Thể xóa chíp")}
      }catch(eros){alert(eros)}

    }
  
  }
  
}


  function loadData () {
        items.clear();
        var dataArray0 =   useCaher
        var dataArray1= dataArray0.filter(function(r){return (r.LoaiHinhSuaChua==="EM"||r.LoaiHinhSuaChua==="SCC"||r.LoaiHinhSuaChua==="EM60")})
        for (var a=0;a<dataArray1.length;a++){
          var hoanthanh = document.getElementById("checkbox-3").checked
        r=dataArray1[a]
        var khoang ,mau="", edit1= {
          add: false,         // add new items by double tapping
          updateTime: true,  // drag items horizontally
          updateGroup: true, // drag items from one group to another
          remove: false,       // delete an item by tapping the delete button top right
          overrideItems: true  // allow these options to override item.editable
          }
        if(r.LoaiHinhSuaChua=="SCC"){khoang=2}else{khoang=1}
        if(r.TrangThaiSCC=="Đang SC"){mau="green"}
        if(r.TrangThaiSCC=="Dừng SC"){mau="red"}
        if(r.TrangThaiSCC=="Chờ SC"){mau="orange"}
        if(r.TrangThaiSCC=="Đã SC"){mau="magenta"}
        var start = new Date(DoiNgayDangKy(r.TimeStartGJ));
        var end = new Date(DoiNgayDangKy(r.TimeEndGJ));
        var endRX = new Date(DoiNgayDangKy(r.TimeEndGJ).valueOf()+15*60*1000)
        var timeNow=new Date()
        if((new Date(DoiNgayDangKy(r.TimeEndGJ))).valueOf()<timeNow.valueOf()){mau="magenta"}
        if(hoanthanh&&r.TrangThaiSCC=="Đã SC"&&r.TimeStartGJ){
          items.add({
            className: mau,
            id:  r.MaSo  ,
            group: r.KhoangSuaChua,
            start: start,
            end: end,
            editable: edit1,
            //title:r.CoVanDichVu,
            content: r.BienSoXe +" "+r.KyThuatVien1
            })
        }
        if(r.TrangThaiSCC!="Đã SC"&&r.TimeStartGJ){
        items.add({
        className: mau,
        id:  r.MaSo  ,
        group: r.KhoangSuaChua,
        start: start,
        end: end,
        editable: edit1,
        //title:r.CoVanDichVu,
        content: r.BienSoXe +" "+r.KyThuatVien1
        });   }
        if(r.KhachRuaXe=="Rửa Xe"&&r.TrangThaiXuong!="08 Chờ Giao Xe"&&r.TimeEndGJ){
          var classname2 ="orange"
  if(r.TrangThaiXuong=="07 Đang Rửa Xe"){classname2="green"}
          items.add({
            className: classname2,
            id:  r.BienSoXe+"_RuaXe"  ,
            group: "Rửa Xe",
            start: end,
            end: endRX,
            editable: edit1,
            content: r.BienSoXe +" "+r.CoVanDichVu
            });

        } 
        if(r.ThoiGianHen&& document.getElementById("checkbox-hen").checked){
          if(r.TimeStartGJ){}else{
          var start =DoiNgayDangKy(r.ThoiGianHen)
          var end
         
          if(r.LoaiHinhSuaChua=="EM"||r.LoaiHinhSuaChua=="EM60"){  end=  new Date(1000 * 60 * 29 + (new Date(start)).valueOf())}
          if(r.LoaiHinhSuaChua=="SCC"||r.LoaiHinhSuaChua=="FIR"){  end=  new Date(1000 * 60 * 59 + (new Date(start)).valueOf())}
          if((r.NoiDungHen.toUpperCase()).indexOf("BD40K")>=0){end = new Date(1000 * 60 * 59 + (new Date(start)).valueOf())}
    if((r.NoiDungHen.toUpperCase()).indexOf("BD80K")>=0){end = new Date(1000 * 60 * 59 + (new Date(start)).valueOf())}
    if((r.NoiDungHen.toUpperCase()).indexOf("LEXUS")>=0){end = new Date(1000 * 60 * 59 + (new Date(start)).valueOf())}
          var classnamehen ="blue"
            if(r.TDGapLeTan){classnamehen="orange"}
          items.add({
            className: classnamehen,
            id:  r.BienSoXe+"_Hen"  ,
            group: r.KhoangSuaChua,
            start:  start ,
            end: end,
            editable: edit1,
            content: r.BienSoXe +" [H]",
            title:r.BienSoXe+"<br>"+r.NoiDungHen+"<br>"+r.NguoiDatHen,
            });
          }
        } 
        timeline.redraw()
}
}

function redraw(){
  timeline.redraw()
}
function capnhatthoigian(item){
  	var ojb =  useCaher
    // var KTV1="None",KTV2="None",NhomSC="None"
    //     if(item.group=="EM 01"){NhomSC="EM";KTV1="Vinh";KTV2="Hưng"}
    //     if(item.group=="EM 02"){NhomSC="EM";KTV1="Đ Anh";KTV2="Khoa"}
    //     if(item.group=="EM 03"){NhomSC="EM";KTV1="Hiển";KTV2="Cường"}
    //     if(item.group=="EM 04"){NhomSC="EM";KTV1="Trí";KTV2=""}
    //     if(item.group=="SCC 05"){NhomSC="Bạo";KTV1="Phước";KTV2=""}
    //     if(item.group=="SCC 06"){NhomSC="Bạo";KTV1="Hiếu";KTV2=""}
    //     if(item.group=="SCC 07"){NhomSC="Bạo";KTV1="Duy";KTV2=""}
    //     if(item.group=="SCC 08"){NhomSC="Hoan";KTV1="Lâm";KTV2=""}
    //     if(item.group=="SCC 09"){NhomSC="Hoan";KTV1="Sơn";KTV2=""}
    //     if(item.group=="SCC 10"){NhomSC="Hoan";KTV1="Thiên";KTV2=""}
    document.getElementById("contextMenu2").style.display = "none"
var json2 = {
        TimeStartGJ:TimesClick(item.start),
        TimeEndGJ: TimesClick(item.end),
        KhoangSuaChua:item.group
       // KyThuatVien1  :KTV1 ,
       // KyThuatVien2  :KTV2 ,
       // NhomKTV:NhomSC
      }
      postData(json2,urlTX+"/"+checkID(item.id),"PATCH")

}

 

    







