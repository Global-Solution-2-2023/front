import { } from 'react';

function Login(){
    return(
        <>
            <section className='login'>
                <div className="login-container">
                    <form>
                        <fieldset>

                            <div className='login-header'>
                                <h1>Login</h1>
                            </div>

                            <div className='login-input-group'>

                                <div className="input-box">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text" placeholder='Usuário'/>
                                    <span className="red-span"></span>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" placeholder='Senha'/>
                                    <span className="red-span"></span>
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