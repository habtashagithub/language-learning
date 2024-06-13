import React from "react";
import Heading from "../common/heading/Heading";
import "./Homes.css";
import { Link } from "react-router-dom";
function Homes() {
  return (
    <>
      <Heading
        subtitle="Select The Button down here what you currently known language and what do you what you learn"
        title=""
      />
      <div className="selected">
        <div>
          <h1>I Currently Known Language</h1>
          <div className="select-box">
            <select className="selections">
              <option>English</option>
              <option>Amharic</option>
              <option>Adarigna</option>
              <option>Afaan Oromo</option>
              <option>Afarigna</option>
              <option>Agewigna</option>
              <option>Amharic Through English</option>
              <option>Anfillo</option>
              <option>Anuak</option>
              <option>Arbore</option>
              <option>Argobba</option>
              <option>Ari</option>
              <option>Awi</option>
              <option>Awngi Through English</option>
              <option>Bambassi</option>
              <option>Bench</option>
              <option>Berta</option>
              <option>Birale</option>
              <option>Boro</option>
              <option>Chaha</option>
              <option>Chara</option>
              <option>Daasanech</option>
              <option>Dime</option>
              <option>Gamo</option>
              <option>Goffa</option>
              <option>Ganza</option>
              <option>Gedeo</option>
              <option>Gumuz</option>
              <option>Gurage</option>
              <option>Guragigna Through English</option>
              <option>Hadiyya</option>
              <option>Halaba</option>
              <option>Hammer</option>
              <option>Kebena</option>
              <option>Kambata</option>
              <option>Kara</option>
              <option>Kefa</option>
              <option>Kemant</option>
              <option>Komo</option>
              <option>Konso</option>
              <option>Koorete</option>
              <option>Kunama</option>
              <option>Kwegu</option>
              <option>Libido</option>
              <option>Majang</option>
              <option>Mareko</option>
              <option>Meen</option>
              <option>Melo</option>
              <option>Mursi</option>
              <option>Nayi</option>
              <option>Nuer</option>
              <option>Nyangatom</option>
              <option>Opuuo</option>
              <option>Oyda</option>
              <option>Saho</option>
              <option>Shakacho</option>
              <option>Sheko</option>
              <option>Sidaamu Afoo</option>
              <option>Siltie</option>
              <option>Siltie Through English</option>
              <option>Soddo</option>
              <option>Somali</option>
              <option>Suri</option>
              <option>Tabaiso</option>
              <option>Tambarsa</option>
              <option>Tigrigna</option>
              <option>Tigrigna Through English</option>
              <option>Tsamai</option>
              <option>Uduk</option>
              <option>Wolaita</option>
              <option>Xamtagna</option>
              <option>Yem</option>
              <option>Zay</option>
              <option>Zayse</option>
            </select>
            <span className="icon-container"></span>
          </div>
        </div>
        <div className="selection1">
          <h1>I Want to Learn Language</h1>
          <div className="select-box">
            <select className="selections">
              <option>English</option>
              <option>Amharic</option>
              <option>Adarigna</option>
              <option>Afaan Oromo</option>
              <option>Afarigna</option>
              <option>Agewigna</option>
              <option>Amharic Through English</option>
              <option>Anfillo</option>
              <option>Anuak</option>
              <option>Arbore</option>
              <option>Argobba</option>
              <option>Ari</option>
              <option>Awi</option>
              <option>Awngi Through English</option>
              <option>Bambassi</option>
              <option>Bench</option>
              <option>Berta</option>
              <option>Birale</option>
              <option>Boro</option>
              <option>Chaha</option>
              <option>Chara</option>
              <option>Daasanech</option>
              <option>Dime</option>
              <option>Gamo</option>
              <option>Goffa</option>
              <option>Ganza</option>
              <option>Gedeo</option>
              <option>Gumuz</option>
              <option>Gurage</option>
              <option>Guragigna Through English</option>
              <option>Hadiyya</option>
              <option>Halaba</option>
              <option>Hammer</option>
              <option>Kebena</option>
              <option>Kambata</option>
              <option>Kara</option>
              <option>Kefa</option>
              <option>Kemant</option>
              <option>Komo</option>
              <option>Konso</option>
              <option>Koorete</option>
              <option>Kunama</option>
              <option>Kwegu</option>
              <option>Libido</option>
              <option>Majang</option>
              <option>Mareko</option>
              <option>Meen</option>
              <option>Melo</option>
              <option>Mursi</option>
              <option>Nayi</option>
              <option>Nuer</option>
              <option>Nyangatom</option>
              <option>Opuuo</option>
              <option>Oyda</option>
              <option>Saho</option>
              <option>Shakacho</option>
              <option>Sheko</option>
              <option>Sidaamu Afoo</option>
              <option>Siltie</option>
              <option>Siltie Through English</option>
              <option>Soddo</option>
              <option>Somali</option>
              <option>Suri</option>
              <option>Tabaiso</option>
              <option>Tambarsa</option>
              <option>Tigrigna</option>
              <option>Tigrigna Through English</option>
              <option>Tsamai</option>
              <option>Uduk</option>
              <option>Wolaita</option>
              <option>Xamtagna</option>
              <option>Yem</option>
              <option>Zay</option>
              <option>Zayse</option>
            </select>
            <span className="icon-container"></span>
          </div>
        </div>
        <div className="btns">
          <button className="primary-btnn">
            START LEARINING <i className="fa fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <Heading subtitle="" title="PROGRESSIVE JOURNEY" />
      <div className="progres1">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/3-1.jpg"
            alt=""
          />
          <h1>Successful Translation Phase of Mareko Language Digitization</h1>
          <p>
            Under the framework of the MoU signed between Wachemo University and
            the Culture and Tourism Bureau of the Central Ethiopia Region,
            significant strides have been made in digitizing regional
            languages....
          </p>
          <Link className="readmore" to="/readmore">
            Read More..
          </Link>
          <span>May 14, 2024</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/8-2-1024x576.jpg"
            alt=""
          />
          <h1>Kabena Language Editing Phase Completed</h1>
          <p>
            Following the successful completion of the “Translation Phase:
            Successful Kabena Language Digitization,” an essential editing
            session was held from May 6 to May 12, 2024. This phase focused on
            refining...
          </p>
          <Link className="readmore" to="/readmore1">
            Read More..
          </Link>
          <span>May 5, 2024</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/05/13-for-featured-image.jpg"
            alt=""
          />
          <h1>
            “Completion of Translation Phase: Successful Kabena Language
            Digitization”
          </h1>
          <p>
            As soon the signing of a Memorandum of Understanding (MoU) between
            Wachemo University and the Culture and Tourism Office of the Central
            Ethiopia Regional State, an essential preparatory step involved...
          </p>
          <Link className="readmore" to="/readmore2">
            Read More..
          </Link>
          <span>April 27, 2024</span>
        </div>
      </div>
      <div className="progres2">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/04/7.jpg"
            alt=""
          />
          <h1>
            Collaborative Efforts in Documenting and Digitizing Central
            Ethiopia’s Linguistic Heritage
          </h1>
          <p>
            An agreement has been reached between Wachemo University and the
            Central Ethiopia Region Culture and Tourism Bureau to undertake the
            documentation and digitization of Mareko, Kabena, and Gurage
            languages, leveraging...
          </p>
          <Link className="readmore" to="/readmore3">
            Read More..
          </Link>
          <span>April 17, 2024</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/MoE-Dr-Eba-2024-03-08-at-10.35.48-PM-1024x768.jpeg"
            alt=""
          />
          <h1>
            Wachemo University Proposes Ethiopia’s Languages Documentation and
            Digitization Project to Ministry of Education
          </h1>
          <p>
            In a significant move towards preserving Ethiopia’s linguistic
            diversity, Dr. Habtamu Abebe, President of Wachemo University, has
            formally reached out to Dr. Eba Mijena, Chief Executive of Academic
            Affairs at...
          </p>
          <Link className="readmore" to="/readmore4">
            Read More..
          </Link>
          <span>March 6, 2024</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-10.43.28-PM-1024x768.jpeg"
            alt=""
          />
          <h1>
            Wachemo and Wolaita Sodo Universities Collaborate on Digitizing
            Wolaita Language
          </h1>
          <p>
            Wachemo University and Wolaita Sodo University have joined forces in
            a collaborative effort aimed at documenting and digitizing the
            Wolaita language. Through the creation of multilingual self-study
            guidebooks, online courses,...
          </p>
          <Link className="readmore" to="/readmore5">
            Read More..
          </Link>
          <span>February 29, 2024</span>
        </div>
      </div>
      <div className="progres3">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-10.57.23-PM-1024x768.jpeg"
            alt=""
          />
          <h1>
            Initial Discussion at Arba Minch University for Digitizing Gamo and
            Goffa Languages
          </h1>
          <p>
            Wachemo University and Arba Minch University have embarked on an
            initial discussion aimed at documenting and digitizing the Gamo and
            Goffa languages. This collaborative effort seeks to preserve and
            promote...
          </p>
          <Link className="readmore" to="/readmore6">
            Read More..
          </Link>
          <span>February 20, 2024</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/427975286_778566010975163_201635191150900160_n-2-1024x682.jpg"
            alt=""
          />
          <h1>
            Successful Yem Language Editing Session: A Step Towards Linguistic
            Preservation
          </h1>
          <p>
            A productive editing session for the Yem language took place from
            February 12th to February 17th, 2024, under the guidance of Wachemo
            University President, Dr. Habtamu Abebe, and Yem...
          </p>
          <Link className="readmore" to="/readmore7">
            Read More..
          </Link>
          <span>February 12, 2024</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/photo_5920362858917511477_y-1024x682.jpg"
            alt=""
          />
          <h1>Inaugural Ceremony for Gedeo Language Learning Resources</h1>
          <p>
            The inaugural ceremony for Gedeo Language Learning Resources marked
            a significant milestone in the preservation and promotion of the
            Gedeo language and culture. Held with great pomp and ceremony,...
          </p>
          <Link className="readmore" to="/readmore8">
            Read More..
          </Link>
          <span>November 14, 2023</span>
        </div>
      </div>
      <div className="progres4">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-11.36.47-PM-300x225.jpeg"
            alt=""
          />
          <h1>
            Training Siltie Translators for Documenting and Digitizing the
            Siltie Language
          </h1>
          <p>
            Wachemo University has taken a proactive approach to preserving the
            Siltie language by conducting training sessions for Siltie
            translators. The aim of these sessions is to equip translators with
            the...
          </p>
          <Link className="readmore" to="/readmore9">
            Read More..
          </Link>
          <span>November 7, 2023</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/photo_5890818530507604755_y-1024x683.jpg"
            alt=""
          />
          <h1>
            Memorandum of Understanding (MoU) signing with Werabe University
          </h1>
          <p>
            Wachemo University and Werabe University have formalized their
            commitment to preserving the Silte language through a Memorandum of
            Understanding (MoU) signing. This collaborative effort aims to
            document and digitize the...
          </p>
          <Link className="readmore" to="/readmore10">
            Read More..
          </Link>
          <span>October 25, 2023</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/02/Sign-1024x682.jpeg"
            alt=""
          />
          <h1>
            Memorandum of Understanding (MoU) signing with Yem Special Woreda
          </h1>
          <p>
            Wachemo University’s recent Memorandum of Understanding (MoU)
            signing with Yem Special Woreda marks a significant milestone in the
            preservation and promotion of the Yem language and culture. Through
            this collaborative...
          </p>
          <Link className="readmore" to="/readmore11">
            Read More..
          </Link>
          <span>May 29, 2023</span>
        </div>
      </div>
      <div className="progres5">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/IMG_0830-1024x768.jpg"
            alt=""
          />
          <h1>
            Halaba Language Editing Session: Progress and Validation Ahead
          </h1>
          <p>
            An intensive Halaba Language Editing session convened from May 22 to
            27, 2023, under the auspices of Wachemo University President, Dr.
            Habtamu Abebe, and Halaba Zone Administrator, Dr. Mohammed. Led...
          </p>
          <Link className="readmore" to="/readmore12">
            Read More..
          </Link>
          <span>May 22, 2023</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/Signing-1024x682.jpg"
            alt=""
          />
          <h1>Memorandum of Understanding (MoU) signing with Halaba Zone</h1>
          <p>
            Wachemo University and the Halaba Zone Administration have joined
            forces in a significant Memorandum of Understanding (MoU) signing
            ceremony aimed at documenting and digitizing the Halaba language.
            Under the leadership...
          </p>
          <Link className="readmore" to="/readmore13">
            Read More..
          </Link>
          <span>May 19, 2023</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/Validation-1024x576.jpeg"
            alt=""
          />
          <h1>
            Validation Workshop Ensures Quality of Gedeo Language Learning
            Resources
          </h1>
          <p>
            In a significant step towards ensuring the accuracy and reliability
            of Gedeo language learning resources, Dilla University hosted a
            validation workshop on February 11, 2023. The workshop, conducted
            under the...
          </p>
          <Link className="readmore" to="/readmore14">
            Read More..
          </Link>
          <span>February 11, 2023</span>
        </div>
      </div>
      <div className="progres6">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/IMG-8582-1024x768.jpg"
            alt=""
          />
          <h1>Gedeo Language Editing session</h1>
          <p>
            A productive Gedeo Language Editing session transpired from December
            26th to 31st, 2022, in alignment with directives from Dr. Habtamu
            Abebe, President of Wachemo University, and Dr. Chirotaw Ayele,
            President...
          </p>
          <Link className="readmore" to="/readmore15">
            Read More..
          </Link>
          <span>January 20, 2023</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/322576666_860774151927641_8188467799500096585_n-1024x682.jpg"
            alt=""
          />
          <h1>
            Memorandum of Understanding (MoU) signing with Dilla University
          </h1>
          <p>
            In a significant step towards linguistic preservation, Wachemo
            University and Dilla University have forged a Memorandum of
            Understanding (MoU) to document and digitize the Gedeo language. The
            MoU signing ceremony,...
          </p>
          <Link className="readmore" to="/readmore16">
            Read More..
          </Link>
          <span>December 26, 2022</span>
        </div>
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/IMG-6193-1024x768.jpg"
            alt=""
          />
          <h1>Comprehensive Training Program for Afaan Oromoo Translators</h1>
          <p>
            In a concerted effort to preserve and digitize the rich cultural
            heritage of the Afaan Oromoo language, Wachemo University and Arsi
            University have initiated collaborative measures following the
            signing of...
          </p>
          <Link className="readmore" to="/readmore17">
            Read More..
          </Link>
          <span>April 14, 2022</span>
        </div>
      </div>
      <div className="progres1">
        <div className="p1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2024/03/MOU10.jpg"
            alt=""
          />
          <h1>
            Memorandum of Understanding (MoU) signing with Arsi University
          </h1>
          <p>
            In a momentous endeavor to preserve and promote the Afaan Oromoo
            language, Wachemo University and Arsi University have joined forces
            through the signing of a Memorandum of Understanding (MoU). The...
          </p>
          <Link className="readmore" to="/readmore18">
            Read More..
          </Link>
          <span>March 8, 2022</span>
        </div>
      </div>
      <Heading subtitle="" title="ETHIOPIAN LANGUAGES" />
      <div className="languages">
        <p>
          <strong>
            “Ethiopian Languages Box – Learn Ethiopian Languages and Explore
            Cultures”
          </strong>
          is designed to provide an accessible means for both Ethiopians and
          foreigners to learn any of Ethiopia’s diverse languages while also
          delving into some of the country’s well-known cultural practices. This
          exciting venture invites individuals to immerse themselves in
          Ethiopia’s linguistic and cultural richness. We believe that dedicated
          learners will find this a concise and effective tool for mastering all
          Ethiopian languages with ease and structure.
        </p>
        <p>
          Ethiopia, situated in the Horn of Africa, boasts remarkable linguistic
          diversity, with over 84 distinct languages spoken throughout the
          nation. The blending of these diverse languages and cultures has
          shaped a multifaceted and captivating national identity. Ethiopians
          hold their cultural heritage in high esteem, celebrating this
          diversity through festivals, music, dance, and the preservation of
          age-old traditions passed down through generations.”
        </p>
      </div>
      <Heading subtitle="" title="CURRENTLY AVAILABLE ONLINE COURSES" />
      <div className="list">
        <ul>
          <li>Afan Oromo</li>
          <li>Sidaamu Afoo</li>
          <li>Gedeo</li>
          <li>Hadiyyisa</li>
        </ul>
        <ul>
          <li>Wolaita</li>
          <li>Amharic</li>
          <li>Awi</li>
          <li>Halaba</li>
        </ul>
        <ul>
          <li>Yem</li>
          <li>Siltie</li>
          <li>Kambaatissa</li>
          <li>Tambarsa</li>
        </ul>
      </div>
      <div className="para">
        <p>
          Welcome to the realm of free online courses on all the 84 Ethiopian
          Languages at one place through the national-level initiative
          “Ethiopian Languages Box – Learn Ethiopian Languages and Explore
          Cultures“, where we offer you the key to unlock the beauty and depth
          of Ethiopian linguistic diversity and cultural richness. Imagine the
          ability to seamlessly bridge the gap between your known language and
          any unfamiliar Ethiopian language, all while following a clear and
          systematic approach. These online courses have been meticulously
          crafted by seasoned language teaching professionals and esteemed
          linguistic experts, ensuring a high-quality learning experience with
          several unique features to Speak to Peak all the Ethiopian Languages.
        </p>
        <p>
          It is not a product of the mill like the other online courses
          available in the market. It is not based on the translation method
          that is usually followed in other online courses! The assumed
          sentences between first person and second person in dialogue form are
          constructed first in English and then they are translated ad-verbatim
          into other language. And the learner neither memorize those parrot
          words; nor he/she can visualize the same situation repeatedly in
          day-to day life.
        </p>
        <p>
          Hence, we have endeavored to discover logical language learning
          formulas with stipulated rules, examples, exercises to express
          present, past, future, present continuous and past continuous actions
          as every individual might speak about these actions. These can be
          learned with ease and can be applied to several situations in an
          efficient manner.
        </p>
        <p>
          We envision these online courses as a guide directed towards
          Non-Ethiopian Language speakers. We hope it will not go in vain in
          facilitating the self-learning aspirations of Non- Ethiopian Language
          speakers who wish to enrich their communication skills in all the
          Ethiopian Languages.
        </p>
        <p>
          The online courses encompass a total of 4,254 statements, categorized
          across 350 distinct topics, and thoughtfully structured into four
          comprehensive parts, these courses leave no stone unturned.
        </p>
        <ul>
          <li>Part 1 – Structures</li>
          <li>Part 2 – Conversation</li>
          <li>Part 3 – Vocabulary</li>
          <li>Part 4 – Grammar</li>
        </ul>
        <p>
          We are confident that ardent learners will find this as a very
          succinct tool to learn all the Ethiopian Languages. We wish them all
          success in learning all the Ethiopian Languages.
        </p>
      </div>
      <Heading subtitle="" title="WHO FOR ETHIOPIAN LANGUAGES?" />
      <div className="who">
        <div className="who1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/face-can-not-understand-1024x860.jpg"
            alt=""
          />
          <p>
            Those who can't understand Ethiopian Languages
            ...................... but wish to understand.
          </p>
        </div>
        <div className="who1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/canot-speak.png"
            alt=""
          />
          <p>
            Those who can understand Ethiopian Languages
            ................................... but can't Speak Ethiopian
            Languages.
          </p>
        </div>
        <div className="who1">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/speak-correctly-1536x864.jpg"
            alt=""
          />
          <p>
            Those who can Speak Ethiopian Languages.............but not Correct
            Ethiopian Languages.
          </p>
        </div>
      </div>
      <div className="who">
        <div className="who2">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/Speak-fluently.jpg"
            alt=""
          />
          <p>
            Those who can Speak Ethiopian Languages ........................ but
            not Fluent Ethiopian Languages.
          </p>
        </div>
        <div className="who2">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/elementor/thumbs/Speak-with-the-hearts-pxe14i2g9ivbd7e8vhk6cs2btl7xnc5je3eakaj1sg.jpg"
            alt=""
          />
          <p>Those who wish to Speak with the hearts of Ethiopians.</p>
        </div>
        <div className="who2">
          <img
            src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/images.jpeg"
            alt=""
          />
          <p>Those who wish to become a multilingual.</p>
        </div>
      </div>
      <Heading
        subtitle=""
        title="WHAT DO YOU LEARN ABOUT ETHIOPIAN LANGUAGES?"
      />
      <div className="display">
        <div className="speak">
          <div className="speak1">
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/Speak_Out.png"
              alt=""
            />
          </div>
          <div className="speaks">
            <h1>Speak</h1>
            <p>
              You can learn to speak with the hearts of Nations and
              Nationalities of Ethiopia in their mother tongues on any topic you
              wish. Make friends with Nations and Nationalities of Ethiopia.
            </p>
          </div>
        </div>
        <div className="speak">
          <div className="speak1">
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/reading.png"
              alt=""
            />
          </div>
          <div className="speaks">
            <h1>Read</h1>
            <p>
              You can learn to read literature on indigenous languages of
              Ethiopia. Enrich your Contextual vocabulary, master the Ethiopian
              Indigenous languages’ grammar, and become ingenious enough to
              overcome languages barriers.
            </p>
          </div>
        </div>
      </div>
      <div className="display">
        <div className="speak">
          <div className="speak1">
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/write.png"
              alt=""
            />
          </div>
          <div className="speaks">
            <h1>Write</h1>
            <p>
              You can learn to write to your Ethiopian friends or conduct
              business correspondence with Nations and Nationalities of
              Ethiopia.
            </p>
          </div>
        </div>
        <div className="speak">
          <div className="speak1">
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/understand.png"
              alt=""
            />
          </div>
          <div className="speaks">
            <h1>Understand</h1>
            <p>
              You can learn to understand the cultural practices of Nations and
              Nationalities of Ethiopia. Feel yourself like a piece of something
              in Ethiopia.
            </p>
          </div>
        </div>
      </div>
      <Heading subtitle="" title="WHY TO LEARN ETHIOPIAN LANGUAGES?" />
      <div className="why">
        <p>
          <strong>Cultural understanding:</strong> Learning Ethiopian languages
          allows you to delve deeper into the rich cultural heritage of
          Ethiopia. It enables you to communicate with local residents, fosters
          an understanding of their customs, values, and way of life, and
          fosters a greater appreciation for their traditions and beliefs.
        </p>
        <p>
          <strong>Social integration:</strong> If you plan to live, work, or
          travel in Ethiopia, learning the local languages can help you
          integrate into the society more effectively. It allows you to make
          meaningful connections with Ethiopians, establish friendships, and
          navigate daily interactions with greater ease and confidence.
        </p>
        <p>
          <strong>Travel experiences:</strong> Ethiopia is a beautiful country
          with diverse landscapes, historical sites, and cultural treasures.
          When you know the local languages, traveling through Ethiopia becomes
          more immersive and engaging. Interacting with locals in their native
          language helps you discover hidden gems, experience local traditions,
          and build authentic connections along your journey.
        </p>
        <p>
          <strong>Personal growth:</strong> Learning any new language enhances
          cognitive skills, expands your worldview, and boosts brain health. It
          improves memory, problem-solving abilities, and multitasking skills.
          By learning Ethiopian languages, you challenge yourself intellectually
          and gain a sense of accomplishment that contributes to personal
          growth.
        </p>
        <p>
          <strong>Career opportunities:</strong> Ethiopia is a rapidly
          developing country with a growing economy. Learning Ethiopian
          languages can open up numerous job opportunities, especially in
          sectors such as tourism, hospitality, international relations,
          education, and non-profit organizations. Being able to communicate
          with locals in their own language gives you an advantage over others,
          and employers often value this skill.
        </p>
        <p>
          <strong>Academic interests:</strong> Ethiopia has a rich linguistic
          diversity, with around 84 languages spoken within its borders. If you
          have a keen interest in linguistics or anthropology, learning
          Ethiopian languages can be fascinating. It offers an opportunity to
          study unique linguistic structures, dialects, and historical
          connections within the Ethiopian language family.
        </p>
      </div>
      <Heading subtitle="" title="WHY TO LEARN ETHIOPIAN LANGUAGES?" />
      <div className="quotes">
        <div className="quote">
          <p>
            “If you talk to a man in a language he understands that goes to his
            head.”
          </p>
          <p>“If you talk to him in his language that goes to his heart.”</p>
          <h1>– Nelson Rolihlahla Mandela</h1>
        </div>
        <div className="quote">
          <p>“You live a new life for every new language you speak.”</p>
          <p>“If you know only one language, you live only once.”</p>
          <h1>– A Czech proverb</h1>
        </div>
      </div>
      <div className="quotes">
        <div className="quotes1">
          <p>“A different language is a different vision of life.”</p>

          <h1>– Federico Fellini</h1>
        </div>
        <div className="quote">
          <p>
            ““When languages are lost, most of the knowledge that went with them
            gets lost.”
          </p>
          <h1>– Nicholas Ostler</h1>
        </div>
      </div>
    </>
  );
}

export default Homes;
