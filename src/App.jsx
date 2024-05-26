import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Discuss, Question } from './pages'; 

const App = () => {
  return (
    <main className='bg-slate-200'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/discuss' element={<Discuss />} />
                <Route path='/question' element={<Question />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App
