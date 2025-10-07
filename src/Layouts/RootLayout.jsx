import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";

const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 w-full z-37">
          <Navbar />
        </header>
        <main className="flex-1">
          <Home />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
