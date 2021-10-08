import routes from './router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { default as AppLayout } from 'layout';

const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>{routes}</Switch>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
