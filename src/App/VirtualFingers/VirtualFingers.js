import Button from 'App/Button/Button';
import styles from './VirtualFingers.module.scss';
import {VIRTUAL_FINGER_UNITS} from 'util/constants';
import MultiTouchButtonGroup from 'App/MultiTouchButtonGroup/MultiTouchButtonGroup';
import {useState, useEffect} from 'react';

const {STEPS, CENTS} = VIRTUAL_FINGER_UNITS;

export default function VirtualFingers({pitchNames, hasMode, toggleVirtualFinger, setManualVirtualFingers}) {
  const [halfStepIndexes, setHalfStepIndexes] = useState([]);
  const [stepIndexes, setStepIndexes] = useState([]);

  useEffect(() => {
    const virtualFingers = [];
    stepIndexes.forEach((index) => {
      virtualFingers.push({
        value: index + 1,
        units: STEPS,
      });
    });
    halfStepIndexes.forEach((index) => {
      virtualFingers.push({
        value: (index + 1) * 100,
        units: CENTS,
      });
    });
    setManualVirtualFingers(virtualFingers);
  }, [stepIndexes, halfStepIndexes, setManualVirtualFingers]);

  const semitoneNodes = [];
  for (let i = 1; i < 12; i++) {
    semitoneNodes.push(
      <Button
        key={i}
        className={styles.button}
        isActive={halfStepIndexes.indexOf(i - 1) >= 0}
        onDoubleClick={toggleVirtualFinger.bind(null, i * 100, CENTS)}
      >
        <span className={styles.fraction}>+</span>
        <span className={styles.fraction}>
          <div className={styles.numerator}>{i}</div>
          <div className={styles.denominator}>2</div>
        </span>
      </Button>
    )
  }

  const stepNodes = [];
  if (hasMode) {
    for (let i = 1; i < 7; i++) {
      stepNodes.push(
        <Button
          key={i}
          isActive={stepIndexes.indexOf(i - 1) >= 0}
          className={styles.button}
          onDoubleClick={toggleVirtualFinger.bind(null, i, STEPS)}
        >
          <span className={styles.fraction}>+{i}</span>
        </Button>
      );
    }
  }

  function handleHalfSteps(activeButtons) {
    setHalfStepIndexes(activeButtons);
  }

  function handleSteps(activeButtons) {
    setStepIndexes(activeButtons);
  }


  return (
    <div className={styles.root}>
      <MultiTouchButtonGroup
        className={styles.row}
        setActiveButtons={handleHalfSteps}
      >
        {semitoneNodes}
      </MultiTouchButtonGroup>
      {hasMode && (
        <MultiTouchButtonGroup
          className={styles.row}
          setActiveButtons={handleSteps}
        >
          {stepNodes}
        </MultiTouchButtonGroup>
      )}
    </div>
  );
}
