/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const CONFIG = {
    reactStrictMode: true,
  };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    Object.assign(CONFIG, {
      env: {
        mongo_username: 'umair',
        mongo_password: '1234',
        mongo_cluster: 'cluster0',
        mongo_db_name: 'next-blog-dev',
      },
    });
  }

  return CONFIG;
};
