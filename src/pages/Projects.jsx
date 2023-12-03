import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";

function Projects() {
  return (
    <>
      <Navbar />
      <TopSection heading={"my projects"} subHeading={"made with love"} />
      <section className="bg-white pt-[3.75rem] px-[2.56rem]  md:px-20 lg:px-[7.5rem] pb-[6rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 mt-[5.13rem] ">
          <div className="max-w-sm h-28 bg-black"></div>
          <div className="max-w-sm h-28 bg-black"></div>
          <div className="max-w-sm h-28 bg-black"></div>
        </div>
        <div className="flex item-center justify-center">
          <Button text={"contact"} className={"mb-[6.25rem]"} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
