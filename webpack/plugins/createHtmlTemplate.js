import { resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const createHtmlTemplate = (options = {}) => {
  const config = Object.assign(
    {
      title: 'React 툴체인 매뉴얼 구성',
      template: resolve('public/index.html'),
      templateParameters: {
        lang: 'ko-KR',
        charset: 'UTF-8',
        rootId: 'root',
      },
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#377ae6',
      },
      xhtml: true,
    },
    options
  );
  return new HtmlWebpackPlugin(config);
};
