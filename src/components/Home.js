import AboutMe from "./Aboutme";
import Contacts from "./Contacts";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import Skills from "./Skills";
import Languages from "./Languages";
import SendEmail from "./SendEmail";
import bg from '../assets/bg.jpeg'

const Home = () => {
  return (
    <div
      style={{backgroundImage: `url(${bg})`}}
      className="scroll-pt-32 bg-fixed text-center lg:px-[8%] md:px-[2%] xl:px-[20%] flex flex-col justify-center bg-black h-fit w-fit text-white space-y-10 overflow-hidden"
    >
      <Navbar />
      <HeroSection />
      <Languages />
      <Skills />
      <ProjectList />
      <Contacts />
      <AboutMe />
      <SendEmail />
      <Footer />
    </div>
  );
};
export default Home;
