function getHeaders(Story){

    var headers = [];

    Story.Story.forEach(element => {
        headers.push(element.actName);
        element.sessions.forEach(e2 => {
            headers.push(e2.title);
        })
    });

    console.log(headers);
}

export default getHeaders;