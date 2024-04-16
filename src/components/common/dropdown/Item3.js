import Image from "../../../assets/image/img2.png";

const Item3 = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] h-[435px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">Business and Administration</p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Dokumente
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Anträge
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Verständnissprobleme klären
        </p>
        {/* <p className="py-[2px] text-xs font-semibold leading-6">
          Befunde mit Ärzten besprechen
        </p> */}
      </div>
    </div>
  );
};
export default Item3;
