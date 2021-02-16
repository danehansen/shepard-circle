import styles from './Display.module.scss';
import classnames from 'classnames';

export default function Display({className}) {
  return (
    <div className={classnames(styles.root, className)}>
    </div>
  );
}
