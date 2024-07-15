import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function ModalAddNew(props){
    const {show,handleClose}= props
    const [name,setName] = useState('');
    const [job,setJob] = useState('');
    const handleSaveUser=()=>{
        console.log(name,job);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='body-add-new'>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(event)=>setName(event.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Job</label>
                    <input type="text" className="form-control" value={job} onChange={(event)=>setJob(event.target.value)}/>
                </div>
                
            </form>
        </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      );
}

export default ModalAddNew