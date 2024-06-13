import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore6() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Initial Discussion at Arba Minch University for Digitizing Gamo and Goffa Languages"
      />
      <div className="read">
        <p>
          Wachemo University and Arba Minch University have embarked on an
          initial discussion aimed at documenting and digitizing the Gamo and
          Goffa languages. This collaborative effort seeks to preserve and
          promote the linguistic heritage of these two languages by creating
          multilingual self-study guidebooks, online courses, mobile
          applications, and audio pronunciation tools. Through their joint
          endeavor, both universities are committed to ensuring the
          accessibility and sustainability of the Gamo and Goffa languages for
          future generations.
        </p>
        <p>
          The discussion marks a significant step forward in the preservation of
          linguistic diversity in Ethiopia. By leveraging their expertise and
          resources, Wachemo University and Arba Minch University aim to empower
          the communities speaking Gamo and Goffa languages, fostering greater
          inclusivity and cultural appreciation. The initiative highlights the
          universities’ dedication to embracing and celebrating Ethiopia’s rich
          linguistic heritage while embracing modern technology to make language
          learning more accessible and engaging.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-10.57.23-PM-1024x768.jpeg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-03-08-at-10.57.22-PM-1-1024x768.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore6;
