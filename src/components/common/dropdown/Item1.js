import Image from "../../../assets/image/img2.png";

const Item1 = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] w-full h-[435px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">
          MEDIZINISCHE BERATUNG
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Verwaltung und Bürokratie
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Terminierung und Vermittlung
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Medikamente
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">Behandlungen</p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Konsultierung von Fachärzten
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Fortbildungen und Seminaren für Ärzte
        </p>
      </div>
    </div>
  );
};
export default Item1;
