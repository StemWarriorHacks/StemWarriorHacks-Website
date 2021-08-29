import Link from "next/link";
import styles from "../styles/Navbar.module.css"
const Navbar = () => {

    const navSlide = () => {
        
    }
    return(
        <div className={styles.navbar}>
            <div className="title">
                <h1>StemWarriorHacks</h1>
            </div>
            <nav className={styles.links}>
                
                <Link href="/" className={styles.activeLink} >
                    <a>HOME</a>
                </Link>
                <Link href="/about">
                    <a>ABOUT</a>
                </Link>
                <Link href="/schedule">
                    <a>SCHEDULE</a>
                </Link>
                <Link href="/sponsers">
                    <a>SPONSERS</a>
                </Link>
                <Link href="/faq">
                    <a>FAQ</a>
                </Link>
                <Link href="/contact">
                    <a>CONTACT</a>
                </Link>        
            </nav>
            <div className={styles.burger} onClick={navSlide()} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
            </div>
        </div>
    )
}

export default Navbar;