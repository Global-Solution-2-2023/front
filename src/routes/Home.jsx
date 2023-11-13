import { } from 'react';
import Login from './Login.jsx';

function Home(){
    
    const getUser = sessionStorage.getItem('usuario');
    const getPassword = sessionStorage.getItem('senha');


    return(
        <>
            {! (getUser && getPassword) ? (
                    <Login />
                ) : (
                    <>
                        <main>
                            <section>
                                <h1>HOME</h1>

                            </section>
                        </main>
                    </>
                )}
        </>
    )
}

export default Home
