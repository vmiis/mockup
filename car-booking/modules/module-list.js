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
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        panel:          {url:$H+"/panels/panel.html",router:1},
        diagram:        {url:$H+"/diagram/diagram.html"},
        booking_data:   {url:$H+"/car-list-and-car-booking-records/booking-data.html",  Table:"demo-vm-19091807",  form_module:"booking_form"},
        booking_form:   {url:$H+"/car-list-and-car-booking-records/booking-form.html",  Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        booking_form_2: {url:$H+"/car-list-and-car-booking-records/booking-form-2.html",Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        list_data:      {url:$H+"/car-list-and-car-booking-records/list-data.html",     Table:"demo-vm-19091808",  form_module:"list_form"},
        list_form:      {url:$H+"/car-list-and-car-booking-records/list-form.html",     Table:"demo-vm-19091808"},
        month:          {url:$H+"/car-booking-calendar/calendar-month.html",            Table:"demo-vm-19091807","booking":"booking_form",lookup:"demo-vm-19091808",router:1},
        week:           {url:$H+"/car-booking-calendar/calendar-week.html",             Table:"demo-vm-19091807","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091808"},
        day:            {url:$H+"/car-booking-calendar/calendar-day.html",              Table:"demo-vm-19091807","booking":"booking_form",lookup:"demo-vm-19091808"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
