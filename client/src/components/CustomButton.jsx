import React from 'react';

import styles from '../styles';
import '../styles/Button.css';

const CustomButton = ({ title, handleClick, restStyles }) => (
  <button
    type="button"
    className={`${styles.btn} ${restStyles} btn`}
    onClick={handleClick}
  >
<span>
    {title}
</span>
  </button>
);

export default CustomButton;
