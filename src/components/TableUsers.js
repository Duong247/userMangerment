import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';


const TableUsers = (props)=>{
    
    const [listUser,setListUser]= useState([]);
    const [totalUser,settotalUser] = useState(0);
    const [totalPage,settotalPage] = useState(0);
    const [page,setPage] = useState(1);
    const [showAddModal,setShowAddModal] = useState(false)
    const [showEditModal,setshowEditModal] = useState(false)
    const [dataUserEdit,setDataUserEdit] = useState({})


    useEffect(()=>{
        // call api
        getUsers(page)
    },[page])

    const handleUpdateTable = (user)=>{
        setListUser((prevListUser) => [user, ...prevListUser])
    }

    const handleEditUser=(user)=>{
        setDataUserEdit(user)
        setshowEditModal(true)
    }

    const getUsers = async (pageNumber)=> {
        let res = await fetchAllUser(pageNumber);
        
        if(res && res.data ){
            settotalUser(res.total)
            setListUser(res.data)
            settotalPage(res.total_pages)
        }
    }

    const handlePageClick=(event)=>{
        setPage(+event.selected+1)
    }
    
    return(<>
    <Container>
        <div className=' my-3 add-new'>
            <span><b>List user: </b> </span>
            <button className='btn btn-light' onClick={()=>{setShowAddModal(true)}}>Add user</button>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                listUser && listUser.length>0 && listUser.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>
                            <button 
                                className='btn btn-primary mx-2' 
                                onClick={()=>handleEditUser(user)}>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        />
        <ModalAddNew 
            show={showAddModal}
            handleClose={()=>{setShowAddModal(false)}}
            handleUpdateTable={handleUpdateTable}
        />
        <ModalEditUser 
            show={showEditModal}
            handleClose={()=>{setshowEditModal(false)}}
            dataUserEdit={dataUserEdit}
        />
    </Container>
    </>)
}

export default TableUsers