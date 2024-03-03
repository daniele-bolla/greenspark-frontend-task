import './index.css'
import store from "./store";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(store).mount('#app')
