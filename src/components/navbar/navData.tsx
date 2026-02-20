import { FillLocation, FillMailIcon } from "@/icons/icons";
import { contact } from "../../../constent";

export const navUpper = [
  {
    label: "Kullu Naggar Manali Road, Himachal Pradesh",
    href: contact.addressUrl,
    icon: <FillLocation />,
  },
  {
    label: contact.email,
    href: "mailto:" + contact.email,
    icon: <FillMailIcon />,
  },
];
