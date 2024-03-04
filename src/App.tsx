import SchoolList from './components/SchoolList/SchoolList';
import SchoolDetails from './components/SchoolDetails/SchoolDetails';
import './App.css';

function App() {
  return (
    <div className='container'>
      <SchoolList />
      <SchoolDetails />
    </div>
  );
}

export default App;
