import { useReducer, useState } from "react";
import MainLayout from "../../containers/layout/MainLayout";
import LocationIcon from "../../assets/icon/location.svg";
import ContactIcon from "../../assets/icon/contact.svg";
import VectorIcon from "../../assets/icon/vector.svg";
import MapImage from "../../assets/image/map.png";
import CheckIcon from "../../assets/icon/check.svg";
import SuccessIcon from "../../assets/icon/success.png";
import { useTranslation } from 'react-i18next';
import { sendMail } from "../../utils/api";

const Index = (props) => {
  const { t }  = useTranslation(['page']);
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isfilled, setIsfilled] = useState(true);
  const [checked, setChecked] = useState(false);

  const sendHandler = async () => {
    if(name === '' || company === '' || email === '' || phone === '' || checked === false) {
      setIsfilled(false);
      return;
    }
    await sendMail({name, company, email, phone, message});
    setIsfilled(true);
  }

  return (
    <MainLayout {...props} menu={menu} setMenu={setMenu} open={open} setOpen={setOpen}>
      <div className="w-full pt-14 lg:pt-[181px]">
        <div className="w-full px-[15%] lg:px-0 text-blue-6 text-center text-3xl font-bold">
          {t('any_questions')}
        </div>
        <div className="w-full px-[15%] lg:px-0 text-blue-6 lg:font-bold lg:text-center text-lg pt-[35px]">
          <p>{t('contact_form_or_call')}</p>
          <p>{t('will_back_asap')}</p>
        </div>
      </div>
      <div className="w-full lg:flex lg:justify-center mt-4 lg:mt-20 mb-64">
        <div className="lg:mr-8">
          <div className="px-[15%] lg:px-4 lg:px-0">
            <div className="flex">
              <img src={LocationIcon} alt="Location" className="pr-10" />
              <div className="text-grey-2">Badstr. 20, D-13357 Berlin</div>
            </div>
            {/* <div className="flex mt-4">
              <img src={ContactIcon} alt="Contact" className="pr-10" />
              <div className="text-grey-2">Lorem impsum</div>
            </div> */}
          </div>
          <div className="px-4 lg:px-0 mt-8 lg:mt-[100px]">
            {/* <img
              src={MapImage}
              alt="Map"
              className="object-cover w-full lg:w-[470px] h-[300px]"
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9704.08356152519!2d13.377031705415142!3d52.551147023632204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8522409ec22e9%3A0x3080e000601e47d9!2sBadstra%C3%9Fe%2020%2C%2013357%20Berlin%2C%20Germany!5e0!3m2!1sen!2s!4v1702339485887!5m2!1sen!2s" width="450" height="350"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="lg:flex lg:flex-col px-4 lg:px-0">
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] mb-2 mt-4 lg:mt-0"
            placeholder={t('company') + ' *'}
            value={company}
            onChange={(e) => {setCompany(e.target.value)}}
          />
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] mb-2 mt-4 lg:mt-0"
            placeholder={t('name') + ' *'}
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] my-2"
            placeholder="E-Mail *"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] my-2"
            placeholder={t('phone') + ' *'}
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}
          />
          {/* <div className="relative flex items-center">
            <input
              className="w-full lg:w-[430px] h-[50px] px-[15px] my-2"
              placeholder={t('would_like_advice')}
            />
            <img
              src={VectorIcon}
              alt="Vector icon"
              width={48}
              className="absolute right-0 lg:right-[8px] cursor-pointer"
            />
          </div> */}
          <textarea
            className="w-full lg:w-[430px] h-[100px] p-4 mt-2"
            placeholder={t('your_message')}
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
          />
          <div className="flex items-start mt-[22px] cursor-pointer" onClick={() => { setChecked(!checked)}}>
            <img src={checked ? SuccessIcon: CheckIcon} alt="check" />
            <div className="w-[400px] ml-[13px] break-all text-sm text-blue-1">
              <p style={{ wordBreak: "break-word" }}>{t('form_description')}</p>
            </div>
          </div>
          {!isfilled && <div className="w-full lg:w-[430px] text-center text-red-500 pt-3">
            {t('confirm_fill_all')}
          </div>}

          <div className="w-full flex items-center justify-center">
            <button className="w-full h-[67px] rounded-full bg-blue-1 text-white mt-[40px] font-bold text-xl" onClick={sendHandler}>
              {t('send_form')}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
