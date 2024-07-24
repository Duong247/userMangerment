import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../services/UserService';
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';
function ModalConfirm(props){
    const {show,handleClose, dataDeleteUser,handleDeleteUserFromModal}= props
    const confirmDelete = async ()=>{
        let res= await deleteUser(dataDeleteUser.id)

        if  (res && res.statusCode===204){
            handleDeleteUserFromModal(dataDeleteUser)
            toast.success('Delete user success')
            handleClose()
            // handleDeleteUserFromModal()
        }else{
            toast.error("error")
        }
    }

    
    
    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='body-add-new'>
            This user <b>{dataDeleteUser.email}</b> will be delete
        </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-danger' variant="primary" onClick={()=>confirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      );
}

export default ModalConfirm