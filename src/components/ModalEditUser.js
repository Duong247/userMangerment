import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../services/UserService';
import { toast } from 'react-toastify';

function ModalEditUser(props){
    const {show,handleClose, dataUserEdit,handleEditUserFromModal}= props
    const [name,setName] = useState('');
    const [job,setJob] = useState('');
    const handleEditUser = async ()=>{
      let res = await putUpdateUser(name,job);
      console.log(res);
      if (res && res.updatedAt){
        handleEditUserFromModal({
          first_name: name,
          id: dataUserEdit.id
        })
        toast.success("A user is updated succeed")
        handleClose()
      }
    }

    useEffect(()=>{
        if (show){
            setName(dataUserEdit.first_name)  
        }
    },[dataUserEdit])
    // console.log(dataUserEdit);
    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT AN USER </Modal.Title>
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
          <Button variant="primary" onClick={()=>handleEditUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      );
}

export default ModalEditUser