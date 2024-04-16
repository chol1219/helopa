import { useReducer, useState } from "react";
import Layout from "../../containers/layout/Layout";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";

const Index = (props) => {
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);
  // const [language, setLanguage] = useState('Deutsch');

  return (
    <Layout menu={menu} {...props} setMenu={setMenu} open={open} setOpen={setOpen}>
      <div className="w-full flex flex-wrap lg:flex-nowrap">
        <Sidebar {...props}/>
        <Carousel menu={menu} open={open} />
      </div>
    </Layout>
  );
};

export default Index;
