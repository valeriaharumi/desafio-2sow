import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Redirect} from 'react-router-dom';
import Management from '../management/Management';

const Login = () =>{

    const [userLogin, setUserLogin ] = useState({
        name: "",
        password: "",
        path: false
    })

    function handleChange(e){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(userLogin);
        axios.get('http://localhost:5000/logInfo?name=' + userLogin.name `&` + 'password=' + userLogin.password)
        .then( res => {
            console.log(res);
            if (res.data.records.length > 0){
                window.sessionStorage.setItem('login', 'true');
                this.setState({ path: true })
            } else {
                window.alert("E-mail ou senha incorreto!") 
            } 
            
        })
    }

    if (userLogin.path && window.sessionStorage.getItem('login') === 'true'){
            return (<Redirect to="/management" component={Management}/>)
    } else {
    return(
        
       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
           <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Entre na sua conta
            </Header>
            <Form size='large'>
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' name='name' 
                onChange={handleChange}
                value={userLogin.name}
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={userLogin.password}
                    minLength='4'
                />

                <Button color='teal' fluid size='large' onSubmit={handleSubmit}>
                    Login
                </Button>
                </Segment>
            </Form>
           </Grid.Column>

       </Grid>
    )}
}

export default Login;