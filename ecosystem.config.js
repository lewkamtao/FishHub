module.exports = {
  apps: [
    {
      name: "moyu_ban_geek_hub",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3093, // 修改之后 注意反向代理也要改!
      },
    },
  ],
};
