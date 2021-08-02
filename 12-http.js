
const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write('Welcome to our home page.')
        res.end()

    }else if(req.url === '/about'){
        res.write('Here is our short story.')
        res.end()
    }else{
        res.write(
            `<h1>Ooops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href='/'> Back home </a>
            `
        )
        res.end()
    }  

})

server.listen(5000)