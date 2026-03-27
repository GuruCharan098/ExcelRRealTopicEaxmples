import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import RouterComponent from './RouterExample/RouterComponent.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import CombineAllHooks from '../src/ReactHooksExmp/CombineAllHooks.jsx'
// import CurdOperation from './ApiCrud/CrudOperation.jsx'
import { Provider } from 'react-redux'
// import { store } from './ReactReduxExample/ReduxStore.js'
import {store} from './ReactReduxExample/SagaReduxExample/SagaStore.js'
//import ReduxReactApp from './ReactReduxExample/ReduxReactApp.jsx'
import ReduxSagaApp from './ReactReduxExample/SagaReduxExample/ReduxSagaApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
    <App /> */}
    {/* <CurdOperation/> */}
    {/* <CombineAllHooks/> */}

    {/* React - Redux Component... */}
    <Provider store={store}>
      {/* <ReduxReactApp /> */}
      <ReduxSagaApp />
    </Provider>

  </StrictMode>
)
