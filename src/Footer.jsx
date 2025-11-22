import { Link } from "react-router";
export default function Footer() {
    return (
        <footer>
            <nav>
                <Link to="https://webpages.charlotte.edu/tmaniga1/ITIS3135.io/index.html">ITIS-3135 Page</Link>
                <Link to="https://webpages.charlotte.edu/tmaniga1/">CLT Web</Link>
                <Link to="https://github.com/tmaniga1">Github Profile</Link>
                <Link to="https://tmaniga1.github.io/">Github.io</Link>
                <Link to="https://www.linkedin.com">LinkedIn</Link>
            </nav>
            <p style="margin-top:1em;">Designed By Manigault &copy; 2025</p>
        </footer>
    );
}