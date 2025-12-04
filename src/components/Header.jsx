import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h1>Tyson Manigault | ITIS 3135</h1>
      <nav>
        {/* Primary Nav: only 3 pages per assignment instructions */}
        <Link to="/">Home</Link> ~{" "}
        <Link to="/introduction">Introduction</Link> ~{" "}
        <Link to="/contract">Contract</Link> ~{" "}
        <Link to="/students">Students</Link>
      </nav>
    </header>
  );
}