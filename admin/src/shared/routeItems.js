import { MdOutlineEventAvailable, MdOutlineWorkOutline } from "react-icons/md";
import {
  IoBookOutline,
  IoImageOutline,
  IoNewspaperOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { RiNumbersLine } from "react-icons/ri";
import { LuBookCheck, LuContact, LuImages, LuInfo } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SlPeople } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";

export const menuItems = [
  { key: "banners", label: "Banners", icon: IoImageOutline },
  { key: "about-us", label: "About Us", icon: LuInfo },
  { key: "our-team", label: "Our Team", icon: GrGroup },
  { key: "profile", label: "Profile", icon: ImProfile },
  { key: "service", label: "Service", icon: MdOutlineHomeRepairService },
  { key: "latest-gallery", label: "Latest Gallery", icon: LuImages },
  { key: "experience", label: "Experience", icon: VscWorkspaceTrusted },
  { key: "brochure", label: "Brochure", icon: IoBookOutline },
  // { key: "events", label: "Event", icon: MdOutlineEventAvailable },
  { key: "publications", label: "Publication", icon: LuBookCheck },
  // { key: "news", label: "News", icon: IoNewspaperOutline },
  // { key: "careers", label: "Careers", icon: MdOutlineWorkOutline },
  // { key: "job-applicants", label: "Job Applicant", icon: SlPeople },
  { key: "gallery", label: "Gallery", icon: LuImages },
  { key: "video", label: "Video", icon: IoVideocamOutline },
  // {
  //   key: "development-process",
  //   label: "Development Process",
  //   icon: BsGraphUpArrow,
  // },
  // { key: "our-values", label: "Our Values", icon: RiNumbersLine },
  { key: "contact", label: "Contact", icon: LuContact },
];
