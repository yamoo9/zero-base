import App from './App';

export default {
  title: 'App',
  component: App,
  parameters: {
    docs: {
      description: {
        component: 'React 애플리케이션의 루트 컴포넌트',
      },
    },
  },
};

export const Default = () => <App />;
