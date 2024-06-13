import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore13() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Memorandum of Understanding (MoU) signing with Halaba Zone"
      />
      <div className="read">
        <p>
          An Wachemo University and the Halaba Zone Administration have joined
          forces in a significant Memorandum of Understanding (MoU) signing
          ceremony aimed at documenting and digitizing the Halaba language.
          Under the leadership of Wachemo University President, Dr. Habtamu
          Abebe, and Halaba Zone Administrator, Dr. Mohammed, the MoU signifies
          a collaborative effort to preserve and promote the linguistic heritage
          of the Halaba community. The ceremony, held at the esteemed senate
          hall of Wachemo University, witnessed the presence of key
          stakeholders, including Wachemo University’s vice presidents, the core
          team of the Ethio Language Box project, directors, and the head of the
          Halaba Zone Education Office.
        </p>
        <p>
          This momentous occasion underscores the commitment of both Wachemo
          University and the Halaba Zone Administration to leveraging modern
          technology for the preservation of indigenous languages. Through the
          creation of multilingual self-study guidebooks, mobile applications,
          online courses, and audio pronunciation tools, the collaboration seeks
          to ensure the accessibility and sustainability of the Halaba language
          for future generations. The MoU signing ceremony represents a
          significant step forward in fostering linguistic diversity and
          cultural preservation in Ethiopia, reaffirming the importance of
          collaborative efforts in safeguarding the country’s rich linguistic
          heritage.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/Signing-and-showing-and-exchaning-1024x682.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/Signing-1024x682.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore13;
