import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavIcon from "../../../assets/icon/nav.svg";
import Carousel from "./Carousel";
import { useTranslation } from 'react-i18next';


const menus = [
  "service_title_1_small",
  "service_title_2_small",
  "service_title_3_small",
  "service_title_4_small",
];

const HeaderDropdown = (props) => {
  const { t }  = useTranslation(['page']);
  const navigate = useNavigate();
  const { menu, setMenu, open, setOpen, scrollTop } = props;
  const path = window.location.pathname;
  const opacity = path === "/about" || path === "/contact" ? 1 : 1;

  const [footerHeight, setFooterHeight] = useState(0);
  const handleClickMenu = (index) => {
    navigate('/service' + (index + 1));
    // setMenu(index);
  };

  const updateFooterHeight = () => {
    const language_setting = document.getElementById("language_setting");
    if (language_setting) {
      setFooterHeight(language_setting.offsetTop - window.scrollY);
    }
  }

  useLayoutEffect(() => {
    const intervalId = setInterval(updateFooterHeight, 100);

    window.addEventListener("resize", () => {
      updateFooterHeight();
    });
    window.addEventListener("scroll", () => {
      updateFooterHeight();
    });
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative">
      {props.showLine && !open && (
        <div className="invisible lg:visible">
          <div
            className="fixed border-l-2 border-blue-1 top-0 left-[105px] z-20"
            style={{
              height: footerHeight - 20,
            }}
          />
          <div
            className="fixed border-l-2 border-blue-1 left-[105px] z-20"
            style={{
              height: window.visualViewport.height - footerHeight - 40,
              top: footerHeight + 40,
            }}
          />
        </div>
      )}
      <div className="px-9" onClick={setOpen}>
        <img
          className="cursor-pointer"
          src={NavIcon}
          alt="Navigation icon"
          width={42}
          height={28}
        />
      </div>
      {open && (
        <div
          className="absolute left-0 top-[35px] lg:top-[60px] w-screen lg:w-[44vw] lg:h-screen bg-transparent lg:bg-white items-center animate-fadeIn lg:animate-fadeInLeft z-[1001]"
          style={{ opacity: opacity }}
        >
          <div className="lg:px-[72px] py-4">
            <ul className="space-y-2 font-medium bg-white pb-20 px-[10%] lg:px-0">
              {menus.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={`w-fit text-xl font-['Poppins'] py-2 lg:py-3 cursor-pointer`}
                    onClick={() => handleClickMenu(index)}
                    onMouseEnter={() => setMenu(index)}
                    onMouseLeave={() => setMenu(-1)}
                  >
                    <span
                      className={`pb-1 ${
                        menu === index
                          ? `font-bold text-green-1 border-b-2 border-green-1`
                          : "text-blue-1 border-b-2 border-white"
                      }`}
                    >
                      {t(value)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {(menu >= 0 && !scrollTop) && (
            <div className="lg:px-[100px] lg:pt-0 lg:py-[86px] mt-[-80px] lg:mt-0 bg-transparent lg:bg-white animate-fadeIn lg:animate-fadeIn">
              <Carousel menu={menu} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
