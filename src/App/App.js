import styles from './App.module.scss';
import Display from './Display/Display';
import Keypad from './Keypad/Keypad';
import {CHROMATIC_NOTES, FIFTH_NOTES} from './notes';
import {useState} from 'react';
import {initializaAudioContexts} from './shepardTone';

export default function App() {
  let [isChromatic, setChromatic] = useState(true);
  let [hasInitializedSound, setHasInitializedSound] = useState(false);

  function onChange(evt) {
    setChromatic(!isChromatic);
  }

  function onClick(evt) {
    initializaAudioContexts();
    setHasInitializedSound(true);
  }

  return (
    <div className={styles.root} onClick={hasInitializedSound ? null : onClick}>
      <label className={styles.label}>
        {isChromatic ? 'CHROMATIC' : 'CIRCLE OF FIFTHS'}
        <input className={styles.toggle} type="checkbox" checked={isChromatic} onChange={onChange} />
      </label>
      <div className={styles.holder}>
        <div className={styles.touchPad}>
        <Display className={styles.display} />
        <Keypad className={styles.keypad} notes={isChromatic ? CHROMATIC_NOTES : FIFTH_NOTES} />
        </div>
      </div>
    </div>
  );
}
