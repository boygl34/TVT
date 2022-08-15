

var items = new vis.DataSet();
var groups = new vis.DataSet();
var container = document.getElementById('mytimeline');
var KTVDong=["Châu","Trường","Phúc","Trương","Quang","Định"]
var KTVSonDinh=["Đình","Thành","Lưu"]
var KTVSonThien=["Thiên","Dũng","Lực","Tú"]
var PhongSon=["Phòng Sơn 1","Phòng Sơn 2","Phòng Sơn 3"]
var NhomSon=["Đình","Thiên"]
var NhomCV=["Toàn","Tài","Rôn","Mẫn","Sang","Vinh","Triêng","Lộc","Sang"]
var KTVDongSon=["Châu","Trường","Phúc","Trương","Quang","Định","Đình","Thành","Lưu","Thiên","Dũng","Lực","Tú"]
var chieudaichip
var kytu1 ="😆"
var kytu2="😡"
groups.add({
    id: "Chờ SC",
    content: "Chờ SC",
   visible: false,
})
for(i in KTVDong){
    groups.add({
                id: KTVDong[i],
                content: KTVDong[i]
            })
}
for(a in NhomSon){
    groups.add({
            id: NhomSon[a],
            content: "Nhóm "+NhomSon[a]
        })
}  
for(b in PhongSon){
    groups.add({
                id: PhongSon[b],
                content: PhongSon[b]
            })
}  
groups.add({
    id: "Pass",
    content: "Pass",
})    
var options = {
                hiddenDates: [
                    //{start: '2017-03-05 00:00:00',end: '2017-03-06 00:00:00',repeat: 'weekly'},
                            { start: '2017-03-04 18:00:00',end: '2017-03-05 07:00:00',repeat: 'daily'}
                            ],
                    editable:  true,            
                
                autoResize:false,
                onMove: function (item) {
                        let text = "Thay Đổi kế hoạch xe "+item.content.slice(0,item.content.indexOf("_"));  
                        if (confirm(text) == true) { capnhatthoigian(item)} else {loadData()};},

                onUpdate: function (item) {
                        var BienSo = item.content.slice(0,item.content.indexOf("_"))
                        var CongDoan = item.content.slice(item.content.indexOf("_")+1,item.content.length-1)
                        if(item.content.indexOf(kytu1)>0){CongDoan = item.content.slice(item.content.indexOf("_")+1,item.content.length-3)}
                        if(item.content.indexOf(kytu2)>0){CongDoan = item.content.slice(item.content.indexOf("_")+1,item.content.length-3)}
                        //alert(CongDoan)
                        $("#buttonSCC").html('')
                        document.getElementById('FormDS').reset()
                        $('#ModalDongSon').modal('show')
                        document.getElementById("BienSoXe").value=BienSo
                        changvalue()
                        chieudaichip=item.end-item.start
                        
                        document.getElementById("CongDoanDongSon").value=CongDoan
                        ChangCongDoan(CongDoan)
                        var ojb =  useCaher
                        for(var a in ojb){
                        if(ojb[a].BienSoXe == BienSoXe.value){
                        CongDoanDongSon(CongDoan,ojb[a].TrangThaiDongSon)
                        }
                        }  
                    },
                onRemove:function(item){
                    let text = "Bạn Muốn Xóa Chíp "+item.content.slice(item.content.indexOf("_")+1);  
                    if (confirm(text) == true) { } else {loadData()};},
                    
                
               // onAdd:function(){},
                stack: true,
                start:(new Date( (new Date()).valueOf())).setHours(6),
                                end: (new Date( (new Date()).valueOf())).setHours(17),
                margin: {
                                item: 1,  // distance between items
                                axis: 1 ,  // distance between items and the time axis
                                },
                timeAxis: {scale: 'minute', step: 30},
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
                //  visibleFrameTemplate: function(item) {
                //             if (item.visibleFrameTemplate) {return item.visibleFrameTemplate;}
                //               var DivHTLM = "<div'>"
                //               var dataArray =  useCaher.Object
                //               var BienSo = item.content.slice(0,item.content.indexOf("_"))
                //               for(var a=0;a<dataArray.length;a++){
                //                   var r = dataArray[a]
                //                   if(dataArray[a].BienSoXe==BienSo){
                //                   if(r.CongDoanDongSon=="Đồng"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTDong=="Okie"){
                //                   DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTDong=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTDong==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}

                //                   if(r.CongDoanDongSon=="Nền"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTNen=="Okie"){
                //                   DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTNen=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTNen==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}

                //                   if(r.CongDoanDongSon=="Sơn"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTSon=="Okie"){
                //                   DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTSon=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTSon==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}

                //                   if(r.CongDoanDongSon=="Lắp Ráp"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTLap=="Okie"){
                //                   DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTLap=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTLap==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}

                //                   if(r.CongDoanDongSon=="Pass"){DivHTLM += '<span class="fa fa-star fa-spin fa-1x  BigStar"></span>'}else if(r.HTPass=="Okie"){
                //                   DivHTLM += '<span class="fa fa-star checked"></span>'} else if(r.HTPass=="KH"){ DivHTLM += '<i class="fa fa-star-half-o checked" aria-hidden="true"></i>'}else if(r.HTPass==""){'<span class="fa fa-star unchecked"></span>'}else{ DivHTLM += '<span class="fa fa-star unchecked"></span>'}   
                //                   } 
                //               }
                //               var percentage =Math.round(item.value ) / 100 * 100 + '%';
                //               var classs = "progressTL" 
                //               if(item.value >80){classs = "progressTL2"}else{classs = "progressTL"}
                //               return '<div class="progressTL-wrapper"><div class="'+classs+'" style="width:' + percentage  + '"></div><label class="progressTL-label">' +DivHTLM+ percentage + '<label></div></div>';
                //         },
                orientation: 'top',
   };

