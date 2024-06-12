import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
     <nav>
       <ul>
         <li>
           <Link to="/">Banner</Link>
         </li>
         <li>
         <Link to="/card">Card</Link>
         </li>
        
       </ul>
     </nav>
   );
 }

 export default Navbar