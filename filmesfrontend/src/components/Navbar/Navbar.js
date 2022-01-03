import './Navbar.scss';  

export default function Navbar(){
    return(
        <div className='navbar'>
            <h1 className='navbar__logo'>Filmes</h1>
            <ul className='navbar__links'>
                <a className='navbar__links__itens' href='!#'><li>Cadastro</li></a>
                <a className='navbar__links__itens' href='!#'><li>Lista de Filmes</li></a>
                <a className='navbar__links__itens' href='!#'><li>Perfil</li></a>
                <a className='navbar__links__itens' href='!#'><li>Login</li></a>
            </ul>
        </div>
    )
} 