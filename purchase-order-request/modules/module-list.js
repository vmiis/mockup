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
        "order-data-self":{
            title:'records',
            url:$H+"/order/data.html",
            Table:"vm-demo-purchase-order-request",
            form_module:"order-form-self", 
            self:1,
            router:1
        },
        "order-form-self":{
            title:'form',
            url:$H+"/order/form.html",
            Table:"vm-demo-purchase-order-request",
            self:1,
            router:1
        },
        "order-form-pdf":{
            title:'form pdf',
            url:$H+"/order/form.html",
        },
        "order-form-email-to-manager":{
            title:'email to manager',
            url:$H+"/order/email-to-manager.html",
        },
        "diagram":{
            title:'diagram',
            url:$H+"/diagram/diagram.html",
            Table:"Diagram",
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
