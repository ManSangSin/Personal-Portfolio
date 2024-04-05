import "./nav.css";

const Nav = ({ activeSection, setActiveSection }) => {
  function handleClick() {
    setActiveSection(event.target.id);
  }
  return (
    <>
      <ul className="navUnorderedList">
        <li onClick={handleClick} id="Home" className="navListItem">
          {activeSection === "Home" ? "○" : "Home"}
        </li>
        <li onClick={handleClick} id="Projects" className="navListItem">
          {activeSection === "Projects" ? "○" : "Projects"}
        </li>
        <li onClick={handleClick} id="Info" className="navListItem">
          {activeSection === "Info" ? "○" : "Info"}
        </li>
        <li onClick={handleClick} id="Contact" className="navListItem">
          {activeSection === "Contact" ? "○" : "Contact"}
        </li>
        <li onClick={handleClick} id="Faq" className="navListItem">
          {activeSection === "Faq" ? "○" : "Faq"}
        </li>
      </ul>
    </>
  );
};

export default Nav;
