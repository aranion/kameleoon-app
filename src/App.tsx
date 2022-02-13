import './App.sass';
import { AppRouter } from './router';

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
