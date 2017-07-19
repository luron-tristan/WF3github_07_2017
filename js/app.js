$(function(){

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: 'data/data.json',

        success: function(data){
            console.log(data);

            for(var i = 0; i < data.length; i++){
                $('ul').append('<li><a href="' + data[i].anchor + '">' + data[i].content + '</a></li>'); 
            }

        },

        error: function(err){
            console.log(err);
        },

        complete: function(){
            console.log('fin de la requête');
        }
    });
});