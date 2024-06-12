

// ---------------------------------------


// import { useState } from 'react';

// import Axios from 'axios';


// function ResForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [tel, setTel] = useState("")

//   const addCustomer = () =>{
//     Axios.post("http://localhost:3003/create", {
//       name:name,
//       email:email,
//       tel:tel
//     }).then(() => {
//       console.log("ok");
//     })
//   };

//   return (
//     <div className="App">
//       <div className='Information'> 

//         <label> Name</label>
//         <input type="text"
//           onChange={(event) =>{
//             setName(event.target.value)
//           }}>
//         </input>

//         <label> Email</label>
//         <input type="email"
//           onChange={(event) =>{
//             setEmail(event.target.value)
//           }}>
//         </input> 

//         <label> Number</label>
//         <input type="number"
//           onChange={(event) =>{
//             setTel(event.target.value)
//           }}>
//         </input> 

       
//       </div>
//     </div>
//   );
// }
// export default ResForm;