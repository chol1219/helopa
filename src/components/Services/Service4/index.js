import { useReducer, useState } from "react";
import MainLayout from "../../../containers/layout/MainLayout";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Slider1 from "../../../assets/image/service/slider4.png";
import Title1 from "../../../assets/image/service/title4.png";
import Image from "../../../assets/image/service/image4.png";
import VectorImage from "../../../assets/image/service/Vector4.png";
import { useTranslation } from 'react-i18next';

const Index = (props) => {
  const { t }  = useTranslation(['page']);
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);

  return (
    <MainLayout {...props} menu={menu} setMenu={setMenu} open={open} setOpen={setOpen}>
      <div>
        <div className="w-full relative">
          <img
            src={Slider1}
            alt="default"
            className="w-full object-cover h-[387px] lg:h-full"
          />
          <div className="bg-gradient-to-l from-blue-2 to-blue-3 absolute h-full w-full top-0 text-white text-xs flex flex-col px-14 items-center">
          </div>
          <div className="to-blue-3 absolute h-full w-full top-[30%] text-white text-xs flex flex-col px-14 items-center">
            <img
              src={Title1}
              alt="default"
              className="w-20 object-cover"
            />
            <p className="text-white text-center text-2xl pt-10 text-bold lg:text-5xl">{t('service_title_4')}</p>
          </div>
          {/* <div className="bg-gradient-to-r from-blue-1 to-white to-100% absolute w-full h-full top-0"></div> */}
        </div>
        <div className="w-full pt-[53px] lg:pt-[181px]">
          <div className="w-full text-blue-1 text-center text-3xl font-bold">
            {t('service_title_4')}
          </div>
          <div className="w-full lg:w-5/6 lg:ml-[8%] text-blue-5 text-justify lg:text-center text-lg pt-[53px] lg:pt-[65px] px-10">
            {t('service_4_description')}
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-between pt-[82px] lg:pt-36 py-36">
          <div></div>
          <Item1 />
          <Item2 />
          <Item3 />
          {/* <Item4 /> */}
          <div></div>
        </div>

        <div className="w-full height-96 bg-blue-800 px-10 py-10 flex items-center font-bold text-white text-2xl flex-col lg:flex-row lg:text-4xl">
          <div className="w-full p-2 lg:p-10 lg:w-2/5">
            <img
              src={VectorImage}
              alt="default"
              className="w-16 object-cover lg:w-28"
            />
            <br/>
            {t('service_4_banner_text')}
          </div>
          <div className="w-full relative lg:w-3/5">
            <img
              src={Image}
              alt="default"
              className="w-full object-cover h-[465px] rounded-tr-[40px] rounded-bl-[40px] lg:h-full"
            />
          </div>
        </div>
        
        {/* <div className="w-full lg:flex lg:justify-between pt-[82px] lg:pt-36 py-36">
          <div></div>
          <Item5 />
          <Item6 />
          <Item7 />
          <Item8 />
          <div></div>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default Index;
