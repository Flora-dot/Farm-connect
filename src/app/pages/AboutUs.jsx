import { MissionVision } from "../../components/AboutUs/MissionVision";
import { OurPartners } from "../../components/AboutUs/OurPartners";
import { OurServices } from "../../components/AboutUs/OurServices";
import { OurStory } from "../../components/AboutUs/OurStory";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header/Header";


export function AboutUs() {
    return(
        <>
            <Header />
            <OurStory />
            <OurServices />
            <MissionVision />
            <OurPartners />
            <Footer />
        </>
    );
}