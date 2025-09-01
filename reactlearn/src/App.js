import logo from './logo.svg';
import './App.css';
import Course from './Course';

function App() {
  return (
    <>
   <Course name="HTML" price="$199" show={true}/>
   <Course name="CSS" price="$199" show={true}/>
   <Course name="Java" price="$299" />
   </>
  );
}

export default App;
