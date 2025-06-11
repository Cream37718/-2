import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Sidebar, FileUploadForm } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Sidebar.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`main-content ${sidebarOpen ? "shifted" : ""}`}
      >
        {/*<header className="main-header">
          <div className="d-flex align-items-center">
            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <FaBars />
            </button>
            <h1 className="page-title">Dashboard</h1>
          </div>
          <div className="header-subtitle">
            การทดสอบเพื่อการเข้าถึง
          </div>
        </header>*/}

        {/* Main content area */}
        <main className="main-body">
          <Container fluid>
            <FileUploadForm />
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
