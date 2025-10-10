import logo from "../assets/logo.png";

const LoadingAnimation = () => {
  return (
    <>
      <div className="sm:w-full flex items-center justify-between zoom-in-end opacity-50">
        <p className="text-[50px] sm:text-[90px] text-[rgba(0,25,49,0.9)] font-bold">
          L
        </p>
        <img className="animate-spin w-10 sm:w-20" src={logo} alt="" />
        <p className="text-[50px] sm:text-[90px] text-[rgba(0,25,49,0.9)] font-bold">
          ading
        </p>
      </div>
    </>
  );
};

export default LoadingAnimation;
