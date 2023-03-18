import UsernameShow from './features/Username/UsernameShow';
import UsernameInput from './features/Username/UsernameInput';
import UsernameDelete from './features/Username/UsernameDelete';

function App() {
  return (
    <div>
        <UsernameInput></UsernameInput>
        <UsernameShow></UsernameShow>
        <UsernameDelete></UsernameDelete>
    </div>
  )
}

export default App;