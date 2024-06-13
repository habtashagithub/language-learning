import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore5() {
  return (
    <>
      <Back title="" />
      <Heading subtitle="" title="Kabena Language Editing Phase Completed" />
      <div className="read">
        <p>
          Wachemo University and Wolaita Sodo University have joined forces in a
          collaborative effort aimed at documenting and digitizing the Wolaita
          language. Through the creation of multilingual self-study guidebooks,
          online courses, mobile applications, and audio pronunciation tools,
          this partnership seeks to preserve and promote the linguistic heritage
          of the Wolaita community. By leveraging their combined expertise and
          resources, both universities are committed to ensuring the
          accessibility and sustainability of the Wolaita language for
          generations to come.
        </p>
        <p>
          This collaborative initiative underscores the universities’ shared
          commitment to linguistic diversity and cultural preservation. By
          harnessing the power of technology and education, Wachemo and Wolaita
          Sodo Universities are taking proactive steps to empower the Wolaita
          community and promote greater inclusivity in language learning.
          Through their joint efforts, they aim to make significant strides in
          the documentation and digitization of the Wolaita language, enriching
          the cultural tapestry of Ethiopia and beyond.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-10.43.28-PM-1024x768.jpeg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-03-08-at-10.43.30-PM-1-1-768x1024.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore5;
