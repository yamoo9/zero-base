import DotEnv from 'dotenv-webpack';

export const createDotEnvPlugin = (options = {}) => {
  const config = Object.assign(
    {
      path: './.env',
    },
    options
  );
  return new DotEnv(config);
};
