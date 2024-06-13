import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>Welcome To</h1>
            <span>Learning Different Ethiopian Languages Online.</span>
          </div>

          <div className="social">
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/ethio-language-box-1-289x300.jpg"
              alt=""
              className="icon"
            />
            <img
              src="https://ethiolanguagebox.com/wp-content/uploads/2021/11/wcu-Logo.png"
              alt=""
              className="icon"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
