import './NavBar.css'
import Logo from '../../assets/todo-list.png'

export const NavBar = () => {

    return (
        <header>
            <nav>
                <section className='logo'><img src={Logo} alt="logo" /></section>
                <section className='brand'>To-Do</section>
                <section className='mode'><button onClick={()=>{alert("hola")}}>Dark</button></section>
            </nav>
        </header>
    )
}