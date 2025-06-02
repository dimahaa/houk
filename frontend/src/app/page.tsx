import Header from "./components/global/headers/header";
import Accordion1 from "./components/unique/acoodions/acoodion-1/acoodion-1";
import AddUser2 from "./components/unique/form-4/form-4";

export default function Home() {
  return (
    <div className="page-main">
      <Header />
      <Accordion1 />
      <AddUser2 />
    </div>
  );
}