$("#HideChoSC").click(function(){
 groups.update({id: "Chờ SC", visible: true})
}); 
$("#HideChoSC").dblclick(function(){
 groups.update({id: "Chờ SC", visible: false})
});         

 
var timeline = new vis.Timeline(container, items,groups, options);

 function loadData () {
            items.clear()
            var dataArray0 =   useCaher
            var dataArray1= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.CongDoanDongSon!=="QC"&&r.TrangThaiDongSon!=="Chờ Giao")})
            var dataArray2= dataArray0.filter(function(r){return (r.LoaiHinhDongSon==="Đồng Sơn"&&r.TrangThaiXuong!=="00 Có Hẹn"&&r.TrangThaiDongSon==="Chờ SC")})
            dataArray2 = dataArray2.sort(function(r){return r.TDKetThucTiepKhach})
           if($('#selection').val()!=="") { dataArray1= dataArray0.filter(function(r){return (r.BienSoXe===$('#selection').val())});
           console.log(dataArray1)
        }
        var BienSolisst = document.getElementById('BienSoXeList'); 
        BienSolisst.innerHTML=""
       var option = document.createElement("option");
       option.value ="";
       option.text = "";
       BienSolisst.appendChild(option);
            var NgayHoanThanh=new Date().setHours(8)
            var hoanthanh = document.getElementById("checkbox-3").checked
         try{   
            dataArray2.forEach(function(r){
                var option = document.createElement("option");
                    option.value =r.BienSoXe;
                    option.text = r.BienSoXe;
                    BienSolisst.appendChild(option);
                if(r.HTDong==null&&r.HTLap==null&&r.HTSon==null&&r.HTNen==null&&r.HTPass==null){
                let values = (NgayHoanThanh.valueOf()-new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)).valueOf())/(new Date(DoiNgayDangKy(r.TDHenGiaoXe)))-new Date(DoiNgayDangKy(r.TDKetThucTiepKhach))
                items.add({      
                id:  r.BienSoXe+"_ChoSC"  ,
                value:values,
                group: "Chờ SC",
                start:NgayHoanThanh,
                end: new Date(NgayHoanThanh*1+29*60*1000),
                title:r.BienSoXe+" "+r.CoVanDichVu,
                content: r.BienSoXe +"_Chờ SC",
                editable:false
                })
                NgayHoanThanh =  new Date(NgayHoanThanh*1+30*60*1000)
                if(NgayHoanThanh.getHours()>=17){ NgayHoanThanh=new Date().setHours(8)}}
            })}catch(erros){alert("Loi "+erros)}

         try{   for (var a=0;a<dataArray1.length;a++){
                    r=dataArray1[a]
                    var mau,mau1,mau2,mau3,mau4,mau5,edit,edit1, edit2, edit3, edit4,edit5,group,  edit0= {
                    add: false,         // add new items by double tapping
                    updateTime: true,  // drag items horizontally
                    updateGroup: true, // drag items from one group to another
                    remove: false,       // delete an item by tapping the delete button top right
                    overrideItems: true  // allow these options to override item.editable
                    }
                    mau1=mau;mau2=mau;mau3=mau;mau4=mau;mau5=mau
                    timeNow=new Date()
                    var time = (timeNow- new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)))/(new Date(DoiNgayDangKy(r.TDHenGiaoXe))- new Date(DoiNgayDangKy(r.TDKetThucTiepKhach)))*100
                    if(r.HTDong==="Okie"){ mau1="orange";edit1=false;group="groupHT"}else{edit1=edit0;group="groupDS"}
                    if(r.HTNen==="Okie"){ mau3="orange";edit2=false;group="groupHT"}else{edit3=edit0;group="groupDS"}
                    if(r.HTSon==="Okie"){ mau4="orange";edit3=false;group="groupHT"}else{edit4=edit0;group="groupDS"}
                    if(r.HTLap==="Okie"){ mau2="orange";edit4=false;group="groupHT"}else{edit2=edit0;group="groupDS"}
                    if(r.HTPass==="Okie"){ mau5="orange";edit5=false;group="groupHT"}else{edit5=edit0;group="groupDS"}
                    if(r.TimeStartBody&&r.TimeEndBody){
                        //if((new Date(DoiNgayDangKy(r.TimeStartBody))).valueOf()<timeNow.valueOf()&&(new Date(DoiNgayDangKy(r.TimeEndBody))).valueOf()>timeNow.valueOf()){mau1="green"}
                        //if((new Date(DoiNgayDangKy(r.TimeEndBody))).valueOf()<timeNow.valueOf()){mau1="orange"}
                        if(r.CongDoanDongSon=="Đồng"){ 
                            if(r.TrangThaiDongSon=="Đang SC"){ mau1="green"}
                            if(r.TrangThaiDongSon=="Dừng SC"){ mau1="red"}
                        }else{mau1=mau}
                            if(r.CongDoanDongSon=="Nền"){
                            if(r.TrangThaiDongSon=="Đang SC"){ mau3="green"}
                            if(r.TrangThaiDongSon=="Dừng SC"){ mau3="red"}
                        }else{mau3=mau}
                            if(r.CongDoanDongSon=="Sơn"){
                            if(r.TrangThaiDongSon=="Đang SC"){ mau4="green"}
                            if(r.TrangThaiDongSon=="Dừng SC"){ mau4="red"}
                        }else{mau4=mau}
                            if(r.CongDoanDongSon=="Lắp Ráp"){
                            if(r.TrangThaiDongSon=="Đang SC"){ mau2="green"}
                            if(r.TrangThaiDongSon=="Dừng SC"){ mau2="red"}
                        }else{mau2=mau}
                            if(r.CongDoanDongSon=="Pass"){
                            if(r.TrangThaiDongSon=="Đang SC"){ mau5="green"}
                            if(r.TrangThaiDongSon=="Dừng SC"){ mau5="red"}
                        }else{mau5=mau} 
                         var GiaoTN=""
                      if(new Date(DoiNgayDangKy(r.TDHenGiaoXe)).getDate()== new Date().getDate()){GiaoTN=kytu1}
                      if(new Date(DoiNgayDangKy(r.TDHenGiaoXe)).valueOf()< new Date().valueOf()){GiaoTN=kytu2}
                      if(hoanthanh&&r.HTDong=="Okie"){
                        var starttime =  new Date(DoiNgayDangKy(r.TimeStartBody))
                        var endtime = new Date(DoiNgayDangKy(r.TimeEndBody))
                        if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartBody)*1+24*60*60*1000)
                            endtime =  new Date(DoiNgayDangKy(r.TimeEndBody)*1+24*60*60*1000)
                        }
                        if(endtime.getHours()>17){endtime = new Date(DoiNgayDangKy(r.TimeEndBody)*1+15*60*60*1000)}
                        items.add({
                            className: "orange",
                            id:  r.BienSoXe+"_Dong"  ,
                            group: r.KyThuatVienDong,
                            start: starttime,
                            end: endtime,
                            editable: edit1,
                            value:time,
                            subgroup: group,
                            //title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.NhomSon,
                            content: r.BienSoXe +"_Đồng "+GiaoTN,
                        });}
                        if(r.HTDong!=="Okie"){
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartBody))
                        var endtime = new Date(DoiNgayDangKy(r.TimeEndBody))
                        if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartBody)*1+24*60*60*1000)
                            endtime =  new Date(DoiNgayDangKy(r.TimeEndBody)*1+24*60*60*1000)
                        }
                        if(endtime.getHours()>17){endtime = new Date(DoiNgayDangKy(r.TimeEndBody)*1+15*60*60*1000)}
                            items.add({
                                className: mau1,
                                id:  r.BienSoXe+"_Dong"  ,
                                group: r.KyThuatVienDong,
                                start: starttime,
                                end: endtime,
                                editable: edit1,
                                value:time,
                                subgroup: group,
                                //title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.NhomSon,
                                content: r.BienSoXe +"_Đồng " +GiaoTN,
                            });} 

                    }  
                    if(r.TimeStartLap&&r.TimeEndLap){
                        //if((new Date(DoiNgayDangKy(r.TimeStartLap))).valueOf()<timeNow.valueOf()&&(new Date(DoiNgayDangKy(r.TimeEndLap))).valueOf()>timeNow.valueOf()){mau2="green"}
                        //if((new Date(r.TimeEndLap)).valueOf()<timeNow.valueOf()){mau2="orange"}
                        if(hoanthanh&&r.HTLap=="Okie"){
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndLap))
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartLap))
                        var endtime = new Date(DoiNgayDangKy(r.TimeEndBody))
                        if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartLap)*1+24*60*60*1000)
                            endtime =  new Date(DoiNgayDangKy(r.TimeEndLap)*1+24*60*60*1000)
                        }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndLap)*1+15*60*60*1000)}
                        items.add({
                            className: "orange",
                            id:  r.BienSoXe+"_Lap"  ,
                            group: r.KyThuatVienLap,
                            start: starttime,
                            //title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.NhomSon,
                            end: endtime,
                            editable: edit2,
                            value : time,
                            subgroup: group,
                            content: r.BienSoXe +"_Lắp Ráp "+GiaoTN
                        }); }
                        if(r.HTLap!=="Okie"){
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndLap))
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartLap))
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndLap))
                            if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartLap)*1+24*60*60*1000)
                              endtime =  new Date(DoiNgayDangKy(r.TimeEndLap)*1+24*60*60*1000)
                            }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndLap)*1+15*60*60*1000)}
                            items.add({
                                className: mau2,
                                id:  r.BienSoXe+"_Lap"  ,
                                group: r.KyThuatVienLap,
                                start:starttime,
                               // title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.NhomSon,
                                end: endtime,
                                editable: edit2,
                                value : time,
                                subgroup: group,
                                content: r.BienSoXe +"_Lắp Ráp " +GiaoTN
                            }); }
                    } 
                    if(r.TimeStartNen&&r.TimeEndNen){
                       // if((new Date(DoiNgayDangKy(r.TimeStartNen))).valueOf()<timeNow.valueOf()&&(new Date(DoiNgayDangKy(r.TimeEndNen))).valueOf()>timeNow.valueOf()){mau3="green"}
                       // if((new Date(r.TimeEndNen)).valueOf()<timeNow.valueOf()){mau3="orange"}
                        if(hoanthanh&&r.HTNen=="Okie"){
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartNen))
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndNen))
                        if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartNen)*1+24*60*60*1000)
                            endtime =  new Date(DoiNgayDangKy(r.TimeEndNen)*1+24*60*60*1000)
                        }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndNen)*1+15*60*60*1000)}
                        items.add({
                            className: "orange",
                            id:  r.BienSoXe+"_Nen"  ,
                            group: r.NhomSon,
                            start:starttime,
                            end: endtime,
                            editable: edit3,
                            subgroup: group,
                            value : time,
                            //title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.KyThuatVienNen,
                            content: r.BienSoXe + "_Nền " +GiaoTN
                        });}
                        if(r.HTNen!=="Okie"){
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartNen))
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndNen))
                        if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartNen)*1+24*60*60*1000)
                            endtime =  new Date(DoiNgayDangKy(r.TimeEndNen)*1+24*60*60*1000)
                        }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndNen)*1+15*60*60*1000)}
                            items.add({
                                className: mau3,
                                id:  r.BienSoXe+"_Nen"  ,
                                group: r.NhomSon,
                                start: starttime,
                                end: endtime,
                                editable: edit3,
                                subgroup: group,
                                value : time,
                               // title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.KyThuatVienNen,
                                content: r.BienSoXe + "_Nền "+GiaoTN 
                            });}

                    }
                    if(r.TimeStartPaint&&r.TimeEndPaint){
                        //if((new Date(DoiNgayDangKy(r.TimeStartPaint))).valueOf()<timeNow.valueOf()&&(new Date(DoiNgayDangKy(r.TimeEndPaint))).valueOf()>timeNow.valueOf()){mau4="green"}
                        //if((new Date(r.TimeEndPaint)).valueOf()<timeNow.valueOf()){mau4="orange"}
                        if(hoanthanh&&r.HTSon=="Okie"){
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndPaint))
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartPaint))
                            if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartPaint)*1+24*60*60*1000)
                                endtime =  new Date(DoiNgayDangKy(r.TimeEndPaint)*1+24*60*60*1000)
                            }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndPaint)*1+15*60*60*1000)}
                        items.add({
                            className: "orange",
                            id:  r.BienSoXe+"_Paint"  ,
                            group: r.PhongSon,
                            start: starttime,
                            end: endtime,
                            editable: edit4,
                            subgroup: group,
                            value : time,
                            //title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.KyThuatVienSon,
                            content: r.BienSoXe +"_Sơn "+GiaoTN
                        });}
                        if(r.HTSon!=="Okie"){
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndPaint))
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartPaint))
                            if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartPaint)*1+24*60*60*1000)
                                endtime =  new Date(DoiNgayDangKy(r.TimeEndPaint)*1+24*60*60*1000)
                            }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndPaint)*1+15*60*60*1000)}
                            items.add({
                                className: mau4,
                                id:  r.BienSoXe+"_Paint"  ,
                                group: r.PhongSon,
                                start: starttime,
                                end: endtime,
                                editable: edit4,
                                subgroup: group,
                                value : time,
                               // title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.KyThuatVienSon,
                                content: r.BienSoXe +"_Sơn "+GiaoTN
                            });}
                    }
                    if(r.TimeStartPass&&r.TimeEndPass){  
                        //if((new Date(DoiNgayDangKy(r.TimeStartPass))).valueOf()<timeNow.valueOf()&&(new Date(DoiNgayDangKy(r.TimeEndPass))).valueOf()>timeNow.valueOf()){mau5="green"}
                        //if((new Date(DoiNgayDangKy(r.TimeEndPass))).valueOf()<timeNow.valueOf()){mau5="orange"}
                        if(hoanthanh&&r.HTPass=="Okie"){
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndPass))
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartPass))
                            if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartPass)*1+24*60*60*1000)
                                endtime =  new Date(DoiNgayDangKy(r.TimeEndPass)*1+24*60*60*1000)
                            }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndPass)*1+15*60*60*1000)}
                        items.add({
                            className: "orange",
                            id:  r.BienSoXe+"_Pass"  ,
                            group: "Pass",
                            start:starttime,
                            end: endtime,
                            editable: edit5,
                            subgroup: group,
                            value : time,
                            //title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.KyThuatVienPass,
                            content: r.BienSoXe +"_Pass " +GiaoTN
                        }); }  
                        if(r.HTPass!=="Okie"){
                            var endtime = new Date(DoiNgayDangKy(r.TimeEndPass))
                            var starttime =  new Date(DoiNgayDangKy(r.TimeStartPass))
                            if(starttime.getDay()==0){starttime =  new Date(DoiNgayDangKy(r.TimeStartPass)*1+24*60*60*1000)
                                endtime =  new Date(DoiNgayDangKy(r.TimeEndPass)*1+24*60*60*1000)
                            }
                            if(endtime.getHours()>=17){endtime = new Date(DoiNgayDangKy(r.TimeEndPass)*1+15*60*60*1000)}
                            items.add({
                                className: mau5,
                                id:  r.BienSoXe+"_Pass"  ,
                                group: "Pass",
                                start: starttime,
                                end: endtime,
                                editable: edit5,
                                subgroup: group,
                                value : time,
                               // title:r.BienSoXe+" "+r.CoVanDichVu+" " +r.KyThuatVienPass,
                                content: r.BienSoXe +"_Pass "+GiaoTN
                            }); }         
                    }
            }
            //timeline.fit()
}catch(erros2){alert("Loi "+erros2)}finally{return}
}


