export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "User name",
    width: 130,
    renderCell: (props) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={props.row.img} alt="avatar" />
          {props.row.username}
        </div>
      );
    },
  },
  { field: "status", headerName: "Status", width: 90 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },
];

export const rows = [
  {
    id: 1,
    username: "Snow",
    status: "Active",
    age: 35,
    email: "Snow@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 2,
    username: "Lannister",
    status: "Pending",
    age: 42,
    email: "lannister@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 3,
    username: "Lannister",
    status: "Active",
    age: 45,
    email: "lannister@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 4,
    username: "Stark",
    status: "Pending",
    age: 16,
    email: "stark@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 5,
    username: "Targaryen",
    status: "Active",
    age: 53,
    email: "targaryen@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 6,
    username: "Melisandre",
    status: "Pending",
    age: 150,
    email: "melisandre@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 7,
    username: "Clifford",
    status: "Active",
    age: 44,
    email: "clifford@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 8,
    username: "Frances",
    status: "Pendgin",
    age: 36,
    email: "frances@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 9,
    username: "Roxie",
    status: "Active",
    age: 65,
    email: "roxie@gmail.com",
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
];
