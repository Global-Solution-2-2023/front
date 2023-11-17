import { } from 'react';
import Login from './Login.jsx';
import HeroImg from '../assets/img/provisoria.jpg'

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

                            <div className="container">

                                <section className='hero-container'>
                                    <div className='hero-img'>
                                        <img src={HeroImg} alt="" />
                                    </div>
                                    <div className="hero-text">
                                        <h1>Título da solução</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, omnis tenetur! Officiis dolores illum nemo enim ut voluptatem animi blanditiis.</p>
                                    </div>
                                </section>

                                <aside className='aside-container'>

                                    <article className='article-container'>
                                        <h3>O que é a solução?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem voluptatum doloremque adipisci maxime temporibus odit repellendus assumenda, autem id.</p>
                                    </article>

                                    <article className='article-container border'>
                                        <h3>O que ela fará?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum maxime asperiores vero nulla nam, similique repellendus voluptates assumenda ipsum.</p>
                                    </article>

                                    <article className='article-container'>
                                        <h3>Como funcionará?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam quisquam praesentium quae reiciendis minima placeat architecto. Suscipit, eos eligendi!</p>
                                    </article>

                                </aside>
                            </div>

                            <section className='cards-section'>
                                <h2>Vantagens</h2>

                                <div className="cards-container">

                                    <div className="card-container">
                                        <div className="card-img">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <h3>01</h3>
                                            <h4>Lorem ipsum dolor</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ducimus?</p>
                                        </div>
                                    </div>

                                    <div className="card-container">
                                        <div className="card-img">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <h3>02</h3>
                                            <h4>Lorem ipsum dolor</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ducimus?</p>
                                        </div>
                                    </div>

                                    <div className="card-container">
                                        <div className="card-img">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <h3>03</h3>
                                            <h4>Lorem ipsum dolor</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ducimus?</p>
                                        </div>
                                    </div>

                                </div>

                            </section>
                        
                        </main>
                    </>
                )}
        </>
    )
}

export default Home
