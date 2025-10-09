import logo from "../assets/logo.png";

const LoadingAnimation = () => {
  return (
    <div className="w-96">
      <img className="animate-spin w-full" src={logo} alt="" />
    </div>
  );
};

export default LoadingAnimation;
