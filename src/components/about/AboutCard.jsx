import React from "react";
import Heading from "../common/heading/Heading";
import "./About.css";

function AboutCard() {
  return (
    <>
      <section className="aboutHome">
        <div className="container-flexSB">
          <div className="first-paragraph">
            <p>
              We are glad to announce that Wachemo University has been doing a
              cherish able service to the Ethiopian society by undertaking
              Ethiopian Languages Documentation and Revitalization mainly
              focusing on endangered languages. Ethiopia enjoys great ancestral
              languages and cultures which were flourishing in yester years and
              now the Wachemo University strives to preserve this legacy by
              doing cultural yeoman service to the country.
            </p>
            <p>
              Language Documentation and Revitalization is part of a larger
              attempt by indigenouspeople to retain their cultural strengths in
              the face of the demoralizing assaults of an all-pervasive modern,
              individualistic, materialistic, and hedonistic technological
              culture. Indigenous language teachers and activists play a pivotal
              role to save their languages and cultures from the clutches of
              such assaults.
            </p>
            <p>
              We are glad to announce that with a view to strengthening the
              unity of our country, we shall be offering series of online
              courses “Learn Ethiopian Languages – Speak with the hearts of
              Ethiopians” to enable the people of this country and foreigners to
              learn any Ethiopian language other than their mother tongue
              through the medium of English and Amharic. These online courses
              will be prepared under the able guidance of the well-known
              language Experts and linguists of the language concerned.
            </p>
            <p>
              We hope this nobel attempt will bring together the people, who are
              living in various parts of our country, promoting mutual
              understanding and fostering national unity. We are proud to
              declare that the ETHIOPIA is the first country in the WORLD to
              offer free online courses on all its country languages on a single
              platform.
            </p>
          </div>
        </div>
      </section>
      <div>
        <Heading subtitle="" title="OUR AIMS" />
        <div className="aim1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/keep-alive-8.33.png"
            alt=""
          />
          <p>
            To keep alive all Ethiopian Languages and Cultures through
            Trilingual self-study guide books, Online courses, Mobile
            applications and Audio CDs.
          </p>
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/breakdown-barr.png"
            alt=""
          />
          <p>
            To break down the language barriers among various nations and
            nationalities of Ethiopia.
          </p>
        </div>
        <div className="aim1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/understanding-cult8.33.png"
            alt=""
          />
          <p>
            To establish a better understanding of cultural practices among
            various nations and nationalities of Ethiopia.
          </p>
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/est-fur-comm8.33.png"
            alt=""
          />
          <p>
            To establish further communication between Ethiopia and the rest of
            the world.
          </p>
        </div>
        <div className="aim1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/prev-extic.png"
            alt=""
          />
          <p>To prevent the extinction of Ethiopian Languages and Cultures.</p>
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/unity-in-diversity.png"
            alt=""
          />
          <p>To promote the unity in diversity in the land of Ethiopia.</p>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
