import Styles from './Loader.module.css';
export  function Loader() {
    return (
        <div className={Styles.body}>
            <div className={Styles.loader}></div>
        </div>
);
}
