import styles from './App.module.scss';
import Display from './Display/Display';
import Keypad from './Keypad/Keypad';
import {CHROMATIC_NOTES, FIFTH_NOTES} from './notes';
import {useState} from 'react';

export default function App() {
  let [isChromatic, setChromatic] = useState(false);

  function onChange(evt) {
    setChromatic(!isChromatic)
  }

  return (
    <div className={styles.root}>
      <label className={styles.label}>
        {isChromatic ? 'CHROMATIC' : 'CIRCLE OF FIFTHS'}
        <input className={styles.toggle} type="checkbox" checked={isChromatic} onChange={onChange} />
      </label>
      <div className={styles.holderHolder}>
        <div className={styles.holder}>
          <Display className={styles.display} />
          <Keypad className={styles.keypad} notes={isChromatic ? CHROMATIC_NOTES : FIFTH_NOTES} />
        </div>
      </div>
    </div>
  );
}
