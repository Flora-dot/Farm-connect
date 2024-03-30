import { missions } from "./mission";
import style from './style.module.css'

export const MissionVision = () => {
    return(
        <section className={style['mission-container']}>
            <h1>Mission and Vision</h1>
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
    );
}