import './App.css';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login'
import Index from './pages/index/Index'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Index}/>
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
