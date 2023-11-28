import "./Headerdocs.css";
import { Link } from 'react-router-dom';
function Headerdocs() {
    return (
        <header className="header-docs-notif">
<div className="helph">
<img className="imgh" alt="Help circle outline" src="help-circle-outline.svg" />
</div>
<div className="acc-btnh">
<div className="text-wrapperh">Full name Lorem</div>
<img className="person-circleh" alt="Person circle" src="person-circle-outline.svg" />
<img className="vectorh" alt="Vector" src="vector_56.svg" />
</div>
<div className="overlapdocsh">
<Link to="/Document">
<div className="docsh">
<img className="img" alt="Documents outline" src="docs.svg" />
</div>
</Link>
<div className="ellipseh" />
</div>
<div className="agendah">
<Link to="/Agenda">
<img className="imgh" alt="Calendar outline" src="calendar-outline.svg" />
</Link>
</div>
<div className="notif_grouph">
<div className="notifh">
<img className="imgh" alt="Notifications" src="notif.svg" />
</div>
<div className="ellipseh" />


</div>
<div className="logoh">
    <div className="text-wrapperh-2">Logo</div>
    <div className="text-wrapperh-2">Logo</div>
    </div>
</header>
    );
}

export default Headerdocs;