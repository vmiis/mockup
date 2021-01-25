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
    var pre_item="vm-demo-predefined-transaction-item";
    var transaction="vm-demo-transaction-records";
    var aggregation="vm-demo-ato-bas-quarter";
    var aggregation_ie="vm-demo-income-expense-month-aggregation";
    var aggregation_year_ie="vm-demo-income-expense-year-aggregation";
    var aggregation_item="vm-demo-item-monthly-aggregation";
    var aggregation_tax="vm-demo-tax-return-yearly-aggregation";
    if(window.location.toString().indexOf('tables=wapp')!=-1){
        pre_item="predefined-transaction-item-wappsystem";
        transaction="transaction-wappsystem";
        aggregation="ato-bas-quarter-aggregation-wappsystem";
        aggregation_ie="income-expense-month-aggregation-wappsystem";
        aggregation_year_ie="income-expense-year-aggregation-wappsystem";
        aggregation_item="item-month-aggregation-wappsystem";
        aggregation_tax="ato-tax-return-yearly-aggregation-wappsystem";
    }
    else if(window.location.toString().indexOf('tables=vm')!=-1){
        pre_item="predefined-transaction-item-vmautomation";
        transaction="transaction-vmautomation";
        aggregation="ato-bas-quarter-aggregation-vmautomation";
        aggregation_ie="income-expense-month-aggregation-vmautomation";
        aggregation_year_ie="income-expense-year-aggregation-vmautomation";
        aggregation_item="item-month-aggregation-vmautomation";
        aggregation_tax="ato-tax-return-yearly-aggregation-vmautomation";
    }
    var modules={
        "panel":                                    {url:$H+"/panels/panel.html",router:1},
        "diagram":                                  {url:$H+"/diagram/diagram.html",router:1},
        "predefined_transaction_item_data":         {url:$H+"/predefined-transaction-item/data.html",Table:pre_item,form_module:"predefined_transaction_item_form",router:1},
        "predefined_transaction_item_form":         {url:$H+"/predefined-transaction-item/form.html",Table:pre_item},
        "transaction-data-basic":                   {url:$H+"/transaction-records/data-basic.html",                   Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-date":                    {url:$H+"/transaction-records/data-date.html",                    Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter":            {url:$H+"/transaction-records/data-year-quarter.html",            Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-bas":                     {url:$H+"/transaction-records/data-bas.html",                     Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter-bas":        {url:$H+"/transaction-records/data-year-quarter-bas.html",        Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-tax-return":              {url:$H+"/transaction-records/data-tax-return.html",              Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter-tax-return": {url:$H+"/transaction-records/data-year-quarter-tax-return.html", Table:transaction,form_module:"transaction-form",router:1},
        "transaction-form":                         {url:$H+"/transaction-records/form.html",                         Table:transaction,item_table:pre_item,router:1},
        "ato-bas-quarter-aggregation-data":         {url:$H+"/aggregations/ato-bas-quarter-aggregation-data.html",  Table:aggregation,transaction_table:transaction,form_module:'ato-bas-quarter-aggregation-form',router:1},
        "ato-bas-quarter-aggregation-form":         {url:$H+"/aggregations/ato-bas-quarter-aggregation-form.html",  Table:aggregation,router:1},
        "income-expense-month-aggregation-data":    {url:$H+"/aggregations/income-expense-month-aggregation-data.html", Table:aggregation_ie,transaction_table:transaction,form_module:'income-expense-month-aggregation-form',router:1},
        "income-expense-month-aggregation-form":    {url:$H+"/aggregations/income-expense-month-aggregation-form.html", Table:aggregation_ie,router:1},
        "income-expense-month-aggregation-chart":   {url:$H+"/aggregations/income-expense-month-aggregation-chart.html",Table:aggregation_ie,router:1},
        "income-expense-year-aggregation-data":     {url:$H+"/aggregations/income-expense-year-aggregation-data.html", Table:aggregation_year_ie,transaction_table:transaction,form_module:'income-expense-year-aggregation-form',router:1},
        "income-expense-year-aggregation-form":     {url:$H+"/aggregations/income-expense-year-aggregation-form.html", Table:aggregation_year_ie,router:1},
        "item-monthly-aggregation-data":            {url:$H+"/aggregations/item-month-aggregation-data.html",   Table:aggregation_item,transaction_table:transaction,form_module:'item-monthly-aggregation-form',router:1},
        "item-monthly-aggregation-form":            {url:$H+"/aggregations/item-month-aggregation-form.html",   Table:aggregation_item,router:1},
        "item-monthly-aggregation-chart":           {url:$H+"/aggregations/item-month-aggregation-chart.html",  Table:"vm-demo-item-monthly-aggregation",router:1},
        "tax-return-yearly-aggregation-data":       {url:$H+"/aggregations/ato-tax-return-yearly-aggregation-data.html",    Table:aggregation_tax,transaction_table:transaction,form_module:'tax-return-yearly-aggregation-form',router:1},
        "tax-return-yearly-aggregation-form":       {url:$H+"/aggregations/ato-tax-return-yearly-aggregation-form.html",    Table:aggregation_tax,router:1},
        "tax-return-yearly-aggregation-chart":      {url:$H+"/aggregations/ato-tax-return-yearly-aggregation-chart.html",   Table:aggregation_tax,router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
