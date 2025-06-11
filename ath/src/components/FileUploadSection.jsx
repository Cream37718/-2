import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";

const FileUploadSection = ({
  title,
  description,
  sectionNumber,
  defaultFound = false,
}) => {
  const [hasDefect, setHasDefect] = useState(defaultFound);
  const [severity, setSeverity] = useState("ระดับต่ำ");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="upload-section">
      <div className="section-header">
        <h6 className="section-title">
          <span className="section-number">{sectionNumber}.</span>
          {title}
        </h6>
        <p className="section-description">{description}</p>
      </div>

      <div className="section-content">
        {/* Radio buttons */}
        <div className="defect-options">
          <Form.Check
            type="radio"
            id={`found-${sectionNumber}`}
            name={`defect-${sectionNumber}`}
            label="พบรอยแตกร้าว"
            checked={hasDefect}
            onChange={() => setHasDefect(true)}
            className="defect-radio defect-found"
          />
          <Form.Check
            type="radio"
            id={`not-found-${sectionNumber}`}
            name={`defect-${sectionNumber}`}
            label="ไม่พบรอยแตกร้าว"
            checked={!hasDefect}
            onChange={() => setHasDefect(false)}
            className="defect-radio defect-not-found"
          />

          {/* Severity dropdown */}
          <Form.Select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="severity-select"
          >
            <option value="ระดับต่ำ">ระดับต่ำ</option>
            <option value="ระดับกลาง">ระดับกลาง</option>
            <option value="ระดับสูง">ระดับสูง</option>
          </Form.Select>
        </div>

        {/* File upload area */}
        <div
          className={`file-upload-area ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="upload-content">
            <div className="upload-icon">
              {dragActive ? <FaCheckCircle /> : <FaCloudUploadAlt />}
            </div>
            <div className="upload-text">
              <p className="upload-title">
                Choose a file or drag & drop it here
              </p>
              <p className="upload-subtitle">
                JPEG, PNG, PDF, and MP4 formats, up to 50MB
              </p>
            </div>
          </div>
          <input
            type="file"
            className="file-input"
            accept=".jpeg,.jpg,.png,.pdf,.mp4"
            onChange={(e) => {
              if (e.target.files[0]) {
                console.log("File selected:", e.target.files[0]);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUploadSection;
