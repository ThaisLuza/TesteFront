import { FaRegHandshake } from "react-icons/fa";
import DataTable from "./DataTable";


function Main() {
  return (
    <div className="main">
      <hr size="1"></hr>
      <h1><FaRegHandshake className="icon"/>Notas fiscais</h1>
      <p>Visualize as notas fiscais que você tem.</p>
      <DataTable />
    </div>
  );
}

export default Main;
