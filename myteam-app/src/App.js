import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './components/PageNavbar';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <PageNavbar />
      <div className='main-cointainer'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
