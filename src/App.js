import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { Container } from 'react-bootstrap';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';

function App() {
  const [showAddModal,setShowAddModal] = useState(false)

  return (
    <div className="app-container">
      
      <Header/>
      <Container>
        <div className=' my-3 add-new'>
        <span><b>List user: </b> </span>
          <button className='btn btn-light' onClick={()=>{setShowAddModal(true)}}>Add user</button>
        </div>
        <TableUsers/>
      </Container>
      <ModalAddNew show={showAddModal}
                   handleClose={()=>{setShowAddModal(false)}}
      />

    </div>
  );
}

export default App;
