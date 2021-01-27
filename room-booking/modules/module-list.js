(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    prefix='';
    $H=$vm.hosting_path+"/modules";
    modules={
        panel:         {url:$H+"/panels/panel.html",router:1},
        diagram:       {url:$H+"/diagram/diagram.html"},
        booking_data:  {url:$H+"/room-list-and-room-booking-records/booking-data.html",  Table:"demo-vm-19091805",  form_module:"booking_form"},
        booking_form:  {url:$H+"/room-list-and-room-booking-records/booking-form.html",  Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        booking_form_2:{url:$H+"/room-list-and-room-booking-records/booking-form-2.html",Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        list_data:     {url:$H+"/room-list-and-room-booking-records/list-data.html",     Table:"demo-vm-19091806",  form_module:"list_form"},
        list_form:     {url:$H+"/room-list-and-room-booking-records/list-form.html",     Table:"demo-vm-19091806"},
        month:         {url:$H+"/room-booking-calendar/calendar-month.html",            Table:"demo-vm-19091805","booking":"booking_form",lookup:"demo-vm-19091806"},
        week:          {url:$H+"/room-booking-calendar/calendar-week.html",             Table:"demo-vm-19091805","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091806"},
        day:           {url:$H+"/room-booking-calendar/calendar-day.html",              Table:"demo-vm-19091805","booking":"booking_form",lookup:"demo-vm-19091806"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
