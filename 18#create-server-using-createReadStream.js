const http = require('http')
const fs = require('fs')

http.createServer(function (req,res) {
    const fileStream = fs.createReadStream('./market/big-data.txt', 'utf8');

    fileStream.on('open', () => {
    fileStream.pipe(res);
    })

    fileStream.on('error', (err)=> {
        res.end(err)
    })
})
.listen(5000)