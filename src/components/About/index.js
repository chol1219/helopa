import { useReducer, useState } from "react";
import { useInView } from "react-intersection-observer";
import MainLayout from "../../containers/layout/MainLayout";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import GreenRadiusButton from "./GreenRadiusButton";
import Image1 from "../../assets/image/img1.png";
import Image5 from "../../assets/image/about/img5.png";
import { useTranslation } from 'react-i18next';

const Index = (props) => {
  const { t }  = useTranslation(['page']);
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <MainLayout {...props} menu={menu} setMenu={setMenu} open={open} setOpen={setOpen}>
      <div>
        <div className="w-full relative">
          <img
            src={Image1}
            alt="default"
            className="w-full h-[551px] lg:h-[950px] object-cover"
          />
          <div className="bg-gradient-to-b from-white-op from-0% via-blue-1-op via-20% to-white to-100% absolute w-full h-full top-0"></div>
        </div>
        <div className="w-full pt-[53px] lg:pt-[181px]">
          <div className="w-full text-blue-1 text-center text-3xl font-bold">
            {t('about_us')}
          </div>
          <div className="w-full lg:w-3/6 lg:ml-[25%] text-blue-5 text-justify lg:text-center text-lg pt-[53px] lg:pt-[65px] px-10">
            {t('about_us_description')}
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-between pt-[82px] lg:pt-36 py-36">
          <div></div>
          <Item1 />
          <Item2 />
          <Item3 />
          <div></div>
        </div>
        <div ref={ref} className="w-full lg:flex">
          <div
            className={
              inView
                ? "lg:relative lg:w-6/12 bg-blue-4 px-10 py-28 text-white text-justify leading-8 lg:animate-fadeInLeftToMiddel"
                : "lg:invisible"
            }
          >
            {t('for_your_employees_and_managers')}
          </div>
          <div
            className={
              inView
                ? "lg:relative lg:w-6/12 lg:animate-fadeInRightToMiddle"
                : "lg:invisible"
            }
          >
            <img
              src={Image5}
              alt="default"
              className="w-full h-[571px] lg:h-full object-cover lg:object-fit"
            />
          </div>
        </div>
        {/* <div className="w-full lg:flex lg:justify-between lg:px-[200px] py-5 lg:py-36">
          <GreenRadiusButton title={t('patients_and_doctors')} />
          <GreenRadiusButton title={t('patients_and_doctors')} />
          <GreenRadiusButton title={t('patients_and_doctors')} />
        </div> */}
      </div>
    </MainLayout>
  );
};

export default Index;
