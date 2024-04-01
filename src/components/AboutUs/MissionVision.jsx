import { missions } from "./mission";
import { visions } from "./mission";
import style from './style.module.css'

export const MissionVision = () => {
    return(
        <>
        <section className={style['mission-container']}>
            <h1>Our Mission</h1>
            <div className={style['mission-cards-container']}>
                {missions.map((mission)=> (
                    <div className={style['mission-card']}>
                    <img src={mission.image} alt="" className={style['mission-icon']} />
                    <p>{mission.description}</p>
                    <h6>Farm Connect</h6>
                    </div>
                ))}
            </div>
        </section>
        <section className={style['mission-container']}>
        <h1>Our Vision</h1>
        <div className={style['mission-cards-container']}>
            {visions.map((vision)=> (
                <div className={style['mission-card']}>
                <img src={vision.image} alt="" className={style['mission-icon']} />
                <p>{vision.description}</p>
                <h6>Farm Connect</h6>
                </div>
            ))}
        </div>
    </section>
   </>
    );
}