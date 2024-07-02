import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { FaQuestionCircle } from "react-icons/fa";
import { MdDashboard, MdOutlineManageAccounts } from "react-icons/md";
import sidebarBg from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const { collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <FaQuestionCircle size={"2em"} color="red" />
            <span>Quizz Management</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard />}
              // suffix={<span className="badge red">New</span>}
            >
              Dashboard
              <Link to="/admins" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<MdOutlineManageAccounts />} title={"Features"}>
              <MenuItem>
                Users Management
                <Link to="/admins/manageUser" />
              </MenuItem>
              <MenuItem>Questions Management</MenuItem>
              <MenuItem>Answer Management</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        {/* <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                viewSource
              </span>
            </a>
          </div>
        </SidebarFooter> */}
      </ProSidebar>
    </>
  );
};

export default SideBar;
