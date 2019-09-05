const os=require('os');
console.log('Sistema Operativo:'+os.platform());
console.log('Versión del sistema operativo;'+os.release());
console.log('Memoria total:'+os.totalmem()+ 'bytes');
console.log('Memoria libre:'+os.freemem()+'bytes');