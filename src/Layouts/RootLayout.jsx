import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Slide, ToastContainer } from "react-toastify";
import LoadingAnimation from "../Components/LoadingAnimation";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 w-full z-37">
          <Navbar />
        </header>
        <main className="flex-1">
          {navigation.state === "loading" && <LoadingAnimation />}
          <Outlet />
        </main>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      ;
    </>
  );
};

export default RootLayout;
