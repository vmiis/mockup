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
        "data":{
            url:$H+"/record/data.html",
            Table:"vm-demo-Sample1",
            form_module:"form", 
            description:"view and search data in a cloud database table",
            router:1,
        },
        "form":{
            url:$H+"/record/form.html",
            Table:"vm-demo-Sample1",
            description:"data collection form",
            router:1,
        },
        "diagram":{
            url:$H+"/diagram/diagram.html",
            description:"diagram",
            router:1,
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
