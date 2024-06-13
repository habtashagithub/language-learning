import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore9() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Training Siltie Translators for Documenting and Digitizing the Siltie Language"
      />
      <div className="read">
        <p>
          Wachemo University has taken a proactive approach to preserving the
          Siltie language by conducting training sessions for Siltie
          translators. The aim of these sessions is to equip translators with
          the necessary skills and tools to document and digitize the Siltie
          language effectively. Utilizing a web application developed
          specifically for this purpose, participants are guided through various
          aspects of language documentation and digitization, including the
          creation of multilingual self-study materials, online courses, mobile
          applications, and audio pronunciation tools.
        </p>
        <p>
          Through this initiative, Wachemo University seeks to empower Siltie
          translators to play a pivotal role in preserving their language and
          cultural heritage. By providing training sessions facilitated by
          experts in the field and leveraging modern technology, the university
          aims to ensure the accessibility and sustainability of the Siltie
          language for generations to come. This collaborative effort
          underscores Wachemo University’s commitment to linguistic diversity
          and cultural preservation, as well as its dedication to harnessing
          technology for the greater good of society.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-11.36.47-PM-1024x768.jpeg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2023/11/WhatsApp-Image-2024-03-08-at-11.35.09-PM-1024x768.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore9;
