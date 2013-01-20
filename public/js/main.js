function AddPet() {
    var pet = new Object();
    pet.name = "testPet";
    pet.user_id = 1;
    Post("http://localhost:8000/pet/add", {pet: pet}, function (result) {
        $('#dataPanel').val(JSON.stringify(result));
    });
}

// UTILITY FUNCTIONS
function Post(url, data, callback) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        cache: false,
        timeout: 5000,
        success: callback,
        error : function(response) {
            //alert(JSON.stringify(response));
        }

    });
}