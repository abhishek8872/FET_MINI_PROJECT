function searchData() {
    let id = Number($('#empid').val());
    // var name=$('#name').val();
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/user/" + id,
        dataType: "json",
        success: function (data) {
            $('#name').val(data.first_name);
            
            $('#email').val(data.email);
            $('#phone').val(data.mobile);


        },
        error: function (error) {
            alert("Invalid ID");
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
        }
    });

}