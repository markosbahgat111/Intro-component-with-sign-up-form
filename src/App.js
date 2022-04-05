import './App.scss';
import SignUPForm from './components/form.component';

function App() {
  return (
    <main>
      <div className='header'>
        <h1>Learn to code by watching others</h1>
        <span>See how experienced developers solve problems in real-time. watching scripted tutorial is great. but understanding how developers think is invaluable.</span>
      </div>
      <div className='form'>
        <SignUPForm />
      </div>
    </main>
  );
}

export default App;
