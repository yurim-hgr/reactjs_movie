import styles from './Button.module.css';


function Button ({text}) {
    return (
        <button className = {styles.title}>
            {text}
        </button>
    );

    
};



export default Button;
