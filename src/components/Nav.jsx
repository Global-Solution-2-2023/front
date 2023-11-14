import { } from 'react';

function Nav(){



    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert("Saindo da sessão.");
      }

    return(
        <>
            <header>
                <h1>HEADER</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
        </>
    )
}

export default Nav