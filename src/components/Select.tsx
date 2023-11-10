import React from "react";
import styles from "./Select.module.css";

type Option = {
  value: string,
  name: string,
}

type Prop = {
  label: string,
  options: Option[],
  onChange?: React.ChangeEventHandler<HTMLSelectElement>,
  forwardRef: React.RefObject<HTMLSelectElement>,
}

function Select({ label, options, onChange}: Prop) {
  return (
    <div className={styles.form_control}>
      <label>
        {label}
        <select
          onChange={onChange}
        >
          <option>Selecione uma opção</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Select;
