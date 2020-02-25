import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap'
import store from './redux/store';
import { Provider } from 'react-redux';
const AppNavar = lazy(() => import('./components/Navbar/appNavbar'))
const ShoppingList = lazy(() => import('./components/shoppingList/shoppingList'))
const ItemModal = lazy(() => import('./components/itemModal/iemModal'));
function App() {
  const loading = <div className="album-img">
    <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" className='loadingImage' />
  </div>
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={loading}>
          <AppNavar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
