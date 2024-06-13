import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore1() {
  return (
    <>
      <Back title="" />
      <Heading subtitle="" title="Kabena Language Editing Phase Completed" />
      <div className="read">
        <p>
          Following the successful completion of the “Translation Phase:
          Successful Kabena Language Digitization,” an essential editing session
          was held from May 6 to May 12, 2024. This phase focused on refining
          and finalizing the translated content produced by Ato Muze Hussain,
          Mr. Hadi Diga, Mr. Jilalu Fadlu, and Ms. Ramzia Shemsu, ensuring its
          accuracy and cultural relevance.
        </p>
        <p>
          The appointed editing team, responsible for meticulously reviewing and
          enhancing the translated materials, comprised Mr. Mubarek Akmel, Ms.
          Zulfa Nesru, Ms. Fejru Bedru, and Mr. Mahmmud Misbah. These editors,
          along with the original translators, received comprehensive training
          from the Ethio Language Box project’s core team. Led by Dr. K. Sekhar
          and supported by Mr. Eyasu Tilahun and Mr. Habtemariam Amare, the
          training sessions equipped the editors with advanced skills in
          language accuracy, cultural context, and consistency.
        </p>
        <p>
          During the editing phase, the editors worked closely to ensure that
          the translated Kabena Language content adhered to predetermined
          standards and accurately represented the cultural and linguistic
          nuances of the original language. This collaboration between Wachemo
          University and the Culture and Tourism Office of the Central Ethiopia
          Regional State underscores a strong commitment to cultural
          preservation and effective communication within the region.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/2-1-1024x576.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/9-1024x576.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/10-1024x576.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/19-1024x768.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/31-1024x768.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/42-1024x768.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore1;
