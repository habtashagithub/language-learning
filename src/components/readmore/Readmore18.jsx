import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore18() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Memorandum of Understanding (MoU) signing with Arsi University"
      />
      <div className="read">
        <p>
          In a momentous endeavor to preserve and promote the Afaan Oromoo
          language, Wachemo University and Arsi University have joined forces
          through the signing of a Memorandum of Understanding (MoU). The
          ceremony, held at the esteemed senate hall of Arsi University, was led
          by Dr. Habtamu Abebe, President of Wachemo University, and Dr. Duguma
          Adugna Debele, President of Arsi University. The signing of the MoU
          marks a significant milestone in the collaborative efforts to document
          and digitize Afaan Oromoo, with a focus on creating a multilingual
          self-study guidebook, mobile application, online course, and audio
          pronunciation tools.
        </p>
        <p>
          Key representatives, including Dr. Tsedeke Lambero, Vice President of
          Research and Community at Wachemo University, and Dr. Adem Kedir
          Geleto, Vice President of Research and Community Service at Arsi
          University, formally endorsed the MoU. The ceremony witnessed the
          participation of the core team of the Ethio Language Box Project,
          comprising Dr. K. Sekhar, Mr. Eyasu Tilahun, and Mr. Habtemariam
          Amare, alongside Dr. Wako Geda, Dean of the College of Social Science
          at Arsi University, and faculty members from the Afaan Oromoo Language
          Department. This collaboration reflects a shared commitment between
          Wachemo University and Arsi University to safeguard and celebrate the
          linguistic diversity of Ethiopia, ensuring that the Afaan Oromoo
          language remains vibrant and accessible for generations to come.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/MOU10.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/MOU6.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/MOU5.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore18;
