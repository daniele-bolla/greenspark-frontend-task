import {  setup, type Preview } from '@storybook/vue3'
import '../src/index.css';
import { createStore } from 'vuex';
setup((app) => {
  //👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
  app.use( createStore({
    modules: {
      widget_products: {
        namespaced: true,
      
      }
    }
  }));
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
