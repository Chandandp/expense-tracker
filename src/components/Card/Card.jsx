import Button from "../Button/Button";
import styles from "./Card.module.css";

export default function Card({
  money,
  buttonText,
  buttonType,
  handleClick,
  success = true,
  children,
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        {`${children}: `}
        <span className={success ? styles.success : styles.failure}>
          {`₹${money}`}
        </span>
      </h3>
      <Button handleClick={handleClick} style={buttonType}>
        {buttonText}
      </Button>
    </div>
  );
}
