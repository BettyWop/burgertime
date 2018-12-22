$(document).ready( function() {
    $('.devour').on('click',function(e){
        e.preventDefault();
        var id = $(this).data("id")
        $.ajax('/api/update/'+ id, { method : "put"}).then( function(res){
            console.log(res);
            location.reload();
        })
    })

    $('.submit').on('click', function(e){
        e.preventDefault();
        var name = $('#burgerName').val()
        $.ajax('/api/add/'+ name, { method : 'POSt'}).then( function(){
            location.reload();
        })
    })
})

