function callApi(data, callback) {
    fetch('http://localhost:8001/test', {
        method: 'POST',
        body: JSON.stringify(data),
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
