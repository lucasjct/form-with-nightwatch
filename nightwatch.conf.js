module.exports =  {
    "src_folders" : ["tests"],
  
    "webdriver" : {
      "start_process": true,
      "server_path": "chromedriver", // posso passar o caminho de instalação: "node_modules/.bin/chromedriver",
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      }
    }
  }