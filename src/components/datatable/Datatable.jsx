import React, { useState, useEffect } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./data";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      const respuesta = prompt("¿Seguro que quieres eliminar? (sí/no)");
      if (respuesta === "si") {
        await deleteDoc(doc(db, "users", id));
        setData(data.filter((item) => item.id !== id));
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /*
    No actualiza en TIEMPO REAL 
    const fetchData = async () => {
      let list = [];

      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();*/

    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableContainer">
        <h1 className="title">Users</h1>
        <Link
          to="/users/new"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h2 className="addNew">Add new</h2>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
