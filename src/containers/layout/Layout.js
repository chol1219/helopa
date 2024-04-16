import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <Header showLine={true} {...props} scrollTop={scrollTop} />
      <div className="mt-[350px] pb-[50px] lg:mt-[100px]">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
