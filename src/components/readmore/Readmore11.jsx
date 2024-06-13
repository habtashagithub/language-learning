import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore11() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Memorandum of Understanding (MoU) signing with Yem Special Woreda"
      />
      <div className="read">
        <p>
          Wachemo University’s recent Memorandum of Understanding (MoU) signing
          with Yem Special Woreda marks a significant milestone in the
          preservation and promotion of the Yem language and culture. Through
          this collaborative effort, the university aims to document and
          digitize the Yem language by leveraging modern technological tools.
          The creation of multilingual self-study guidebooks, mobile
          applications, online courses, and audio pronunciation resources will
          serve as invaluable resources for both Yem speakers and enthusiasts
          seeking to learn about this unique linguistic heritage.
        </p>
        <p>
          This partnership underscores Wachemo University’s commitment to
          fostering linguistic diversity and cultural preservation. By
          harnessing the power of technology, the university endeavors to make
          the Yem language more accessible and widely available, transcending
          geographical barriers and ensuring its continued vitality for future
          generations. Through this collaborative endeavor, Wachemo University
          and Yem Special Woreda are poised to make a lasting impact on the
          documentation and digitization of the Yem language, paving the way for
          its recognition and appreciation on a broader scale.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/02/Sign-1024x682.jpeg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore11;
