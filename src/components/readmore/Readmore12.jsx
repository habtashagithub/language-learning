import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore12() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Halaba Language Editing Session: Progress and Validation Ahead"
      />
      <div className="read">
        <p>
          An intensive Halaba Language Editing session convened from May 22 to
          27, 2023, under the auspices of Wachemo University President, Dr.
          Habtamu Abebe, and Halaba Zone Administrator, Dr. Mohammed. Led by
          linguistic experts from Wachemo University, including Dr. K. Sekhar,
          Mr. Eyasu Tilahun, Mr. Habteramraim Amarer, and Mr. Abera, alongside a
          dedicated team of translators and editors, the session focused on
          refining and enhancing the Halaba language. The collaborative effort
          involved translators such as Mr. Muhammed Mokshe, Mr. Mohammedsani
          Bergena, Mr. Shemsedin Bamud, and Editors including Sh/L. Bedru
          Hassen, Mr. Jemal Anicha, Mr. Mohammed Aman, and Mr. Desta Buruda.
          Following meticulous editing, the manuscript has been submitted to
          reviewers proficient in English, Amharic, and Halaba for further
          validation.
        </p>
        <p>
          After successful completion, the edited material has been forwarded to
          reviewers for final assessment, marking a crucial milestone in the
          journey to preserve and promote the Halaba language. Looking ahead, a
          validation workshop is scheduled to take place in the coming weeks,
          further affirming the commitment to linguistic diversity and cultural
          preservation in the region. This collaborative endeavor underscores
          the dedication of Wachemo University and the Halaba Zone
          Administration to harnessing collective expertise for the advancement
          of indigenous languages, paving the way for enhanced accessibility and
          appreciation of the Halaba linguistic heritage.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/IMG_0830-1024x768.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/IMG_0895-1024x768.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore12;
