import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'semantic-ui-react';
//import {db, FileSync} from 'lowdb';
import { cpfMask } from './Mask';
import ViaCep from 'react-via-cep'

import './Home.module.css';

const Home = () =>{


    const postData = () =>{
        // db.get('usuarios')
        // .push(data)
        // .write();
        axios.post('http://localhost:5000/usuarios')
    };

    const [form, setForm] = useState({
        nome: "",
        cpf: "",
        email: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
    });

    const data = {
        "usuarios":[
            {
                "nome": form.nome,
                "cpf": form.cpf,
                "email": form.email,
                "endereco": {
                    "cep": form.cep,
                    "rua": form.rua,
                    "numero": form.numero,
                    "bairro": form.bairro,
                    "cidade": form.cidade
                }
            }
        ]
        
    };

    function handleChange (event){
        const {name, value} = event.target

        setForm({
            ...form,
            [name]: value
        })
    };

    function onSubmit(){
        postData(data);
        console.log(data)
    }

   


    return(
        <div className='page'>
            <Form style={{marginTop: '10%'}} className='container' size='big' onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Input
                    required
                    value={form.nome}
                    placeholder='nome'
                    type='text'
                    name="nome"
                    label='Nome'
                    width={10}
                    onChange={handleChange}
                    />
                    <Form.Field
                    required
                    value={cpfMask(form.cpf)}
                    control={Input}
                    placeholder='cpf'
                    name='cpf'
                    label="CPF"
                    width={6}
                    onChange={handleChange}
                    />
                </Form.Group> 
                <Form.Field
                required
                value={form.email}
                control={Input}
                placeholder='E-mail'
                name='email'
                type='email'
                label="E-mail"
                width={12}
                onChange={handleChange}
                />
                <h3>Endereço</h3>
                <Form.Group>
                    <Form.Field
                    required
                    value={form.cep}
                    control={Input}
                    placeholder='CEP'
                    id='cep'
                    name='cep'
                    label="CEP"
                    width={5}
                    onChange={handleChange}
                    maxlength="9"
                    
                    />
                    <Form.Field
                    required
                    value={form.rua}
                    control={Input}
                    placeholder='Rua'
                    id='rua'
                    label="Rua"
                    name='rua'
                    type='text'
                    width={9}
                    onChange={handleChange}
                    />
                    <Form.Field
                    required
                    value={form.numero}
                    control={Input}
                    placeholder='Número'
                    label="Número"
                    name='numero'
                    type='number'
                    width={2}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                    required
                    value={form.bairro}
                    control={Input}
                    placeholder='Bairro'
                    id='bairro'
                    label="Bairro"
                    name='bairro'
                    type='text'
                    width={8}
                    onChange={handleChange}
                    />
                    <Form.Field
                    required
                    value={form.cidade}
                    control={Input}
                    placeholder='Cidade'
                    id='cidade'
                    label="Cidade"
                    name='cidade'
                    type='text'
                    width={8}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Button type='submit'>Enviar</Button>

            </Form>           

        </div>
    )
};

export default Home;