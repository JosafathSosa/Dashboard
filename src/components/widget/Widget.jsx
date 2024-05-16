import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See al users",
        icon: (
          <PersonIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View al orderes",
        icon: (
          <StorefrontIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See net earnings",
        icon: (
          <PaidIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)" }}
          />
        ),
      };

      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      console.log(today);
      console.log(lastMonth);
      console.log(prevMonth);

      const lastQuery = query(
        collection(db, "users"),
        where("temp", "<=", today),
        where("temp", ">", lastMonth)
      );

      const prevMontQuery = query(
        collection(db, "users"),
        where("temp", "<=", lastMonth),
        where("temp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastQuery);
      const prevMonthData = await getDocs(prevMontQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };

    fetchData();
  }, []);
  console.log(diff);
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span>{amount}</span>
        <span className="counter">{data.isMoney}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "positive" : "negative"}`}>
          {diff < 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
