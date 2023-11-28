import "./HeaderAgenda.css";
import { Link } from 'react-router-dom';
function HeaderAgenda() {
    return (
        <header className="header-docs-notif">
<div className="help">
<img className="img" alt="Help circle outline" src="help-circle-outline.svg" />
</div>
<div className="acc-btn">
<div className="text-wrapper">Full name Lorem</div>
<img className="person-circle" alt="Person circle" src="person-circle-outline.svg" />
<img className="vector" alt="Vector" src="vector_56.svg" />
</div>
<div className="overlapdocs">
<Link to="/Document">
<div className="docs">
<img className="img" alt="Documents outline" src="documents-outline1.svg" />
</div>
<div className="ellipse" />
</Link>
</div>
<div className="agenda">
<Link to="/Agenda">
<img className="img" alt="Calendar outline" src="agenda.svg" />
</Link>
</div>
<div className="notif_group">
<div className="notif">
<img className="img" alt="Notifications" src="notif.svg" />
</div>
<div className="ellipse" />


</div>
<div className="logo">
    <div className="text-wrapper-2">Logo</div>
    <div className="text-wrapper-2">Logo</div>
    </div>
</header>
    );
}

export default HeaderAgenda;