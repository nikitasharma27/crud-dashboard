import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import { getUsers } from '../service/getUsers.js';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Button, Container, Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {

    function deleteUser() {

    }

    const [users, setUsers] = useState([], "");

    useEffect(() => {
        const doGetUsers = async () => {
            const result = await getUsers();
            setUsers(result);
            
            };
        doGetUsers();
    }, []);

    return (
        <div className="dashboard">
            <Container maxWidth="lg">
                <div className="page__header">
                    <h1>User Dashboard</h1>
                    <NavLink to="/add"><Button variant="contained" className="btn" size="large">Add User</Button></NavLink>
                </div>
                <TableContainer className="TableBox">
                    <Table>
                        <TableHead className="TableHeader">
                            <TableRow className="TableHeader__row">
                                <TableCell>User</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((data) => (
                                <TableRow key={data.id}>
                                    <TableCell><Avatar src={data.avatar} /></TableCell>
                                    <TableCell>{data.first_name}</TableCell>
                                    <TableCell>{data.last_name}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>
                                    <IconButton aria-label="delete" size="large" onClick={() => deleteUser()}>
                                            <DeleteIcon />
                                    </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default Dashboard;