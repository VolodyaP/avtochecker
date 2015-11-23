function sendMailByAPI(obj,$http){
    $http({
        url: 'http://php.local/api.php',
        method: 'POST',
        param: {
            someParameter: 'test'
        }}).success(function(response){
            console.log(response)
        });
}

function sendMail(obj){
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'syO1o6SjtKm7ByubV9-JoA',
            'message': {
                'from_email': obj.email,
                'to': [
                    {
                        'email': 'weber.uk.lv@gmail.com',
                        'name': 'RECIPIENT NAME (OPTIONAL)',
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject': 'Check API Feedback',
                'html': obj.text
            }
        }
    }).done(function(response){
        alert('Cool');
        console.log(response); // if you're into that sorta thing
    });
}
