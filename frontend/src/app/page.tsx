import Header from "./components/global/headers/header";
import Accordion1 from "./components/unique/acoodions/acoodion-1/acoodion-1";
import AddUser from "./components/unique/form-3/form-3";

export default function Home() {
  return (
    <div className="page-main">
      <Header />
      <Accordion1 />
      <AddUser />
    </div>
  );
}
