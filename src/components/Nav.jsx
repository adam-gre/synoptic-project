import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Photographer</h1>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="gallery">Gallery</Link>
      <Link to="blog">Blog</Link>
      <Link to="contact">Contact</Link>
    </nav>
  );
}

export default Nav;