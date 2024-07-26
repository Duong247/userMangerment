import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalConfirm from './ModalConfirm';
import _ from 'lodash';
import './TableUser.scss'


const TableUsers = (props)=>{
    
    const [listUser,setListUser]= useState([]);
    const [totalUser,settotalUser] = useState(0);
    const [totalPage,settotalPage] = useState(0);
    const [page,setPage] = useState(1);
    const [showAddModal,setShowAddModal] = useState(false)
    const [showEditModal,setshowEditModal] = useState(false)
    const [showComfirmModal,setshowComfirmModal] = useState(false)
    const [dataUserEdit,setDataUserEdit] = useState({})
    const [sortBy,setSortBy] = useState('asc')
    const [sortField,setsortField] = useState('id')

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

    const handleEditUserFromModal = (user)=>{
        listUser.map((item)=>{
            if (item.id === user.id){
                item.first_name = user.first_name
            }
        })
    }

    const handleDeleteUser = (user)=>{
        setshowComfirmModal(true)
        setDataUserEdit(user)
    }

    const handleDeleteUserFromModal = (user)=>{
        let cloneListUser = _.cloneDeep(listUser)
        cloneListUser = cloneListUser.filter(item=>item.id != user.id)
        setListUser(cloneListUser)

    }

    const handleSort=(sortBy,sortField)=>{
        setSortBy(sortBy)
        setsortField(sortField)

        let cloneListUser = _.cloneDeep(listUser)
        cloneListUser=_.orderBy(cloneListUser,[sortField],[sortBy])
        setListUser(cloneListUser)
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
                    <th>
                    <div className='sort-header'>
                        <span>id</span>
                        <span>
                            <i className="fa-solid fa-arrow-up-long"
                               onClick={()=>handleSort('asc','id')} ></i>
                            <i className="fa-solid fa-arrow-down-long"
                               onClick={()=>handleSort('desc','id')} ></i>
                        </span>
                    </div>
                    </th>
                    <th>Email</th>
                    <th>
                        <div className='sort-header'>
                            <span>First Name</span>
                            <span>
                            <i className="fa-solid fa-arrow-up-long"
                               onClick={()=>handleSort('asc','first_name')} ></i>
                            <i className="fa-solid fa-arrow-down-long"
                               onClick={()=>handleSort('desc','first_name')} ></i>
                            </span>
                        </div>
                    </th>
                    <th >Last Name</th>
                    <th >Action</th>
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
                            <button 
                                className='btn btn-danger'
                                onClick={()=>handleDeleteUser(user)}>Delete</button>
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
            handleEditUserFromModal={handleEditUserFromModal}
        />
        <ModalConfirm
            show = {showComfirmModal}
            handleClose={()=>setshowComfirmModal(false)}
            dataDeleteUser={dataUserEdit}
            handleDeleteUserFromModal = {handleDeleteUserFromModal}
        />
    </Container>
    </>)
}

export default TableUsers