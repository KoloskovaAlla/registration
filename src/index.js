import { App } from 'app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app';

if ($root) {
  const root = createRoot($root);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};
