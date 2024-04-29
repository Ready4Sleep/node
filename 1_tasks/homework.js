const http = require("http");
let counterAboutPage = 0;
let counterHomePage = 0;
const server =  http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    
    if(request.url === "/home" || request.url === "/"){
        response.statusCode = 200;
        response.write(`
            <h2>Home</h2>
            <a href="/about">About page</a>
        `);
        counterHomePage += 1;
        console.log('home counter: ', counterHomePage);
    }
    else if(request.url == "/about"){
        response.statusCode = 200;
        response.write(`
            <h2>About</h2>
            <a href="/">Home page</a>
        `);
        counterAboutPage += 1;
        console.log('about counter: ',counterAboutPage);
    }
    else{
        response.statusCode = 404;
        response.write("<h2>Not found</h2>");
    }
    response.end();
});
server.listen(3000);