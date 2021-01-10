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
        "management":{
            url:$H+"/panels/management.html",
            description:"panel"
        },
        "new-starter-data":{
            title:"New starter records",
            url:$H+"/new-starter/record/data.html",
            Table:"new-starter",
            form_module:"new-starter-form", 
            
            task_unikey_module:prefix+'new-starter-task-unikey',
            task_unikey_table:"new-starter-task-unikey",
            task_access_card_module:prefix+'new-starter-task-access-card',
            task_access_card_table:"new-starter-task-access-card",
            task_computer_module:prefix+'new-starter-task-computer',
            task_computer_table:"new-starter-task-computer",
            notes_module:prefix+'new-starter-notes-data',
            notes_table:"new-starter-notes",
            
            description:"New starter records",
            router:1,
        },
        "new-starter-form":{
            title:"New starter form",
            url:$H+"/new-starter/record/form.html",
            Table:"new-starter",
            description:"New starter form",
            router:1,
        },
        "new-starter-task-unikey":{
            url:$H+"/new-starter/task-forms/unikey.html",
            Table:"new-starter-task-unikey",
            parent_table:"new-starter"
        },
        "new-starter-task-access-card":{
            url:$H+"/new-starter/task-forms/access-card.html",
            Table:"new-starter-task-access-card",
            parent_table:"new-starter"
        },
        "new-starter-task-computer":{
            url:$H+"/new-starter/task-forms/computer.html",
            Table:"new-starter-task-computer",
            parent_table:"new-starter"
        },
        "new-starter-notes-data":{
            url:$H+"/new-starter/notes/data.html",
            Table:"new-starter-notes",
            form_module:"new-starter-notes-form", 
            parent_table:"new-starter",
            description:"Communal ordering data"
        },
        "new-starter-notes-form":{
            url:$H+"/new-starter/notes/form.html",
            Table:"new-starter-notes",
            parent_table:"new-starter",
            description:"Communal ordering form",
        },
        "new-starter-diagram":{
            title:"Communal ordering diagram",
            url:$H+"/new-starter/diagram/diagram.html",
            description:"New starter diagram",
            router:1,
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
