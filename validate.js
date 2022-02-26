const fsPromises = require('fs/promises');

(async()=> {
    JSON.parse(await fsPromises.readFile('./tsconfig.json', 'utf8'));
})();
