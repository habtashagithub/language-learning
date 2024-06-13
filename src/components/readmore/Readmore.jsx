import React from "react";
import "./Readmore.css";
import Back from "../common/back/Back";
import Heading from "../common/heading/Heading";
function Readmore() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Successful Translation Phase of Mareko Language Digitization"
      />
      <div className="read">
        <p>
          Under the framework of the MoU signed between Wachemo University and
          the Culture and Tourism Bureau of the Central Ethiopia Region,
          significant strides have been made in digitizing regional languages.
          Following the successful digitization of the Kebena language, the
          Mareko language digitization commenced on May 14, 2024. This
          initiative is part of the Ethio Language Box project, which aims to
          preserve and promote Ethiopia’s rich linguistic diversity through
          digital means.
        </p>
        <p>
          The translation phase of the Mareko language was meticulously
          organized and executed by the core team from Ethio Language Box, led
          by Dr. Sekhar, alongside Assistant Professor Eyasu Tilahun and Mr.
          Habtemariam. They provided comprehensive training to a dedicated group
          of translators, including Mr. Ahmed Wabeto, Mr. Kemeriya Kedir, Mr.
          Awel Era, and Mr. Dawoto Unoro. The training sessions were designed to
          ensure that the translators were well-equipped with the necessary
          skills and knowledge to accurately and effectively translate the
          Mareko language, maintaining the integrity and nuances of the original
          language.
        </p>
        <p>
          From May 14, 2024, to May 19, 2024, the translation phase progressed
          smoothly and was successfully completed within the stipulated
          timeframe. This phase involved intensive work to ensure the
          translation was precise and culturally relevant. The successful
          completion of this phase marks a significant milestone in the project,
          paving the way for further digitization efforts and the preservation
          of the Mareko language. The dedication and collaborative efforts of
          the team and translators have set a strong foundation for future
          projects aimed at preserving Ethiopia’s diverse linguistic heritage.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/3-1.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/websit-post-1024x682.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/website-pur-1024x682.jpeg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/1-1024x683.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/6-1024x768.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/website-pur-1024x682.jpeg"
          alt=""
        />
      </div>
    </>
  );
}

export default Readmore;
