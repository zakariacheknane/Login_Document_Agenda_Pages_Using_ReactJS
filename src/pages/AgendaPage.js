import Agenda from "../component/Agenda";
import "./AgendaPage.css";
import Minifooter from "../shared/minifooter";
import HeaderAgenda from "../component/HeaderAgenda";
function AgendaPage() {
    return (
        <div >
         <HeaderAgenda/>
         <Agenda/>
       <Minifooter/>
     </div>

    );}

export default AgendaPage;