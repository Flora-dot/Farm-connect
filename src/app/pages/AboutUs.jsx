import { MissionVision } from "../../components/AboutUs/MissionVision";
import { OurPartners } from "../../components/AboutUs/OurPartners";
import { OurServices } from "../../components/AboutUs/OurServices";
import { OurStory } from "../../components/AboutUs/OurStory";


export function AboutUs() {
    return(
        <>
            <OurStory />
            <OurServices />
            <MissionVision />
            <OurPartners />
        </>
    );
}