import { FormControl, FormGroup, Input, InputLabel, Button, Container } from '@mui/material';
import { useState } from 'react';
import doCreateUser from '../service/create.js';
import './Add.css';


const initialValues = {
    firstname : '',
    lastname: '',
    email: '',
    avatar: ''
}

export const Add = () => {

    let [user, setUser] = useState(initialValues);

    const onValueChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        
        console.log(user);
    }

    const addUser = () => {
        // console.log(e.target.firstname);
        doCreateUser(user);
    }

    return (
        <div className="add">
            <Container maxWidth="md">
                <div className="page__header">
                    <h1>Add User</h1>
                </div>
                <FormGroup>
                    <FormControl margin="normal">
                        <InputLabel>First Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="firstname" />
                    </FormControl>
                    <FormControl margin="normal">
                        <InputLabel>Last Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="lastname" />
                    </FormControl>
                    <FormControl margin="normal">
                        <InputLabel>Email</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" />
                    </FormControl>
                    <FormControl margin="normal">
                        <InputLabel>Avatar</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="avatar" />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" size="medium" className="form-btn btn" onClick={() => addUser()}>Add</Button>
                    </FormControl>
                </FormGroup>
            </Container>
        </div>
  )
}

export default Add;
