    var container = document.getElementById('mytimeline');
    var container2 = document.getElementById('mytimeline2');
    var container3 = document.getElementById('mytimeline3');
    var container4 = document.getElementById('mytimeline4');
    var container5 = document.getElementById('mytimeline5');
    var container6 = document.getElementById('mytimeline6');
    var groups = new vis.DataSet();
    
    var items = new vis.DataSet();
    var newitems = new vis.DataSet();
    
    for(a in NhomDH){groups.add({id: NhomDH[a],content: NhomDH[a]})}
    var option2={
        clickToUse:true,
        zoomable:false, 
        start:(new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf())).setHours(6),
        end: (new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf())).setHours(17),
      }
    var option3={
        clickToUse:true,
        zoomable:false, 
        start:(new Date(1000 * 60 * 60 * 24*2 + (new Date()).valueOf())).setHours(6),
        end: (new Date(1000 * 60 * 60 * 24*2 + (new Date()).valueOf())).setHours(17),
      }
    var option4={
        clickToUse:true,
        zoomable:false, 
        start:(new Date(1000 * 60 * 60 * 24*3 + (new Date()).valueOf())).setHours(6),
        end: (new Date(1000 * 60 * 60 * 24*3 + (new Date()).valueOf())).setHours(17),
      }
    var option5={
        clickToUse:true,
        zoomable:false, 
        start:(new Date(1000 * 60 * 60 * 24*4 + (new Date()).valueOf())).setHours(6),
        end: (new Date(1000 * 60 * 60 * 24*4 + (new Date()).valueOf())).setHours(17),
      }
    var option6={
        clickToUse:true,
        zoomable:false, 
        start:(new Date(1000 * 60 * 60 * 24*5 + (new Date()).valueOf())).setHours(6),
        end: (new Date(1000 * 60 * 60 * 24*5+ (new Date()).valueOf())).setHours(17),
      }
    var options = {         
        hiddenDates: [{ start: '2017-03-05 00:00:00',end: '2017-03-06 00:00:00',repeat: 'weekly'},
                      { start: '2017-03-04 17:00:00',end: '2017-03-05 08:00:00',repeat: 'daily'},
                      { start: '2017-03-04 12:00:00',end: '2017-03-04 13:00:00',repeat: 'daily'}], 
        editable: true,
        autoResize:false,
        //zoomable:false, 
        onAdd: function (item, callback) {
          $("#CoVanDichVu").html("")
          getData(urlTX)
          if(item.start.getMinutes()>=0&&item.start.getMinutes()<30){item.start.setMinutes(0)}else{item.start.setMinutes(30)}
          //if(item.group=="SCC"){item.start.setMinutes(0)}
          document.getElementById('FormSCC').reset()
          $('#ModalSCC').modal('show')
          document.getElementById('NguoiDatHen').disabled=true;
          $("#ThoiGianHen").val(TimesClick(item.start))
          DanhSachCoVan2()
          $("#buttonDK").html("<button  type='button' class='btn btn-primary me-2' onclick='DangKyHen()'>Đăng Ký!</button>")
        },
        onMove: function (item, callback) {
          let text = "Thay Đổi Giờ Hen "+item.id;
          if (confirm(text) == true) { ;
          if(item.start.getMinutes()>=0&&item.start.getMinutes()<30){item.start.setMinutes(0)}else{item.start.setMinutes(30)}
          if(item.group=="SCC"){item.start.setMinutes(0)}
          if((new Date().getTime()>item.start.getTime())){alert("Sai thời Gian");loadData();return false}
          CapNhatHenKeo(item.id,TimesClick(item.start))} else {loadData()}
        },
        onUpdate: function (item, callback) {
          getData(urlTX)
          $("#CoVanDichVu").html("")
          $('#ModalSCC').modal('show');
          document.getElementById('FormSCC').reset()
          document.getElementById('NguoiDatHen').disabled=false;
          if(localStorage.getItem("userName")==emailnhanvienhen){document.getElementById('TrangThaiHen').disabled=false}
          $('#MaSo').val(item.id);
          changvalue()
           DanhSachCoVan()
            changvalue()
          if(localStorage.getItem("userName")===$('#NguoiDatHen').val()||$('#Email').val()==emailnhanvienhen){
          if($("#TrangThaiXuong").val()=="00 Có Hẹn"){
          $("#buttonDK").html("<button  type='button' class='btn btn-primary me-2' onclick='CapNhatHen()'>Cập Nhật!</button>")}else{$("#buttonDK").html("")}
          $("#CuocGoi").html("<a href='tel:+84"+$('#SoDT').val()+"' class='col-sm-7'>Click để Gọi</a>")
          }else{$("#buttonDK").html("")}
        },
        stack: true,
        verticalScroll: true,
        zoomKey: 'ctrlKey',
        format: {majorLabels: {
          millisecond:'HH:mm:ss',
          second:     'DD/MM/YYYY  HH:MM',
          minute:     'DD/MM/YYYY ',
          hour:       'DD/MM/YYYY ',
          weekday:    'DD/MM/YYYY ',
          day:        'DD MM YYYY',
          week:       'MM YY',
          month:      'YY',
          year:       ''
        }
        },
        margin: {
          item: 0,  // distance between items
          axis: 2 ,  // distance between items and the time axis
        },
        start:(new Date( (new Date()).valueOf())).setHours(6),
        end: (new Date( (new Date()).valueOf())).setHours(17),
        timeAxis: {scale: 'minute', step: 30},
        orientation: 'top',
        };
    var timeline = new vis.Timeline(container, items,groups, options);
    var timeline2 = new vis.Timeline(container2, items,groups, options);
    var timeline3 = new vis.Timeline(container3, items,groups, options);
    var timeline4 = new vis.Timeline(container4, items,groups, options);
    var timeline5 = new vis.Timeline(container5, items,groups, options);
    var timeline6 = new vis.Timeline(container6, items,groups, options);
    timeline2.setOptions(option2);
    timeline3.setOptions(option3)
    timeline4.setOptions(option4)
    timeline5.setOptions(option5)
    timeline6.setOptions(option6)
