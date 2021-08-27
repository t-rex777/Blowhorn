import { BiCertification, BiCodeBlock } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { GiCube, GiStoneBlock } from "react-icons/gi";
import { RiCoupon4Line } from "react-icons/ri";

import p1 from "./images/p1.jpg";
import p2 from "./images/p2.jpg";
import p3 from "./images/p3.jpg";
import p4 from "./images/p4.jpg";
import p5 from "./images/p5.jpg";
import p6 from "./images/p6.jpg";
import p7 from "./images/p7.jpg";
import p8 from "./images/p8.jpg";

export const features = [
  {
    img: <BiCertification size={20} className="feature__boxes__img" />,
    header: "Certification",
    info: "Each of our plan will provide you and your team with certifications.",
  },
  {
    img: <AiOutlineNotification size={20} className="feature__boxes__img" />,
    header: "Notification",
    info: "Send out notifications to all your customers to keep them engaged.",
  },
  {
    img: <GiCube size={20} className="feature__boxes__img" />,
    header: "Bundles",
    info: "High quality bundles of awesome tools to help you out.",
  },
  {
    img: <BiCodeBlock size={20} className="feature__boxes__img" />,
    header: "Developer tools",
    info: "Developer tools to help grow your application and keep it up-to-date .",
  },
  {
    img: <GiStoneBlock size={20} className="feature__boxes__img" />,
    header: "Building Blocks",
    info: "The right kind of building blocks to take your company to the next level.",
  },
  {
    img: <RiCoupon4Line size={20} className="feature__boxes__img" />,
    header: "Coupons",
    info: "Coupons system to provide special offers and discounts for your app.",
  },
];

export const teams = [
  { img: p3, name: "Freddy Smith", position: "CEO and Founder" },
  { img: p2, name: "Carl Jones", position: "CTO and Co-Founder" },
  { img: p1, name: "Susan Peterson", position: "Marketing Directory" },
  { img: p4, name: "Tommy Barnes", position: "Designer" },
  { img: p5, name: "Ron Jenson", position: "Senior Developer" },
  { img: p6, name: "Pete Tompkins", position: "CEO Web Developer" },
  { img: p7, name: "Kelly Richards", position: "Sales Manager" },
  { img: p8, name: "Alexis Jordan", position: "Affiliate Manager" },
];
