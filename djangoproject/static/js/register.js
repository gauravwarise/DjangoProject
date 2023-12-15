






function performAction() {
    // const action = $('#action').val();
    const username = $('#username').val();
    const password = $('#password').val();


    let data = {
        username: username,
        password: password
    };

    // if (action === 'register') {
    //     const email = $('#email').val();
    //     data['email'] = email;
    //     const first_name = $('#first_name').val();
    //     data['first_name'] = first_name;
    //     const last_name = $('#last_name').val();
    //     data['last_name'] = last_name;

    // }
    console.log(data);


    // $.ajax({
    //     type: 'POST',
    //     url: '/account/register',
    //     contentType: 'application/json',
    //     data: JSON.stringify(data),
    //     beforeSend: function(xhr, settings) {
    //         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
    //             // Only send the token to relative URLs
    //             xhr.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
    //         }
    //     },
    //     success: function(response) {
    //         if(response.success){
    //             window.location.href = "/dashboard/home"
    //         }else{
    //             $('#result').text(JSON.stringify(response));
    //         }
    //     },
    //     error: function(error) {
    //         $('#result').text(JSON.stringify(error.responseJSON));
    //     }
    // });
}