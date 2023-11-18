import { useEffect, useState } from 'react';

import LogoImg from '../assets/img/logo.png'

function Nav(){

    const getUser = sessionStorage.getItem('usuario');
    const getPassword = sessionStorage.getItem('senha');

    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert("Saindo da sessão.");
        window.location.reload()
    }

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

    let usuarioAtual = null;

    for (const usuarioDados of usuarios) {
        console.log("getUser:", getUser);
        console.log("usuarioDados.usuario:", usuarioDados.usuario);

        if (getUser === usuarioDados.usuario) {
            usuarioAtual = usuarioDados;
            break;
        }
    }


    return(
        <>
            <header className='header'>

                <div className="header-brand">
                    <div className='header-brand-img'>
                        <img src={LogoImg} alt="Logo" />
                    </div>
                    <h2>PROJETO X</h2>
                </div>

                <nav className='header-menu'>
                    <ul>
                    {getUser && getPassword && usuarioAtual ? (
                        <>
                            <li className='user-info'>Usuário: {usuarioAtual.usuario}</li>
                            <li className='user-info'>Email: {usuarioAtual.email}</li>
                            <li><button onClick={handleLogout} className='logout-btn'>Logout</button></li>
                        </>
                        
                        ) : (
                            <li></li>
                        )}
                        </ul>
                    </nav>
                    

            </header>
        </>
    )
}

export default Nav