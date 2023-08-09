import {Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { getUser, deleteUser} from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background-color: black;
  & >th{
    color: white;
    font-size: 19px;
    text-align: center;
  }
`;

const TBody = styled(TableRow)`
  & >td{
    font-size: 19px;
    text-align: center;
  }
`;

const Allusers = () =>{

    const[users, setUsers] = useState([]);

    useEffect(()=>{getAllusers();}, []);

    const getAllusers = async () => {
        try {
          const response = await getUser();
          setUsers(response.data);
        } catch (error) {
          console.log('Error while fetching users:', error);
        }
      }

    const deleteUserDetails = async (id) =>{
        await deleteUser(id);
        getAllusers();
    }
      
    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default Allusers;