module.exports = {
  apps: [{
    name: 'chat-real',
    script: 'npm',
    args: 'run preview',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
