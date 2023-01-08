import Link from "next/link";
import { ArrowLeftShort } from "react-bootstrap-icons";

const NavigationBar = ({ title }) => {
  return (
    <div className="container mt-8 mb-12 flex items-center">
      <Link href="/">
        <ArrowLeftShort className="h-8 w-8 font-bold" />
      </Link>
      <h2 className="absolute left-1/2 -translate-x-1/2 font-medium first-letter:uppercase">{title}</h2>
    </div>
  );
};

export default NavigationBar;
