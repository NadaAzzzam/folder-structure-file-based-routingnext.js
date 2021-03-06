import Link from "next/link";
import classes from "./main-header.module.scss";

export default function MainHeader(props) {
    return(
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <Link href={'/'}>NextEvents</Link>
            </div>
            <nav className={classes.header__navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}