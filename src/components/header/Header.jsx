import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react'
import logo from './logo-nbc.png'

const Header = () =>{
    return(
        <div>
            <Menu fixed='top' inverted style={{height: '12%'}}>
            <Container>
                <Menu.Item as='a' href='/' header>
                <Image size='tiny' src={logo} style={{ marginRight: '1.5em' }} alt='Nome Bem Criativo'/>
                </Menu.Item>
                <Menu.Item as='a' href='/'>Home</Menu.Item>
                <Menu.Item as='a' href='/login'>Login</Menu.Item>                
            </Container>
            </Menu>
        </div>
    )
}

export default Header;