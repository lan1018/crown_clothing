import Link from 'next/link'
import styles from './nav.module.scss'

export default function nav() {
    return (
        <div className={styles.navContainer}>
            <label for="check" className={styles.navContainer__checkBtn}>
            </label>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    
                    <li className={styles.nav__listLogo}>
                        <Link href="/"><img src="/favicon.svg" alt="" /></Link>
                    </li>
                    
                    <li className={styles.nav__listItem}>
                        <Link href="/">Home</Link>
                    </li>

                    <li className={styles.nav__listItem}>
                        <Link href="/shop">shop</Link>
                    </li>


                    <li className={styles.nav__listItem}>
                        Category
                        <ul className={styles.nav__listItemDrop}>
                            <li><Link href="/shop/hats">Hats</Link></li>
                            <li><Link href="/shop/jackets">Jackets</Link></li>
                            <li><Link href="/shop/sneakers">Sneakers</Link></li>
                            <li><Link href="/shop/womens">Women's</Link></li>
                            <li><Link href="/shop/mens">Men's</Link></li>
                        </ul>
                    </li>

                    <li className={styles.nav__listItem}>
                        <Link href="/api">API Project</Link>
                    </li>
                    
                    
                </ul>
            </nav>
       </div>
    )
}