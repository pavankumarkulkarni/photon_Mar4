import { useState } from 'react';
import SchoolList from './components/SchoolList/SchoolList';
import SchoolDetails from './components/SchoolDetails/SchoolDetails';
import './App.css';
import type { school } from './components/SchoolList/SchoolList';

function App() {
  const [schoolSelected, setSchoolSelected] = useState<school | null>(null);
  return (
    <div className='container'>
      <SchoolList setSchoolSelected={setSchoolSelected} />
      <SchoolDetails schoolSelected={schoolSelected} />
    </div>
  );
}

export default App;
