import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const data = [
    {
      id: 12345,
      product: "Acer nitro 5",
      img: "https://m.media-amazon.com/images/I/71ydOIIDt7L._AC_UF894,1000_QL80_.jpg",
      costumer: "Jhon Smith",
      date: "1 March",
      amount: 2500,
      method: "Credit",
      status: "Approved",
    },
    {
      id: 54321,
      product: "Iphone 15",
      img: "https://www.macstoreonline.com.mx/img/sku/IPHONE627_FZ.jpg",
      costumer: "Josafath Sosa",
      date: "21 February",
      amount: 2500,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 2002,
      product: "Nintendo Swith",
      img: "https://www.mueblesamerica.mx/img/1024/1024/resize/N/I/NINT00027_x1.jpg",
      costumer: "Jhon Smith",
      date: "13 December",
      amount: 5000,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 5934,
      product: "MacBook Air",
      img: "https://doto.vtexassets.com/arquivos/ids/237962-800-auto?v=638004117175900000&width=800&height=auto&aspect=true",
      costumer: "Abdiel Sosa",
      date: "15 July",
      amount: 25000,
      method: "Credit",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="wrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell>{row.costumer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
