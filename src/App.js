import './App.css';
import { Provider } from 'react-redux';
import Body from './Body';
import appStore from './Utils/appStore';
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
      <Body />
      </Provider>
    </div>
  );
}

export default App;
