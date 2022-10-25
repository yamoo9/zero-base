
const { join, resolve } = require('node:path');
const liveServer = require('live-server');

/* argv --------------------------------------------------------------------- */
console.log(argv); // process.argv

/* path.join() vs. path.resolve() ------------------------------------------- */

// console.log(join(process.cwd(), 'public/scripts/app.js'));
// console.log(resolve('public/scripts/app.js'));


// const params = {
//   host: 'localhost',
//   port: process.env.PORT ?? 3000,
//   open: false,
//   root: resolve('public')
// }

// liveServer.start(params);