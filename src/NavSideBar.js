import React, { useState } from "react";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

import { Link } from "react-router-dom";

const NavSideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sidebar
        width="200px"
        style={{ height: "100vh" }}
        collapsed={collapsed}
        rootStyles={{
          background:
            "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
        }}
      >
        <Menu>
          <MenuItem
            icon={<AccountCircleOutlinedIcon />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>User</h2>
          </MenuItem>
          <MenuItem
            icon={<HomeOutlinedIcon color="primary" />}
            component={<Link to="/" />}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<DashboardIcon />}
            component={<Link to="dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<PaidOutlinedIcon />}
            component={<Link to="transactions" />}
          >
            Transactions
          </MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default NavSideBar;
