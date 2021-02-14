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
        "data":{
            title:'records',
            url:$H+"/record/data.html",
            Table:"demo-profile-of-mode-states",
            form_module:"form", 
        },
        "form":{
            title:'form',
            url:$H+"/record/form.html",
            Table:"demo-profile-of-mode-states",
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
