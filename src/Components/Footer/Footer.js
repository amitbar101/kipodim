import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href='https://www.facebook.com/kipodim' target='_blank'>
        <img
          className="facebook-img"
          src={"/facebook.png"}
          alt="facebook"
        />
      </a>
    </div>
  );
}

export default Footer;
