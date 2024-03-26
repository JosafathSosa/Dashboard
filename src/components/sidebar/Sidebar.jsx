import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const logOut = async () => {
    try {
      dispatch({ type: "LOGOUT", payload: currentUser });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Josafath</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <p className="title">Main</p>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboards</span>
            </li>
          </Link>
        </ul>
        <p className="title">Lists</p>
        <ul>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
        </ul>
        <ul>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Orders</span>
          </li>
        </ul>
        <ul>
          <li>
            <AirportShuttleIcon className="icon" />
            <span>Delivery</span>
          </li>
        </ul>
        <p className="title">Useful</p>
        <ul>
          <li>
            <AssessmentIcon className="icon" />
            <span>Stats</span>
          </li>
        </ul>
        <ul>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>
        </ul>
        <p className="title">Services</p>
        <ul>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>
        </ul>
        <ul>
          <li>
            <ReportGmailerrorredIcon className="icon" />
            <span>Logs</span>
          </li>
        </ul>
        <ul>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
        <p className="title">User</p>
        <ul>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
        <ul>
          <li>
            <LoginIcon className="icon" />
            <span onClick={logOut}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
