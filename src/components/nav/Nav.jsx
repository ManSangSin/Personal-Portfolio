const Nav = ({ setActiveSection }) => {
  function handleClick() {
    setActiveSection(event.target.id);
  }
  return (
    <>
      <ul>
        <li onClick={handleClick} id="Home">
          Home
        </li>
        <li onClick={handleClick} id="Projects">
          Projects
        </li>
        <li onClick={handleClick} id="Info">
          Info
        </li>
        <li onClick={handleClick} id="Contact">
          Contact
        </li>
        <li onClick={handleClick} id="Faq">
          FAQ
        </li>
      </ul>
    </>
  );
};

export default Nav;
