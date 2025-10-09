import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import footerLogo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#001931] text-neutral-content p-10">
      <aside>
        <Link to="/">
          <img className="w-20 mb-2" src={footerLogo} alt="" />
          <p className="text-2xl font-semibold">Hero Apps Co.</p>
        </Link>

        <p>Copyright &copy; 2025 Hero Apps. All rights reserved.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a className="cursor-pointer">
            <FaSquareXTwitter size={20} />
          </a>

          <a className="cursor-pointer">
            <FaLinkedin size={20} />
          </a>
          <a className="cursor-pointer">
            <FaFacebook size={20} />
          </a>
          <a className="cursor-pointer">
            <FaYoutube size={20} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
