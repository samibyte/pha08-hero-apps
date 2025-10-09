import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Slide, ToastContainer } from "react-toastify";
import LoadingAnimation from "../Components/LoadingAnimation";
import { useLocation } from "react-router";
import { useEffect } from "react";

const RootLayout = () => {
  const navigation = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

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
        position="top-right"
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
