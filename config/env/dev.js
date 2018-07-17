
const path = require('path');

module.exports = {
    port: 3086,                          // 程序运行的端口
    proxy: 'loopback, 127.0.0.1',        //信任的代理ip
    debug: true,                         // debug 为 true 时，用于本地调试，具体错误展示
    mysql: {
        host: '219.142.131.131',
        user: 'zxbike',
        port: 3306,
        password: 'Zxbike2017.com',
        database: ''
    },
    baseDb: 'wxPintu',
    db: {
        'wxPintu': 'mysql',
    }
};
