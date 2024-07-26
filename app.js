const Koa = require("koa");
const proxy = require("koa-proxies");

const app = new Koa();

// 配置代理中间件
app.use(
  proxy("/", {
    target: "https://www.baidu.com/", // 替换为您要代理的内部服务的地址
    changeOrigin: true,
    logs: true,
  })
);

// 监听端口 9898
const port = 9898;
app.listen(port, '0.0.0.0', () => {
  console.log(`Koa proxy server is running on http://localhost:${port}`);
});
