import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

import CenteredFooter from "./CenteredFooter";

export default function Footer() {
  const company = {
    href: "/",
    name: "Abdul Alim",
  };

  const links = [
    { href: "/", name: "Home" },
    { href: "/", name: "About" },
    { href: "/", name: "Courses" },
    { href: "/", name: "Carrer" },
    { href: "/", name: "Faq" },
    { href: "/", name: "Contact" },
  ];

  const socials = [
    { icon: <FacebookIcon fontSize="small" />, link: "/" },
    { icon: <TwitterIcon fontSize="small" />, link: "/" },
    { icon: <Instagram fontSize="small" />, link: "/" },
    { icon: <PinterestIcon fontSize="small" />, link: "/" },
    { icon: <GitHubIcon fontSize="small" />, link: "/" },
  ];

  return <CenteredFooter company={company} links={links} socials={socials} />;
}
