import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';

import './styles.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
