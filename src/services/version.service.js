export const versionService = {
    GetVersion,
};

function GetVersion() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json'
        },
    };

    return fetch("http://danielmigchelsuserservice.kn01.fhict.nl/", requestOptions).then(handleResponse);
    //return fetch("http://danielmigchelsgateway.kn01.fhict.nl/", requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        return data;
    });
}