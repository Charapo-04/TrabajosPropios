import React from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

const Interaction = () => {
  const handleNoHover = (e) => {
    e.target.style.position = "absolute";
    e.target.style.top = `${Math.random() * 80 + 10}%`;
    e.target.style.left = `${Math.random() * 80 + 10}%`;
  };

  const handleYesClick = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "CERTIFICADO DE PAREJA 💕",
                  bold: true,
                  size: 48,
                  color: "000080",
                }),
              ],
              alignment: "center",
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Otorgado a:",
                  italics: true,
                  size: 28,
                  color: "666666",
                }),
              ],
              alignment: "center",
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Ruthy y Emanuel",
                  bold: true,
                  size: 36,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
              alignment: "center",
            }),
            new Paragraph("\n\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Este certificado acredita que Ruthy y Emanuel son oficialmente pareja desde este momento. 💕",
                  size: 24,
                  color: "000000",
                }),
              ],
              alignment: "center",
            }),
            new Paragraph("\n\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "——————————————",
                  size: 24,
                  color: "000080",
                }),
              ],
              alignment: "center",
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Firma de los novios",
                  italics: true,
                  size: 20,
                  color: "666666",
                }),
              ],
              alignment: "center",
            }),
            new Paragraph("\n\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Fecha: 30/11/2024",
                  italics: true,
                  size: 20,
                  color: "000000",
                }),
              ],
              alignment: "center",
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Certificado_de_Pareja.docx");
    });

    alert("¡Sabía que dirías que sí! 😍");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¿Quieres ser mi novia? 💕</h1>
      <div style={{ marginTop: "30px" }}>
        {/* Botón "No" que se mueve */}
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            position: "relative",
          }}
          onMouseOver={handleNoHover}
        >
          No
        </button>
        {/* Botón "Sí" que genera el certificado */}
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            marginLeft: "20px",
            cursor: "pointer",
          }}
          onClick={handleYesClick}
        >
          Sí
        </button>
      </div>
    </div>
  );
};

export default Interaction;

