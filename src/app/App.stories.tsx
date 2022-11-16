import { ComponentMeta, ComponentStory } from '@storybook/react';
import App from './App';

export default {
  title: 'Components/App',
  component: App,
} as ComponentMeta<typeof App>;

export const Default: ComponentStory<typeof App> = () => <App />;
