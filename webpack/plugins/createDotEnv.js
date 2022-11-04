import DotEnv from 'dotenv-webpack';

export const createDotEnv = (options = {}) => {
  const config = Object.assign(
    {
      path: './.env',
    },
    options
  );

  return new DotEnv(config);
};
