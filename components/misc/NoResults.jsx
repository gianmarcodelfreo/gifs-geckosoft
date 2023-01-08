import { Search } from "react-bootstrap-icons";

const NoResults = ({ text }) => {
  return (
    <div className="container">
      <p className="flex w-full items-center justify-center rounded-2xl bg-slate-100 py-10 px-4">
        <Search className="mr-4 h-10 w-10" /> {text}
      </p>
    </div>
  );
};

export default NoResults;
