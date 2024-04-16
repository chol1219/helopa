import Image from "../../assets/image/service/item1.png";
import { useTranslation } from 'react-i18next';

const Item1 = () => {
  const { t }  = useTranslation(['page']);
  return (
    <div className="w-full lg:w-[278px] pb-10 px-2 lg:px-0">
      <div className="relative flex justify-center">
        <img
          src={Image}
          alt="footer"
          // className="object-cover rounded-tl-[70px] rounded-br-[70px]"
        />
        {/* <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-blue-3 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[207px] "></div> */}
      </div>
      <div className="flex justify-center text-blue-5 text-center pt-10 px-10 lg:px-0 font-bold h-24">
        {t('service_1_item_1')}
      </div>
      <div className="flex justify-center text-blue-5 text-justify  px-10 lg:px-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At v
      </div>
    </div>
  );
};

export default Item1;
