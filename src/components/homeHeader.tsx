import styles from '../styles/Header.module.css'
import logo from '../assets/logo.svg'
import account from '../assets/account.svg'
import search from '../assets/search.svg'
import favorite from '../assets/favorite.svg'
import shoppingCart from '../assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
    <header>
        <img src={logo} className={styles.logo} alt="" />
        <nav>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>

        </nav>
        <div className={styles.itens}>
            <a href="">
                <img src={account} alt="" />
            </a>
            <a href="">
                <img src={search} alt="" />
            </a>
            <a href="">
                <img src={favorite} alt="" />
            </a>
            <a href="">
                <img src={shoppingCart} alt="" />
            </a>
        </div>
    </header>
    )
}