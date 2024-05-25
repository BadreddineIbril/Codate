import Logo from "@/assets/images/light-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Owner */}
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
      {/* Product Hunt Badge */}
      <a
        href="https://www.producthunt.com/posts/codate?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-codate"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=458963&theme=light&period=daily"
          alt="Codate - Easy&#0032;date&#0032;formats&#0032;for&#0032;any&#0032;code | Product Hunt"
          width="250"
          height="54"
        />
      </a>
      {/* Copyright */}
      <div className="copyright">
        <p>© {year} Codate. All rights reserved.</p>
      </div>
    </footer>
  );
}
