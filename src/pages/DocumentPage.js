
import "./DocumentPage.css";
import Docs from "../shared/docs";
import AddDoc from "../shared/addDoc";
import Box102 from "../shared/Box102";
import Filter from "../shared/filter";
import Box from "../shared/Box";
import Footer from "../component/Footer";
import Headerdocs from "../component/Headerdocs";
function DocumentPage() {
    return (
      
<div className="page">

<Headerdocs/>
<AddDoc/> 
<Box102/>  
 <Box/> 
  <Docs/>  
<Filter/>


 <Footer/> 


</div>
 

    );}
export default DocumentPage;