import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Login(){

    const navigate = useNavigate();

    const schema = yup.object({
        usuario: yup.string().required("Campo Usuário obrigatório"),
        senha: yup.string().required("Campo Senha obrigatório")
    }).required();

    const { register, handleSubmit, formState: { errors } }
        = useForm({
            resolver: yupResolver(schema)
        })

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
            .then((resposta) => {
                return resposta.json();
            })
            .then((resposta) => {
                setUsuarios(resposta);
            })
    }, []);

    const validarFormulario = (data) => {
        let usuarioValido = false;

        if (data.usuario == '' || data.senha == "") {
            alert("Por favor, preencha todos os campos.")
        } else {
            for (const usuarioDados of usuarios) {
                if (data.usuario === usuarioDados.usuario && data.senha === usuarioDados.senha) {
                    let token = Math.random().toString(20).substring(2) +
                        Math.random().toString(20).substring(2);
                    sessionStorage.setItem('usuario', data.username);
                    sessionStorage.setItem('senha', token);
                    usuarioValido = true;
                    alert("Seus dados foram registrados com sucesso.")
                    navigate('/');
                    break;
                }
            }
        }

        if (!usuarioValido) {
            alert("Usuário ou senha inválidos! Tente novamente.")
        }
    };


    return(
        <>
            <section className='login'>
                <div className="login-container">
                    <form onSubmit={handleSubmit(validarFormulario)}>
                        <fieldset>

                            <div className='login-header'>
                                <h1>Login</h1>
                            </div>

                            <div className='login-input-group'>

                                <div className="input-box">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text" {...register('usuario')} placeholder='Usuário'/>
                                    <span className="red-span">{errors.usuario?.message}</span>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" {...register('senha')}  placeholder='Senha'/>
                                    <span className="red-span">{errors.senha?.message}</span>
                                </div>

                                <div className="button-box">
                                    <button type='submit'>Login</button>
                                </div>

                            </div>

                        </fieldset>
                    </form>


                </div>
            </section>
        </>
    )
}

export default Login