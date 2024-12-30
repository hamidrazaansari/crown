const AboutCompany = () => {
  return (
    <div className="about-company-section pt-4">
    <div className="container ">
      <div className="breadcrumb">
        <p>
          <a href="/">HOME</a>
          <span> / </span>{" "}
          <a href="/" className="ms-2">
            About Us
          </a>{" "}
        </p>
      </div>
      <div className="row about-company">
        <div className="col-5">
          <h1>ABOUT COMPANY</h1>
        </div>
        <div className="col-7">
          <p>
            Crown Decor, a Royale Touche Laminate group company, is a niche
            Luxury Laminate brand from India and was launched in 1978 with the
            idea that a laminate has unlimited potential in surface décor. They
            made people look at laminates as a resilient and flexible product.
          </p>
          <p>
            The group has seven production lines of high pressure laminates
            producing over 18 million sq mtr annually in 4 different sizes and
            in thickness ranging from 0.6 mm to 25 mm which are made of 100%
            phenolic resin.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutCompany;
