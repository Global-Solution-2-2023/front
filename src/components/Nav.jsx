import { } from 'react';

function Nav(){

    const getUser = sessionStorage.getItem('usuario');
    const getPassword = sessionStorage.getItem('senha');

    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert("Saindo da sessão.");
        window.location.reload()
      }

    return(
        <>
            <header className='header'>

                <div className="header-brand">
                    <div className='header-brand-img'>
                        <img src="" alt="" />
                    </div>
                    <h2>PROJETO X</h2>
                </div>

                <nav className='header-menu'>
                    <ul>
                    {getUser && getPassword ? (
                        <>
                            <li>Usuário:</li>
                            <li>Email:</li>
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