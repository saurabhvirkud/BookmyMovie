import React from 'react';
import './Header.css';
import Logo  from '../../assets/logo.svg';
import Button from '@material-ui/core/Button'

const Header = function() {
   return (
       <div className="header">
         <img src={Logo} alt="logo" class="logo"></img>
         <Button style={{float: "right",marginRight:"auto"}} variant="contained">Login</Button>
         <Button style={{float: "right",marginRight:"10px"}} variant="contained" color="primary">
  Book Show
</Button>
       </div>
   )
}
export default Header;



// function App() {
//   return (
//     <div>
//       {/* Logo is an actual React component */}
//       <Logo />
//     </div>
//   );
// }