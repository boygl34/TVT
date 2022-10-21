


var items = new vis.DataSet();
var container = document.getElementById('mytimeline');
var options = {
    hiddenDates: [{start: '2017-03-05 00:00:00',end: '2017-03-06 00:00:00',repeat: 'weekly'},
    { start: '2017-03-04 17:00:00',end: '2017-03-05 08:00:00',repeat: 'daily'}],
     onMove: function (item) {
    let text = "Thay Đổi kế hoạch xe "+item.content;
    if (confirm(text) == true) { capnhatthoigian(item)} else {loadData()};},

    onUpdate: function (item) {
      var BienSo = item.content.slice(0,item.content.indexOf(" "))
      $("#buttonSCC").html('')
      document.getElementById('FormSCC').reset()
     $('#ModalSCC').modal('show')
      document.getElementById("BienSoXe").value=BienSo
      changvalue()
      timeSuaChua() 
  },
  
   
   
    orientation: 'top',
    start: new Date(),
    end: new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf()),
    editable: true,
   
    margin: {
      item: 1,  // distance between items
      axis: 1 ,  // distance between items and the time axis
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



// timeline.on('contextmenu', function (props) {
  
  
//   if (document.getElementById("contextMenu").style.display == "block")
//       { document.getElementById("contextMenu").style.display = "none"
//       }else {
//       var menu = document.getElementById("contextMenu")
//       menu.style.display = 'block';
//       menu.style.left = props.pageX + "px";
//       menu.style.top = props.pageY + "px";
//   }
//   $("#TTHuyChip").val(props.item)
//  // $("#TTHuyChip").html(props.item)
//  // huyChipcongdoan(props.item)
  
// props.event.preventDefault();
// });

  function loadData () {
        items.clear();
        var dataArray0 =   useCaher
        var dataArray1= dataArray0.filter(function(r){return (r.LoaiHinhSuaChua==="EM"||r.LoaiHinhSuaChua==="SCC"||r.LoaiHinhSuaChua==="EM60")})
        for (var a=0;a<dataArray1.length;a++){
          var hoanthanh = document.getElementById("checkbox-3").checked
        r=dataArray1[a]
        var khoang ,mau=""
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
            title:r.CoVanDichVu,
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
        title:r.CoVanDichVu,
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
    var MaSonew

var json2 = {
        TimeStartGJ:TimesClick(item.start),
        TimeEndGJ: TimesClick(item.end),
        KhoangSuaChua:item.group,
      }
      postData(json2,urlTX+"/"+checkID(item.id),"PATCH")

}

 

    







