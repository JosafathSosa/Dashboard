import React from "react";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleWrap">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.guim.co.uk/img/media/c001a1444cc7dc29768ff55dfa283d0ea25651e1/0_312_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1548cf556b8a96d24246c1f4d52d6e9"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Mac Miller</h1>
                <div className="detailItem">
                  <div className="itemKey">Email: </div>
                  <div className="itemValue">jane2002@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone: </div>
                  <div className="itemValue">449-494-1889</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address: </div>
                  <div className="itemValue">
                    Andalucia España, Aguascalientes
                  </div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country: </div>
                  <div className="itemValue">México</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
