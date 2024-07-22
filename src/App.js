import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="app-container">
        
        <Header/>
        <Container>
          <TableUsers/>
        </Container>
      </div>
        <ToastContainer/>
    </>
  );
}

export default App;
