

import "./header.css";
function Header() {
  return (
    <header className="header">
    <button className="btn">
    <div className="text-wrapper">Button 1</div>
    </button>
    <div className="connecter">
    <div className="div">Se connecter</div>
    <img className="person-circle" alt="Person circle" src="person-circle-outline.svg" />
    </div>
    <div className="help">
    <img className="help-circle-outline" alt="Help circle outline" src="help-circle-outline.svg" />
    </div>
    <div className="overlap-group">
    <div className="text-wrapper-2">Logo</div>
    <div className="text-wrapper-2">Logo</div>
    </div>
    </header>

  );
}

export default Header;