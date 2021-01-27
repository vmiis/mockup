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
    var invoice_client_table="vm-demo-invoice-client";
    var invoice_record_table="vm-demo-invoice";
    var invoice_print_module="invoice-print-demo";
    if(window.location.toString().indexOf('tables=wapp')!=-1){
        invoice_client_table="client-wappsystem";
        invoice_record_table="invoice-wappsystem";
        invoice_print_module="invoice-print-wapp";
    }
    else if(window.location.toString().indexOf('tables=vm')!=-1){
        invoice_client_table="client-vm";
        invoice_record_table="invoice-vm";
        invoice_print_module="invoice-print-vm";
    }
    var modules={
        "panel":                          {url:$H+"/panels/panel.html",router:1},
        "diagram":                        {url:$H+"/diagram/diagram.html"},
        "client-data":                    {url:$H+"/client/data.html",      Table:invoice_client_table, form_module:'client-form',  router:1},
        "client-form":                    {url:$H+"/client/form.html",      Table:invoice_client_table, router:1},
        "invoice-data":                   {url:$H+"/invoice/data.html",     Table:invoice_record_table, form_module:'invoice-form', print_module:invoice_print_module,router:1},
        "invoice-form":                   {url:$H+"/invoice/form.html",     Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
        "invoice-print-demo":             {url:$H+"/print/demo.html",       Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
        "invoice-print-wapp":             {url:$H+"/print/wapp.html",       Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
        "invoice-print-vm":               {url:$H+"/print/vm.html",         Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
