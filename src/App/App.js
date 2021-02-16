import styles from './App.module.scss';
import Display from './Display/Display';
import Keypad from './Keypad/Keypad';
import TouchPad from './TouchPad/TouchPad';
import {CHROMATIC_NOTES, FIFTH_NOTES} from './notes';
import {useState} from 'react';
import {initializaAudioContexts} from './shepardTone';

export default function App() {
  let [isChromatic, setChromatic] = useState(true);
  let [hasInitializedSound, setHasInitializedSound] = useState(false);
  let [activeNotes, setActiveNotes] = useState([]);

  function onChange(evt) {
    setChromatic(!isChromatic);
  }

  function onClick(evt) {
    initializaAudioContexts();
    setHasInitializedSound(true);
  }

  function onTouchCallback(directions) {
    for(const note of CHROMATIC_NOTES) {
      if (directions.indexOf(note.index) >= 0) {
        note.play();
      } else {
        note.pause();
      }
    }
    setActiveNotes(directions);
  }

  return (
    <div className={styles.root} onClick={hasInitializedSound ? null : onClick}>
      <label className={styles.label}>
        {isChromatic ? 'CHROMATIC' : 'CIRCLE OF FIFTHS'}
        <input className={styles.toggle} type="checkbox" checked={isChromatic} onChange={onChange} />
      </label>
      <div className={styles.holder}>
        <div className={styles.holdee}>
          <Display activeNotes={activeNotes} className={styles.touchPad} />
          <Keypad className={styles.touchPad} notes={isChromatic ? CHROMATIC_NOTES : FIFTH_NOTES} />
          <TouchPad callback={onTouchCallback} className={styles.touchPad}/>
        </div>
      </div>
    </div>
  );
}
