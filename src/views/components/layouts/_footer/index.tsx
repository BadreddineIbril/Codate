import Logo from "@/assets/images/light-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="owner">
        <div className="logo">
          <img src={Logo} alt="Codate Logo" />
        </div>
        <p>
          Developed by{" "}
          <a href="https://bibril.com/" target="_blank">
            @Badreddine Ibril
          </a>
        </p>
      </div>
      <div className="copyright">
        <p>© {year} Codate. All rights reserved.</p>
      </div>
    </footer>
  );
}
