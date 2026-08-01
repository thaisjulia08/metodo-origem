const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.pdf':'application/pdf','.svg':'image/svg+xml'};
const server = http.createServer((req,res)=>{
  const clean = decodeURIComponent(req.url.split('?')[0]);
  let target = clean === '/' ? '/index.html' : clean;
  if (target.endsWith('/')) target += 'index.html';
  let file = path.join(root,target);
  if (!fs.existsSync(file) && !path.extname(file)) file += '.html';
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); return res.end('Página não encontrada');
  }
  res.writeHead(200, {'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
});
server.listen(3000,()=>console.log('\nMétodo Origem disponível em http://localhost:3000\nPara encerrar, pressione Ctrl + C.'));
