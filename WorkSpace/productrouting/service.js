app.factory("eventservice",function($resource){
    return {
           getEvent : function()
           {
           return $resource('/productrouting/file/:id', {id:'@id'}).get({id:'guitardata.json'});
           }
    };
});