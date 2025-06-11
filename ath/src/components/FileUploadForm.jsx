import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FileUploadSection from "./FileUploadSection";

const FileUploadForm = () => {
  const sections = [
    {
      title: "มีรอยเเตกร้าวที่ผิดปกติบริเวณ เสา คาน พื้น",
      description:
        "มีรอยแตกร้าวขนาดใหญ่และลึกผิดปกติบริเวณเสา คาน และพื้น ซึ่งอาจเกิดจากการทรุดตัวของโครงสร้างหรืวัสดุเสื่อมสภาพตามกาลเวลาควรเร่งดำเนินการตรวจสอบโดยวิศวกรโครงสร้างเพื่อประเมินความเสี่ยงและวางแผนซ่อมแซมอย่างเร่งด่วน",
      defaultFound: true,
    },
    {
      title: "มีรอยเเตกร้าวแบบตาข่าย (Honeycomb cracks)",
      description:
        "มีรอยแตกนี้จะปรากฏเป็นแนวแตกหลายเส้นที่ตัดกันในหลายทิศทางสร้างเป็นช่องว่างขนาดเล็กที่มีรูปร่างคล้ายเซลล์รังผึ้งความลึกของรอยแตกมักไม่เท่ากันและอาจแพร่กระจายไปตามพื้นผิวควรเร่งดำเนินการตรวจสอบโดยวิศกรโครงสร้างเพื่อประเมินความเสี่ยงและวางแผนซ่อมแซมอย่างเร่งด่วน",
      defaultFound: false,
    },
    {
      title: "มีการเปลื่อยสลายของคอนกรีต(Spalling)",
      description:
        "มีคอนกรีตหลุดออกเป็นแผ่นหรือชิ้นขนาดตั้งแต่เหรียญไปจนถึงฝ่ามือมีความหนาที่หลุดประมาณ 1-5 ซม.หรือมากกว่าเเละขอบที่มักไม่เรียบมีรอยหยักหรือขรุขระควรเร่งดำเนินการตรวจสอบโดยวิศวกรโครงสร้างเพื่อประเมินความเสี่ยงเเละวางแผนซ่อมเเซมอย่างเร่งด่วน",
      defaultFound: true,
    },
    {
      title: "มีการซึมน้ำผ่านคอนกรีต",
      description:
        "มีลักษณะพื้นผิวคอนกรีตมีสีเข้มกว่าปกติ(เปียกชื้น)คราบน้ำไหลเป็นเส้นหรือรูปแบบไม่สม่ำเสมอ ซึ่งบริเวณที่เปียกอาจขยายกว้างขึ้นเมื่อฝนตกเเละสีของคอนกรีตเทาเข้ม ควรดำเนินการตรวจสอบโดยวิศวกรโครงสร้างเพื่อประเมินความเสี่ยงเเละวางแผนซ่อมแซมอย่างเร่งด่วน ",
      defaultFound: false,
    },
    {
      title: "มีคราบขาวเกลือแร่ (Efflorescence)",
      description:
        "มีลักษณะคราบสีขาว ขาวนวล หรือเทาอ่อน บางครั้งอาจเป็นสีเหลือง น้ำตาล หรือเขียวอ่อนขึ้นกับชนิดเกลือเเร่จะเป็นผงละเอียดหรือผลึกเล็กๆบนผิวคอนกรีตหรือแผ่นบางๆที่สะสมหนาเป็นชั้นๆควรเร่งดำเนินการตรวจสอบโดยวิศวกรโครงสร้างเพื่อประเมินความเสี่ยงเเละวางแผนซ่อมแซมอย่างเร่งด่วน",
      defaultFound: true,
    },
  ];

  const handleNextPage = () => {
    console.log("Navigate to next page");
  };

  return (
    <div className="file-upload-form">
      <div className="form-header">
        <h4 className="form-title">โครงสร้างอาคาร/ตึก</h4>
      </div>

      <Container fluid>
        {sections.map((section, index) => (
          <Row key={index + 1} className="mb-4">
            <Col>
              <FileUploadSection
                sectionNumber={index + 1}
                title={section.title}
                description={section.description}
                defaultFound={section.defaultFound}
              />
            </Col>
          </Row>
        ))}

        <Row className="justify-content-end">
          <Col xs="auto">
            <Button
              className="next-page-btn"
              onClick={handleNextPage}
              size="lg"
            >
              Next page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FileUploadForm;