function redraw(){
  timeline.redraw()
  timeline2.redraw()
  timeline3.redraw()
  timeline4.redraw()
  timeline5.redraw()
  timeline6.redraw()
   
}

function loadData () {//Load du lieu cho time line co
    var dataArray1 =  useCaher
     items.clear();
     var dataArrayhen = dataArray1.filter(function (r){return r.ThoiGianHen})
     jQuery.each( dataArrayhen, function(dataArrayhen, r) {
      datadathen(r)
    })
     redraw()
    console.log("Cập Nhật")
  }

  function datadathen(r){
    try{
    var start =DoiNgayDangKy(r.ThoiGianHen)
    var edit  = false;
    var mau1 = "green";
    var end = new Date(1000 * 60 * 29 + (new Date(start)).valueOf())
    var TimeTreHen =((new Date()).getTime()-start.getTime())/(60*1000)
    if($("#Email").val()==emailnhanvienhen){edit  = true}else{edit  = false}
    if(r.TrangThaiXuong=="00 Có Hẹn"){edit  = true;mau1="orange"}
    var PhanLoai = "[H] "+Doingay(DoiNgayDangKy(r.TDXacNhanHen))
    var Kytu = "Ⓗ ";
    if(r.TrangThaiHen=="Xác Nhận Hẹn"){Kytu="✌"}
    if(r.TrangThaiHen=="Xác Nhận 30P"){Kytu="🆗"}
    if(r.TrangThaiHen=="Hủy Hẹn"){Kytu="⛔"}
    if(r.LoaiHinhSuaChua=="FIR"){r.LoaiHinhSuaChua="SCC"}
    if(r.LoaiHinhSuaChua=="EM60"){r.LoaiHinhSuaChua="EM"}
    if(r.LoaiHinhSuaChua=="SCC"){end = new Date(1000 * 60 * 59 + (new Date(start)).valueOf())}
    if(r.KhachHangHen=="Hẹn Vãn Lai"&&r.TrangThaiXuong=="00 Có Hẹn"){PhanLoai="[VL] "+Doingay(DoiNgayDangKy( r.TDXacNhanHen))}
    if(r.KhachHangHen=="Hẹn Vãn Lai"&&r.TrangThaiXuong!="00 Có Hẹn"){PhanLoai="[VL] "+r.TrangThaiHen}
    if(r.KhachHangHen=="Khách Hẹn"&&r.TrangThaiXuong!="00 Có Hẹn"){PhanLoai="[H] "+r.TrangThaiHen}
    if(TimeTreHen<10&&TimeTreHen>0&&(r.TrangThaiXuong=="00 Có Hẹn"||r.TrangThaiXuong=="02 Chờ Tiếp Nhận")){mau1="red"}
    if(r.LoaiHinhDongSon){ 
      items.add({
            className: mau1,
            editable: edit,
            id:  r.MaSo,
            group: r.LoaiHinhDongSon,
            start: start,
            end: new Date(1000 * 60 * 29 + (new Date(start)).valueOf()),
            title:r.NoiDungHen+"<br>"+r.NguoiDatHen,
            content: Kytu +r.BienSoXe +"<br>"+r.CoVanDichVu+"<br>"+PhanLoai
            })
    }else if(r.LoaiHinhSuaChua){
    items.add({
            className: mau1,
            id: r.MaSo,
            group: r.LoaiHinhSuaChua,
            start: start,
            editable: edit,
            end: end,
            title:r.NoiDungHen+"<br>"+r.NguoiDatHen,
            content: Kytu +r.BienSoXe +"<br>"+r.CoVanDichVu+"<br>"+PhanLoai
            });    
          } 
        }catch(error) {
          alert("Lỗi : "+error)
        }
}