function capnhatthoigian(item){
            var ojb =  useCaher
            var MaSonew
            var BienSo = item.content.slice(0,item.content.indexOf("_"))
            var CongDoan = item.content.slice(item.content.indexOf("_")+1,item.content.length-1)
            if(item.content.indexOf(kytu1)>0){CongDoan = item.content.slice(item.content.indexOf("_")+1,item.content.length-3)}
            if(item.content.indexOf(kytu2)>0){CongDoan = item.content.slice(item.content.indexOf("_")+1,item.content.length-3)}
            for(var a in ojb){
            if(ojb[a].BienSoXe == BienSo){MaSonew=ojb[a].MaSo;var r=ojb[a]}
            }
            var json2 = {};  

            if(CongDoan=="Đồng"){
            if(r.TimeStartNen&&r.TimeEndNen&&r.HTNen=="KH"){
            var startnen = new Date(item.end );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndNen)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartNen)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartNen"]=TimesClick(startnen);
            json2["TimeEndNen"]=TimesClick(endnen)
            }
            if(r.TimeStartPaint&&r.TimeEndPaint&&r.HTSon=="KH"){
            var startnen = new Date(endnen );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndPaint)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartPaint)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartPaint"]=TimesClick(startnen);
            json2["TimeEndPaint"]=TimesClick(endnen)
            }
            if(r.TimeStartLap&&r.TimeEndLap&&r.HTLap=="KH"){
            var startnen = new Date(endnen );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndLap)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartLap)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartLap"]=TimesClick(startnen);
            json2["TimeEndLap"]=TimesClick(endnen)
            }    
            if(r.TimeStartPass&&r.TimeEndPass&&r.HTPass=="KH"){
            var startnen = new Date(endnen );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndPass)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartPass)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartPass"]=TimesClick(startnen);
            json2["TimeEndPass"]=TimesClick(endnen)
            json2["TDKetThucSX"]=TimesClick(endnen)
            } 
            json2["KyThuatVienLap"]=item.group;   
            json2["KyThuatVienDong"]=item.group;
            json2["TimeStartBody"]=TimesClick(item.start);
            json2["TimeEndBody"]=TimesClick(item.end)
            }
            if(CongDoan=="Nền"){
            if(r.TimeStartPaint&&r.TimeEndPaint&&r.HTSon=="KH"){
            var startnen = new Date(item.end );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()))
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndPaint)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartPaint)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartPaint"]=TimesClick(startnen);
            json2["TimeEndPaint"]=TimesClick(endnen)
            }
            if(r.TimeStartLap&&r.TimeEndLap&&r.HTLap=="KH"){
            var startnen = new Date(endnen );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndLap)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartLap)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartLap"]=TimesClick(startnen);
            json2["TimeEndLap"]=TimesClick(endnen)
            }    
            if(r.TimeStartPass&&r.TimeEndPass&&r.HTPass=="KH"){
            var startnen = new Date(endnen );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndPass)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartPass)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartPass"]=TimesClick(startnen);
            json2["TimeEndPass"]=TimesClick(endnen)
            json2["TDKetThucSX"]=TimesClick(endnen)
            } 
            json2["NhomSon"]=item.group;
            json2["TimeStartNen"]=TimesClick(item.start);
            json2["TimeEndNen"]=TimesClick(item.end)
            }
            if(CongDoan=="Sơn"){
            if(r.TimeStartLap&&r.TimeEndLap&&r.HTLap=="KH"){
            var startnen = new Date(item.end );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndLap)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartLap)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartLap"]=TimesClick(startnen);
            json2["TimeEndLap"]=TimesClick(endnen)
            }    
            if(r.TimeStartPass&&r.TimeEndPass&&r.HTPass=="KH"){
            var startnen = new Date(endnen );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndPass)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartPass)).valueOf()
            var endnen = new Date(startnen*1+aa)
            json2["TimeStartPass"]=TimesClick(startnen);
            json2["TimeEndPass"]=TimesClick(endnen)
            json2["TDKetThucSX"]=TimesClick(endnen)
            } 
            json2["PhongSon"]=item.group;
            json2["TimeStartPaint"]=TimesClick(item.start);
            json2["TimeEndPaint"]=TimesClick(item.end)
            }
            if(CongDoan=="Lắp Ráp"){
            if(r.TimeStartPass&&r.TimeEndPass&&r.HTPass=="KH"){
            var startnen = new Date(item.end );
            if(startnen.getHours()>16){ startnen = new Date(1000 * 60 * 60*24  + (new Date(startnen).valueOf()));
                startnen.setHours(8)    }
            var aa = new Date(DoiNgayDangKy(r.TimeEndPass)).valueOf()-new Date(DoiNgayDangKy(r.TimeStartPass)).valueOf()
            var endnen = new Date(startnen*1+aa)
            //json2["TimeStartPass"]=TimesClick(startnen);
            //json2["TimeEndPass"]=TimesClick(endnen)
            }
            json2["KyThuatVienLap"]=item.group;
            json2["TimeStartLap"]=TimesClick(item.start);
            json2["TimeEndLap"]=TimesClick(item.end)
            json2["TDKetThucSX"]=TimesClick(endnen)
            }
            if(CongDoan=="Pass"){
            json2["TimeStartPass"]=TimesClick(item.start);
            json2["TimeEndPass"]=TimesClick(item.end)
            json2["TDKetThucSX"]=TimesClick(item.end)
            }

            postData(json2,urlTX+"/"+checkID(MaSonew),"PATCH") 
}


 var selection = document.getElementById('selection');
 selection.onchange = function () {
            loadData()
            var BienSo = selection.value
            var ids = [BienSo+"_Dong",BienSo+"_Nen",BienSo+"_Paint",BienSo+"_Pass",BienSo+"_Lap"]
            timeline.setSelection(ids, {focus: true});
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("selection");
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
 };

 function BANGTIENDO(BangTD){
    localStorage.setItem("BangTD",BangTD)
   BangTD = localStorage.getItem("BangTD")
   $("#LOAIBANGTD").val(localStorage.getItem("BangTD"))
   groups.clear()
   
   if(BangTD=="Xưởng"){
        groups.add({
        id: "Chờ SC",
        content: "Chờ SC",
        visible: false,
        })
        for(i in KTVDong){
        groups.add({
                    id: KTVDong[i],
                    content: KTVDong[i]
                })
        }
        for(a in NhomSon){
        groups.add({
                id: NhomSon[a],
                content: "Nhóm "+NhomSon[a]
            })
        }  
        for(b in PhongSon){
        groups.add({
                    id: PhongSon[b],
                    content: PhongSon[b]
                })
        }  
        groups.add({
        id: "Pass",
        content: "Pass",
        })    
    }

    if(BangTD=="Đồng"){
        for(i in KTVDong){
            groups.add({
                        id: KTVDong[i],
                        content: KTVDong[i]
                    })
        }
    }
    if(BangTD=="Thiên"){
       
            groups.add({
                        id: "Thiên",
                        content: "Nhóm Thiên"
                    })
                    for(b in PhongSon){
                        groups.add({
                                    id: PhongSon[b],
                                    content: PhongSon[b]
                                })
                        }  
        
    }
    if(BangTD=="Đình"){
       
        groups.add({
                    id: "Đình",
                    content: "Nhóm Đình"
                })
                for(b in PhongSon){
                    groups.add({
                                id: PhongSon[b],
                                content: PhongSon[b]
                            })
                    }  
    
}
if(BangTD=="Pass"){
       
    groups.add({
                id: "Pass",
                content: "Pass"
            })

}

timeline.redraw()
 }

 timeline.on('contextmenu', function (props) {
  
  
    if (document.getElementById(
        "contextMenu").style.display == "block")
        hideMenu();
    else {
        var menu = document
            .getElementById("contextMenu")
        menu.style.display = 'block';
        menu.style.left = props.pageX + "px";
        menu.style.top = props.pageY + "px";
    }
    $("#TTHuyChip").val(props.item)
    $("#TTHuyChip").html(props.item)
   // huyChipcongdoan(props.item)
    
  props.event.preventDefault();
  });
  function huyChipcongdoan(item){
    item=$("#TTHuyChip").val()
    var BienSo = item.slice(0,item.indexOf("_"))
    var CongDoan = item.slice(item.indexOf("_")+1,item.length)
    var ojb =  useCaher
      for(var a in ojb){
      if(ojb[a].BienSoXe == BienSo){
        if(CongDoan=="Dong"){
            delete ojb[a].TimeStartBody;
            delete ojb[a].TimeEndBody;
            delete ojb[a].KyThuatVienDong;
            delete ojb[a].HTDong;
           }
           if(CongDoan=="Nen"){
            delete ojb[a].TimeStartNen;
            delete ojb[a].TimeEndNen;
            delete ojb[a].KyThuatVienNen;
            delete ojb[a].HTNen;
           }
           if(CongDoan=="Lap"){
            delete ojb[a].TimeStartLap;
            delete ojb[a].TimeEndLap;
            delete ojb[a].KyThuatVienLap;
            delete ojb[a].HTLap;
           }
           if(CongDoan=="Paint"){
            delete ojb[a].TimeEndPaint;
            delete ojb[a].TimeStartPaint;
            delete ojb[a].KyThuatVienSon;
            delete ojb[a].HTSon;
           }
           if(CongDoan=="Pass"){
            delete ojb[a].TimeEndPass;
            delete ojb[a].TimeStartPass;
            delete ojb[a].KyThuatVienPass;
            delete ojb[a].HTPass;
           }

try{
    let text = "Bạn muốn Xóa Chíp Tiếp Độ: "+BienSo+"\n Công Đoạn : "+CongDoan;  
  if (confirm(text) == true&&localStorage.getItem("PhanQuyen")=="DieuPhoiBP") { 
         alert(urlTX+"/"+ojb[a].id)
           $.ajax({
            url:urlTX+"/"+ojb[a].id,
            type:'PUT',
            data:ojb[a],
              success: function(data){
              console.log(data)
              loadData()
            }
          })
        }else{alert("Bạn không Thể xóa chíp")}
        }catch(eros){alert(eros)}

      }
    
    }
    
  }
    