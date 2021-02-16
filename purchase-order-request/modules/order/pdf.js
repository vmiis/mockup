//-----------------------------------------
m.pdf=function(name,record,callback){
    var _m=$vm.module_list[name];
    $('#D'+_m.id).css('animation','unset')
    $('#D'+_m.id +" *").css('color','#000')
    _m.load_data(record);
    var CH=document.getElementById('D'+_m.id).clientHeight;
    var CW=document.getElementById('D'+_m.id).clientWidth;
    html2canvas(document.querySelector('#D'+_m.id)).then(function(canvas){
        var pdf = new jsPDF('p', 'mm', 'a4');
        var mH=10,mW=8;
        var W=210;
        var H=297;
        var pW=CW;
        var pH=pW*(H-2*mH)/(W-2*mW);
        var pages=CH/pH;
        for(var i=0;i<pages;i++){
            var ccc=document.createElement("canvas");
            ccc.setAttribute('width', pW);
            ccc.setAttribute('height', pH);
            var ctx = ccc.getContext('2d');
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(0,0,pW,pH);						
            ctx.drawImage(canvas,0,i*pH,pW,pH,0,0,pW,pH);
            var canvasDataURL = ccc.toDataURL("image/png", 1.0);
            if(i>0) pdf.addPage();
            pdf.addImage(canvasDataURL, 'JPEG', mW, mH, W-2*mW, H-2*mH);
        }
        callback(pdf);
        //window.open(pdf.output('bloburl'));
        /*
        var image = new Image();
        image.src =canvasDataURL;
        var w = window.open("");
        w.document.write(image.outerHTML);
        w.document.close();
        */
    })   
}
//-----------------------------------------
