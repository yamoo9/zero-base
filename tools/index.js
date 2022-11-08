const getUserParams = require('./create-react-component/_getUserParams');
const createReactComponent = require('./create-react-component/_createRC');
const deleteReactComponent = require('./create-react-component/_deleteRC');

const params = getUserParams();

const defaultParams = require('./create-react-component/_defaultParams');
const getComponentParams = require('./create-react-component/_getComponentParams');

const config = {
  ...defaultParams,
  ...getComponentParams(),
};

if (params.create) {
  createReactComponent(config);
}

if (params.delete) {
  deleteReactComponent(config);
}
