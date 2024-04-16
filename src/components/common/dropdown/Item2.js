import Image from "../../../assets/image/img2.png";

const Item2 = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] h-[435px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">
          VERMITTLUNG MED. FIRMEN
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Suchen nach Arztpraxen
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Betreuungspunkte weltweit
        </p>
        {/* <p className="py-[2px] text-xs font-semibold leading-6">
          Kontaktadressen
        </p> */}
        <p className="py-[2px] text-xs font-semibold leading-6">
          Betreuungsmöglichkeiten
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Ansprechpartner
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Konsolidierung von Arzneiherstellern - Ärzten - Apotheken - Patienten
        </p>
      </div>
    </div>
  );
};
export default Item2;
