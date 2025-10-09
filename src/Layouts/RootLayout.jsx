import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Slide, ToastContainer } from "react-toastify";
import LoadingAnimation from "../Components/LoadingAnimation";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  if (loading) {
    return (
      <div className="w-107 mx-auto fixed inset-0 z-50 flex items-center justify-center bg-white">
        <LoadingAnimation />
      </div>
    );
  }

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
