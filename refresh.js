const pm2 = require('pm2');

// Configuration for your Express server
const serverConfig = {
  script: 'server.js',
  name: 'express-server',
};

// Function to restart the server every 3 seconds
function restartServer() {
  pm2.connect((err) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.start(serverConfig, (err, proc) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Express server started.');
      }

      // Set a timeout to stop the server after 3 seconds
      setTimeout(() => {
        pm2.stop(serverConfig.name, (err, proc) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Express server stopped.');
          }

          // Disconnect from pm2
          pm2.disconnect();
        });
      }, 3000); // 3 seconds
    });
  });
}

restartServer();
