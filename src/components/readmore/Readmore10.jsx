import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore10() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Memorandum of Understanding (MoU) signing with Werabe University"
      />
      <div className="read">
        <p>
          Wachemo University and Werabe University have formalized their
          commitment to preserving the Silte language through a Memorandum of
          Understanding (MoU) signing. This collaborative effort aims to
          document and digitize the Silte language by developing a range of
          educational resources, including multilingual self-study guidebooks,
          online courses, mobile applications, and audio pronunciation tools. By
          leveraging their collective expertise and resources, both universities
          are dedicated to ensuring the accessibility and sustainability of the
          Silte language for future generations.
        </p>
        <p>
          The signing of the MoU signifies a significant milestone in the
          preservation of linguistic diversity in Ethiopia. Through this
          partnership, Wachemo University and Werabe University demonstrate
          their shared dedication to cultural preservation and education
          accessibility. By embracing modern technology and collaborative
          efforts, they aim to empower the Silte-speaking community, foster
          greater inclusivity, and celebrate Ethiopia’s rich linguistic
          heritage.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2023/10/photo_5890818530507604757_y-1-1024x683.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/photo_5890818530507604755_y-1024x683.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore10;
