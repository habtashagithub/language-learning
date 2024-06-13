import React from "react";
import Heading from "../common/heading/Heading";
import "./Cultures.css";
function CulturesCard() {
  return (
    <>
      <div className="cultures">
        <h2>Ethiopian Greetings</h2>
        <div className="img">
          <div>
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/elementor/thumbs/Handshaking-finalll-pyps0eei7m02729b6uhmm0vwsyw8qix1ng1hut76lc.png"
              alt="hand shaking"
              className="img1"
            />
            <p>Shaking Hands</p>
          </div>
          <div>
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/elementor/thumbs/Shoulder-Hitting-final-pyprszgcanumlt12hn3kxw903jg00hh9yqrlk86zog.png"
              alt="hitting shoulder"
              className="img2"
            />
            <p>Hitting Shoulder</p>
          </div>
          <div>
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/elementor/thumbs/Huggingjpg-pypom5i5dank8rtv106dbvfrixfpnnls6dm4xagfts.jpg"
              alt="hugging"
              className="img3"
            />
            <p>Hugging</p>
          </div>
          <div>
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/elementor/thumbs/Kissing-Greetings-pyprvvsfd9tgeitike764nx61b5qqvzhd36htxwahs.jpg"
              alt="kissing"
              className="img4"
            />
            <p>Kissing</p>
          </div>
        </div>
        <div className="greeting">
          <p>
            In the Ethiopian Culture, greetings are very important, unique,
            somewhat lengthy ritual, expressed with body language (smile or
            showing a sign of happiness), show respect and touch the hearts of
            people. Ethiopians greet by shaking hand, hitting shoulder, hugging,
            kissing. The kind of greeting indicates their intimacy, degree of
            affection and attachment with each other.{" "}
          </p>
          <p>
            ˈTena yɪsˈtɪlɪgn/ጤና ይስጥልኝ: The first & foremost and universal aspect
            of the Ethiopian greeting is (ˈtena yɪsˈtɪlɪgn/ጤና ይስጥልኝ) an initial
            inquiry of the health of one’s counterpart” whether the person is
            family, friend, or stranger, and is not dependent on relative social
            status. ˈTena/ጤና = Health. yɪsˈtɪlɪgn/ጤና ይስጥልኝ = Let him give for
            me.
          </p>
          <p>
            Not only they inquiry of the health of each other, but also after
            their family members, animals, harvest, business, and any elements
            of each other’s personal life with which they might be familiar.
          </p>
          <p>
            ደህና፣ እግዚአብሔር ይመስገን/Dehna, igizɪābiḥēr yimesɪgen = Fine. Thanks to
            God : All answers are always prefaced with “thanks to God,” and they
            are always positive; any bad news must be saved for later in the
            conversation. Not to greet people and not to respond to greetings is
            impolite.
          </p>
          <p>
            Kissing : It is common to see women kissing women, women kissing
            men, and men kissing men on the check in public including in the
            office. After a close personal relationship has been established,
            kissing 3 times on the cheeks is common. As well, If people meet
            each other after a long period of time, they greet each other by
            hugging and kissing repeatedly till they both get contained.
            <br /> While greeting, Ethiopians
          </p>

          <ul>
            <li>Bow head, and raise one’s hat. </li>
            <li>
              Address with the title like Ato for man, Weziro for married woman,
              or Woizrit for an unmarried woman. For instance, Woizero (Mrs.)
              Senedu; Ato (Mr.) Eyasu; Doctor Tsedeke; Engineer Dagela, etc.
            </li>
            <li>
              Address the too elderly person with “Gash”. For instance,Gash.
              Tesfaye W/Meskel
            </li>
            <li>
              Follow the hierarchy with respect age, wealth, education and
              social contribution.
            </li>
          </ul>
        </div>
        <div className="ethiopia">
          <Heading subtitle="" title="Ethiopian Injera" />
          <div className="injera">
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2022/12/Injear-.png"
              alt="injera"
            />
            <p>
              The staple food of the Ethiopian home is injera, a pancake usually
              made from a locally grown cereal called teff which is found only
              in Ethiopia. The teff batter is fermented for three days before
              being cooked over a large open wood fire. A typical meal will
              consist of a large injera, the size of a round coffee table, on
              which other dishes are placed such as boiled vegetables, spicy
              sauces, milk curds and on special days, chicken, beef, lamb or
              fish.
              <br />
              Feeding somebody else with hand is common in the Ethiopia. It is
              sign of love and respect , hence you have to take care not to
              refuse when it is offered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CulturesCard;
