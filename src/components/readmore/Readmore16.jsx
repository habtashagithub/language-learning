import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore16() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Memorandum of Understanding (MoU) signing with Dilla University"
      />
      <div className="read">
        <p>
          In a significant step towards linguistic preservation, Wachemo
          University and Dilla University have forged a Memorandum of
          Understanding (MoU) to document and digitize the Gedeo language. The
          MoU signing ceremony, held at the esteemed senate hall of Wachemo
          University, was led by Dr. Habtamu Abebe, President of Wachemo
          University, and Dr. Chirotaw Ayele, President of Dilla University. The
          collaborative effort aims to create a multilingual self-study
          guidebook, mobile application, online course, and audio pronunciation
          tools to ensure the accessibility and sustainability of the Gedeo
          language.
        </p>
        <p>
          At the signing ceremony, key representatives including Dr. Tsedeke
          Lambero, Vice President of Research and Community at Wachemo
          University, and Dr. Dereje Kifle, Vice President of Research and
          Technology Transfer at Dilla University, formally endorsed the MoU.
          The event witnessed the presence of Mr. Tekalign Tadesse, Director of
          Community Service and Engagement at Dilla University, alongside the
          core team of the Ethio Language Box Project, directors, and management
          officials from both universities. This collaborative endeavor
          exemplifies the commitment of Wachemo University and Dilla University
          to preserve linguistic diversity and foster cultural appreciation
          within the region.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/322576666_860774151927641_8188467799500096585_n-1024x682.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/322183620_575960871026061_8862239400343943901_n.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/322474890_1257388654853649_9176117368690288720_n-1024x683.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore16;
