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
        panel:         {url:$H+"/panels/panel.html",router:1},
        diagram:       {url:$H+"/diagram/diagram.html",title:"Equipment booking diagram"},
        booking_data:  {url:$H+"/equipment-list-and-equipment-booking-records/booking-data.html",  Table:"demo-vm-19091811",  form_module:"booking_form"},
        booking_form:  {url:$H+"/equipment-list-and-equipment-booking-records/booking-form.html",  Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        booking_form_2:{url:$H+"/equipment-list-and-equipment-booking-records/booking-form-2.html",Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        list_data:     {url:$H+"/equipment-list-and-equipment-booking-records/list-data.html",     Table:"demo-vm-19091812",  form_module:"list_form"},
        list_form:     {url:$H+"/equipment-list-and-equipment-booking-records/list-form.html",     Table:"demo-vm-19091812"},
        month:         {url:$H+"/equipment-booking-calendar/calendar-month.html",            Table:"demo-vm-19091811","booking":"booking_form",lookup:"demo-vm-19091812"},
        week:          {url:$H+"/equipment-booking-calendar/calendar-week.html",             Table:"demo-vm-19091811","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091812"},
        day:           {url:$H+"/equipment-booking-calendar/calendar-day.html",              Table:"demo-vm-19091811","booking":"booking_form",lookup:"demo-vm-19091812"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
