import Button from 'App/Button/Button';
import styles from './VirtualFingers.module.scss';
import {VIRTUAL_FINGER_UNITS} from 'util/constants';
import MultiTouchButtonGroup from 'App/MultiTouchButtonGroup/MultiTouchButtonGroup';
import {useState, useEffect} from 'react';

const {STEPS, CENTS} = VIRTUAL_FINGER_UNITS;

export default function VirtualFingers({pitchNames, hasMode, toggleVirtualFinger, setManualVirtualFingers, isToggling, soundingVirtualFingers}) {
  const [halfStepIndexes, setHalfStepIndexes] = useState([]);
  const [stepIndexes, setStepIndexes] = useState([]);

  let soundingVirtualStepIndexes = [];
  let soundingVirtualHalfstepIndexes = [];
    soundingVirtualFingers.forEach(({value, units}) => {
      if (units === STEPS) {
        soundingVirtualStepIndexes.push(value)
      } else {
        soundingVirtualHalfstepIndexes.push(value / 100);
      }
    })
  // console.log(soundingVirtualStepIndexes, soundingVirtualHalfstepIndexes)

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
        isActive={soundingVirtualHalfstepIndexes.indexOf(i) >= 0}
        onClick={isToggling ? toggleVirtualFinger.bind(null, i * 100, CENTS) : null}
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
          isActive={soundingVirtualStepIndexes.indexOf(i) >= 0}
          className={styles.button}
          onClick={isToggling ? toggleVirtualFinger.bind(null, i, STEPS) : null}
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

  const Component = isToggling ? 'div' : MultiTouchButtonGroup;
  const semitoneListeners = {};
  const stepListeners = {};
  if (!isToggling) {
    semitoneListeners.setActiveButtons = handleHalfSteps;
    stepListeners.setActiveButtons = handleSteps;
  }

  return (
    <div className={styles.root}>
      <Component
        className={styles.row}
        {...semitoneListeners}
      >
        {semitoneNodes}
      </Component>
      {hasMode && (
        <Component
          className={styles.row}
          {...stepListeners}
        >
          {stepNodes}
        </Component>
      )}
    </div>
  );
}
