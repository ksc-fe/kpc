define(['views/components/searchbox'],function(template){

    return Intact.extend({

        defaults:{
            placeholder:"请输入"
        },

        template:template,

        _create:function(){
            var self = this;
            $(this.element).find('.list-search-btn')
                .on("click",this.getValue);
        },

        getValue:function(){
            var query=$('#searchQuery').val();
            return query;
        },
        clearVal:function(){
            $('#searchQuery').val("");
        },
        tipMsg:function(msg){
            this.set("placeholder",msg);
        }

    });
});