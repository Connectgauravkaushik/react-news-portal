import './App.css';
import HomePage from './components/homePage';
import { Provider } from "react-redux";
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <HomePage />
      </Provider>

    </div>
  );
}

export default App;
