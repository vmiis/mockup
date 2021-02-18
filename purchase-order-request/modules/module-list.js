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
        "main-panel":{
            url:$vm.hosting_path+"/modules/panels/main-panel.html",
            description:"main panel",
            router:1
        },
        //-------------------------------
        "order-data":{
            title:'records',
            url:$H+"/order/data.html",
            Table:"vm-demo-purchase-order-request",
            form_module:"order-form", 
            router:1,

            manager_approval_module: "manager-approval",
            manager_approval_table: "vm-demo-purchase-order-request-manager-approval",
            finance_process_module: "finance-process",
            finance_process_table: "vm-demo-purchase-order-request-finance-process",
            receive_module: "receive",
            receive_table: "vm-demo-purchase-order-request-receive"
        },
        "order-form":{
            title:'form',
            url:$H+"/order/form.html",
            Table:"vm-demo-purchase-order-request",
        },
        //-------------------------------
        "order-data-self":{
            title:'records',
            url:$H+"/order/data.html",
            Table:"vm-demo-purchase-order-request",
            form_module:"order-form-self", 
            router:1,

            manager_approval_module: "manager-approval",
            manager_approval_table: "vm-demo-purchase-order-request-manager-approval",
            finance_process_module: "finance-process",
            finance_process_table: "vm-demo-purchase-order-request-finance-process",
            receive_module: "receive",
            receive_table: "vm-demo-purchase-order-request-receive",
            
            self:1,
        },
        "order-form-self":{
            title:'form',
            url:$H+"/order/form.html",
            Table:"vm-demo-purchase-order-request",
            router:1,
            
            self:1,
        },
        //-------------------------------
        "order-form-pdf":{
            title:'form pdf',
            url:$H+"/order/form.html",
        },
        "order-form-print":{
            title:'print version',
            url:$H+"/order/form.print.html",
            router:1
        },
        //-------------------------------
        "email-requestor-to-manager":{
            title:'email requestor to manager',
            url:$H+"/emails/requestor-to-manager.html",
        },
        "email-manager-to-requestor":{
            title:'email manager to requestor',
            url:$H+"/emails/manager-to-requestor.html",
        },
        "email-manager-to-finance":{
            title:'email manager to finance',
            url:$H+"/emails/manager-to-finance.html",
        },
        "email-finance-to-requestor":{
            title:'email finance to requestor',
            url:$H+"/emails/finance-to-requestor.html",
        },
        "email-received":{
            title:'notes for received',
            url:$H+"/emails/received.html",
        },
        //-------------------------------
        "manager-approval":{
            title:'manager approval',
            url:$H+"/manager-approval/form.html",
            Table:"vm-demo-purchase-order-request-manager-approval",
            parent_table:"vm-demo-purchase-order-request",
        },
        "finance-process":{
            title:'finance process',
            url:$H+"/finance-process/form.html",
            Table:"vm-demo-purchase-order-request-finance-process",
            parent_table:"vm-demo-purchase-order-request",
        },
        "receive":{
            title:'received',
            url:$H+"/receive/form.html",
            Table:"vm-demo-purchase-order-request-receive",
            parent_table:"vm-demo-purchase-order-request",
        },
        //-------------------------------
        "diagram":{
            title:'diagram',
            url:$H+"/diagram/diagram.html",
            Table:"Diagram",
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
