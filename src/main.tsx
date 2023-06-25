import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import App from './App.tsx'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
