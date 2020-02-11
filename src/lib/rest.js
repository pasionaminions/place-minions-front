
async function noBody(url, method) {
    let response = await fetch(url, {method: method});
    
    
    return await manageResponse(response);
}

async function manageResponse(response) {

    if (!response.ok) throw new Error(
        "error fetch con url "+ response.url + "\nStatus - " + response.status + "\n" + response.statusText +"\nBody: " + JSON.stringify(response.body));
    
    if (!response.headers.get("content-type")) return {};


    let json = await response.json();
    
    return json;
}

async function withBody(url, method, body) {
    console.log(body);
    let response = await fetch(url, {method: method, body: JSON.stringify(body), headers : {"Content-Type": 'application/json' }});
    return await manageResponse(response);
}

export async function get(url) {
    return await noBody(url, 'GET');
}

export async function del(url) {
    return await noBody(url, 'DELETE');
}

export async function post(url, body) {
    return await withBody(url, 'POST', body);
}

export async function put(url, body) {
    return await withBody(url, 'PUT', body);
}