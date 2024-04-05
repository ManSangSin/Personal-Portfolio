import "./nav.css";

const Nav = ({ setActiveSection }) => {
  function handleClick() {
    setActiveSection(event.target.id);
  }
  return (
    <>
      <ul className="navUnorderedList">
        <li onClick={handleClick} id="Home" className="navListItem">
          Home
        </li>
        <li onClick={handleClick} id="Projects" className="navListItem">
          Projects
        </li>
        <li onClick={handleClick} id="Info" className="navListItem">
          Info
        </li>
        <li onClick={handleClick} id="Contact" className="navListItem">
          Contact
        </li>
        <li onClick={handleClick} id="Faq" className="navListItem">
          FAQ
        </li>
      </ul>
    </>
  );
};

export default Nav;
