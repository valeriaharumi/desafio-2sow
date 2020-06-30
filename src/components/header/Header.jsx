import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react'

const Header = () =>{
    return(
        <div>
            <Menu fixed='top' inverted style={{height: '10%'}}>
            <Container>
                <Menu.Item as='a' href='/' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} alt='Nome Bem Criativo'/>
                </Menu.Item>
                <Menu.Item as='a' href='/'>Home</Menu.Item>
                <Menu.Item as='a' href='/login'>Login</Menu.Item>                
            </Container>
            </Menu>
        </div>
    )
}

export default Header;