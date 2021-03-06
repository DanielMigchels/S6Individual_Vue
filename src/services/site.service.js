import { HostService } from "./host.service.js";

export const siteService = {
    get,
    getId,
    getPage,
    add
};

function get() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    

    return fetch(HostService.GetHost() + `/site/site/`, requestOptions).then(handleResponse);
}

function getPage(page, pagesize) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(HostService.GetHost() + `/site/site/page/`+page+`/length/` + pagesize, requestOptions).then(handleResponse);
}

function getId(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(HostService.GetHost() + `/site/site/` + id, requestOptions).then(handleResponse);
}

function add(domainName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'jwt': getToken() },
        body: JSON.stringify({ domainName })
    };

    return fetch(HostService.GetHost() + `/site/site/`, requestOptions).then(handleResponse);
}

function getToken() {
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    return jwt;
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok) {
            return Promise.reject(text);
        }
        
        const data = text && JSON.parse(text);
        
        return data;
    });
}