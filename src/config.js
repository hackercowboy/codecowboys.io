import dotenv from 'dotenv';

const config = dotenv.load({ debug: true }).parsed;

function getConfig(key) {
  return config[key];
}

export default getConfig;
