import { } from 'react';

function Nav(){



    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert("Saindo da sessão.");
      }

    return(
        <>
            <header className='header'>

                <div className="header-brand">
                    <div className='header-brand-img'>
                        <img src="" alt="" />
                    </div>
                    <h2>HEADER</h2>
                </div>

                <nav className='header-menu'>
                    <ul>
                        <li>Usuário:</li>
                        <li>Email:</li>
                        <li><button onClick={handleLogout} className='logout-btn'>Logout</button></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Nav