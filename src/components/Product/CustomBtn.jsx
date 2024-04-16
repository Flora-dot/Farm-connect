import styles from './styles.module.css'
export const CustomBtn = (props) => {
    return(
        <button className={"btn-" + props.theme} onClick={props.onClick}>
            {props.children}
        </button>
    )
}