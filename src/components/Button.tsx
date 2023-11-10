import styles from "./Button.module.css";


type Props = {
  name: string
  onClick?: () => void
  type?: 'submit' | 'button'
  className?: string
  disabled?: boolean
}


function Button({ name, type, onClick, disabled }:Props) {
  return (
    <button
      className={styles.btn}
      type={type || 'submit'}
      onClick={ onClick }
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;