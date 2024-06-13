import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore15() {
  return (
    <>
      <Back title="" />
      <Heading subtitle="" title="Gedeo Language Editing session" />
      <div className="read">
        <p>
          A productive Gedeo Language Editing session transpired from December
          26th to 31st, 2022, in alignment with directives from Dr. Habtamu
          Abebe, President of Wachemo University, and Dr. Chirotaw Ayele,
          President of Dilla University. Expert linguists from Wachemo
          University, including Dr. K. Sekhar, Mr. Eyasu Tilahun, and Mr.
          Habtemariam Amare, collaborated with a team of translators such as Mr.
          Zenebe Shote Beriso, Mr. Fikadu Nigussie, Mr. Getachew Tsegaye, and
          Mr. Desalegn Bekele, as well as editors including Mr. Mesfin Gebeyo,
          Mr. Mesfin Abebe, and Mr. Serawit Degefe. Under the coordination of
          Mr. Tekalign Tadesse, the session aimed at refining the linguistic
          nuances of the Gedeo language.
        </p>
        <p>
          Following meticulous editing, the revised material was handed over to
          expert reviewers proficient in English, Amharic, and Gedeo to ensure
          high-quality and authentic content. This collaborative effort
          underscores the commitment of both Wachemo University and Dilla
          University to preserve and promote the Gedeo language, emphasizing the
          importance of linguistic diversity and cultural heritage preservation.
          Through such initiatives, the universities aim to enhance
          accessibility and appreciation of the Gedeo language for generations
          to come.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/IMG-8582-1024x768.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2023/01/IMG-8598-1024x768.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-09-at-11.25.36-PM-1024x771.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore15;
