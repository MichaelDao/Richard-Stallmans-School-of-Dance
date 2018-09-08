function callApi(action, data, callback) {
    fetch('http://localhost:8001/' + action, {
        method: 'POST',
        body: JSON.stringify(data, null, 2), // Prettify the JSON output
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        return response.json();
    }).then(data => {
        callback(data);
    }).catch(err => {
        console.error(err);
    });
}

//Example usage
// const dummy = {'dummy' : 'data'};
// callApi(dummy, function (res) {
//     alert(JSON.stringify(res));
// });

export {callApi}
