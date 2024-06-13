import React from "react";
import Heading from "../common/heading/Heading";
import "./Readmore.css";
import Back from "../common/back/Back";
function Readmore8() {
  return (
    <>
      <Back title="" />
      <Heading
        subtitle=""
        title="Inaugural Ceremony for Gedeo Language Learning Resources"
      />
      <div className="read">
        <p>
          The inaugural ceremony for Gedeo Language Learning Resources marked a
          significant milestone in the preservation and promotion of the Gedeo
          language and culture. Held with great pomp and ceremony, the event
          celebrated the launch of a comprehensive suite of educational
          resources aimed at facilitating the learning and appreciation of the
          Gedeo language. These resources include multilingual self-study
          guidebooks, online courses, mobile applications, and audio
          pronunciation tools, all meticulously crafted to cater to diverse
          learning preferences and enhance accessibility.
        </p>
        <p>
          Attendees at the ceremony included esteemed representatives from
          academia, government officials, and members of the Gedeo community,
          all united in their commitment to preserving the linguistic heritage
          of the region. The initiative reflects a collaborative effort between
          educational institutions, language experts, and technology
          specialists, demonstrating a shared dedication to linguistic diversity
          and cultural preservation. The ceremony underscored the importance of
          language in preserving identity and fostering cultural pride,
          highlighting the significance of initiatives aimed at revitalizing
          endangered languages such as Gedeo.
        </p>
      </div>
      <Heading subtitle="Here are some of the pictures taken." title="" />

      <div className="gallary">
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/photo_5920362858917511477_y-1024x682.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/photo_5920362858917511488_y-1024x682.jpg"
          alt=""
        />
        <img
          src="https://ethiolanguagebox.com/wp-content/uploads/2023/11/12-1024x768.jpg"
          alt=""
        />
      </div>
    </>
  );
}
export default Readmore8;
