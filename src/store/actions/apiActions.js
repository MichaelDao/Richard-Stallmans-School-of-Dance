function callApi(data) {
    fetch('http://localhost:8001/test', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        return response.json();
    }).then(data => {
        alert(JSON.stringify(data));
    }).catch(err => {
        alert(err);
    });
}

export {callApi}
