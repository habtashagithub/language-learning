import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore4() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Wachemo University Proposes Ethiopia’s Languages Documentation and Digitization Project to Ministry of Education"
      />
      <div className="read">
        <p>
          In a significant move towards preserving Ethiopia’s linguistic
          diversity, Dr. Habtamu Abebe, President of Wachemo University, has
          formally reached out to Dr. Eba Mijena, Chief Executive of Academic
          Affairs at the Ministry of Education, regarding a pioneering project
          titled “Documenting and Digitizing All the Diverse Languages of
          Ethiopia.” Dr. Habtamu Abebe entrusted the core team of this Project,
          comprising Dr. K. Sekhar, Mr. Eyasu Tilahun, Mr. Habtemariam Amare,
          and Mr. Yared Dessalegn to present the project’s objectives and
          strategies to Dr. Eba Mijena. The project aims to create multilingual
          self-study guidebooks, online courses, mobile applications, and audio
          pronunciation tools on all the Ethiopia’s diverse languages.
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
          During the discussion, emphasis was placed on fostering a tripartite
          collaboration involving the Ministry of Education, Wachemo University,
          and Public Universities/Regional and Zonal Educational Bureaus. Dr.
          Eba Mijena expressed enthusiasm and optimism about the project’s
          potential impact at the national level and conveyed a positive outlook
          on collaborating with relevant stakeholders to realize this ambitious
          endeavor. This initiative reflects a collective commitment to
          safeguarding Ethiopia’s rich linguistic heritage and ensuring its
          accessibility to future generations, underscoring the importance of
          collaborative efforts in advancing education and cultural
          preservation.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/MoE-Dr-Eba-2024-03-08-at-10.35.48-PM-1024x768.jpeg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-07-at-6.09.02-AM-1024x768.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore4;
