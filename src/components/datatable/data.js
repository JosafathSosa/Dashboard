export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    renderCell: (props) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={props.row.img} alt="avatar" />
          {props.row.firstName}
        </div>
      );
    },
  },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 53,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Sosa",
    age: 150,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    img: "https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9",
  },
];
