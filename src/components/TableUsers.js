import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';

const TableUsers = (props)=>{
    
    const [listUser,setListUser]= useState([]);
    const [totalUser,settotalUser] = useState(0);
    const [totalPage,settotalPage] = useState(0);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        // call api
        getUsers(page)
    },[page])

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
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
            {
                listUser.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
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
    </Container>
    </>)
}

export default TableUsers