import logo from '../img/cF.png';
import {FaRegHandshake } from "react-icons/fa";

function Aside() {
  return (
    <div className='aside'>
      <img src={logo} alt="logo"></img>
      <p><FaRegHandshake className='icon'/>Notas fiscais</p>
    </div>
  );
}
export default Aside;
