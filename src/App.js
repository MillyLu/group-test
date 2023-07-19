import './App.css';
import { AppRoutes } from './routes';
import { useSelector } from 'react-redux';

function App() {
    const token = useSelector((state) => state.auth.token);
    console.log(Boolean(token));

    return (
        <div className="App">
            <AppRoutes user={token} />
        </div>
    );
}

export default App;
