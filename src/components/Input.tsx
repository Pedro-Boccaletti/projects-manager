import styles from "./Input.module.css";

type InputProps = {
  type?: 'text' | 'number' | 'email' | 'password'
  label: string
  className?: string
  forwardRef: React.RefObject<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}


function Input({ label, type, forwardRef, placeholder, onChange }:InputProps) {
  return (
    <div className={styles.form_control}>
      <label>
        {label}
        <input
          placeholder={placeholder}
          type={type || 'text'}
          ref={forwardRef}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Input;
