import React from "react";

import {
  FaTachometerAlt,
  FaClipboardList,
  FaUsers,
  FaCalendarAlt,
  FaFolder,
  FaSearch,
  FaHome,
  FaBell,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: FaTachometerAlt, label: "งานที่ได้รับมอนหมาย"},
    { icon: FaClipboardList, label: "ประวัติการทดสอบ", active: true  },
    { icon: FaCalendarAlt, label: "ปฏิทินงานการทดสอบ" },
    { icon: FaFolder, label: "ระบบจัดเก็บเอกสาร/ฟอร์ม" },
    { icon: FaSearch, label: "คู่มือการทดสอบ" },
    { icon: FaHome, label: "เเนวทางการทดสอบ" },
    { icon: FaBell, label: "แจ้งเตือน & ติดต่อกลุ่ม" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="sidebar-logo">
                <div className="logo-icon">
                  <FaHome />
                </div>
              </div>
              {isOpen && (
                <div className="sidebar-title">
                  <h5 className="mb-0">ATTH</h5>
                  <small>Assistive Tech Test Hub</small>
                </div>
              )}
            </div>

            {/* ปุ่มปิด Sidebar */}
            
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${item.active ? "active" : ""}`}
                  title={!isOpen ? item.label : ""}
                >
                  <span className="nav-icon">
                    <item.icon />
                  </span>
                  {isOpen && <span className="nav-text">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer info when expanded */}
        {isOpen && (
          <div className="sidebar-footer">
            <div className="user-info">
              <div className="user-avatar">
                <FaUsers />
              </div>
              <div className="user-details">
                <div className="user-name">ผู้ใช้งาน</div>
                <div className="user-role">Administrator</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
