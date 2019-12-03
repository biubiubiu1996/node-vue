const express = require('express');

const app = express();
app.use(require('cors')())
app.use(express.json())
// 数据库连接
require('./plugins/db')(app)
// 定义接口路由
require('./routes/admin')(app)
app.listen(3000, () => {
    console.log('http://localhost:3000');
})