const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 5173);
const types = {
  '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png',
  '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp',
  '.json':'application/json; charset=utf-8', '.webmanifest':'application/manifest+json',
  '.ttf':'font/ttf', '.otf':'font/otf', '.woff':'font/woff', '.woff2':'font/woff2',
  '.mp3':'audio/mpeg', '.wav':'audio/wav'
};

const server = http.createServer((req,res)=>{
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname); }
  catch { pathname = '/'; }
  if (pathname === '/admin/') { res.writeHead(302, {Location:'/admin'}); return res.end(); }
  if (pathname === '/' || pathname === '/admin') pathname = '/index.html';
  const file = path.normalize(path.join(root, pathname));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.stat(file,(err,stat)=>{
    if(err || !stat.isFile()) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control':'no-store'});
    fs.createReadStream(file).pipe(res);
  });
});
server.listen(port,'0.0.0.0',()=>console.log(`Mission Control running at http://localhost:${port}`));
