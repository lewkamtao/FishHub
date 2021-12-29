module.exports = {
  apps: [
    {
      name: "moyu_ban_geek_hub",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: ".output/server/index.mjs",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3092, // 修改之后 注意反向代理也要改!
      },
    },
  ],
};
