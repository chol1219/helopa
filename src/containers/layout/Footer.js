import { Link } from "react-router-dom";
import LogoIcon from "../../assets/icon/logo.svg";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t }  = useTranslation(['page']);

  return (
    <div id="footer" className="w-full h-[636px] lg:h-[436px] xl:h-[366px] relative text-white">
      <div className="w-full h-full bg-green-1 rounded-tr-[135px]"></div>
      <div className="w-full pr-10 h-full absolute top-0">
        <div className="w-full mr-10 h-full bg-gray-200 text-blue-1 rounded-tr-[135px] flex items-center lg:justify-end">
          <div className="xl:flex">
            <div className="pl-10 pt-10 pb-10 lg:pl-0 mb-5 lg:mb-0 flex lg:mr-[152px] items-center h-min">
              <img src={LogoIcon} alt="logo" className="h-[35px] lg:h-[50px]" />
              <div className="pl-2 font-bold text-3xl">Helopha</div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 lg:mr-[112px] text-base">
                <div className="font-bold">{t('address')}</div>
                <div className="w-[100px] pt-4 lg:pt-8">
                  <p>Badstraße 20</p>
                  <p>13357 Berlin</p>
                  <p>Germany</p>
                </div>
              </div>
              <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 lg:mr-[55px] text-base">
                <div className="font-bold">{t('legal')}</div>
                <div className="w-[210px] pt-4 lg:pt-8">
                  <Link to="/privacy">{t('privacy_policy_imprint')}</Link>
                  <br/>
                  <Link to="/terms">{t('terms_and_conditions')}</Link>
                </div>
              </div>
              <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 lg:mr-[152px] text-base">
                <div className="font-bold">{t('services')}</div>
                <div className="w-[200px] pt-4 lg:pt-8">
                  <Link to="/service1">{t('service_title_1_small')}</Link>
                </div>
                <div className="w-[200px] pt-2">
                  <Link to="/service2">{t('service_title_2_small')}</Link>
                </div>
                <div className="w-[200px] pt-2">
                  <Link to="/service3">{t('service_title_3_small')}</Link>
                </div>
                <div className="w-[200px] pt-2">
                  <Link to="/service4">{t('service_title_4_small')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
