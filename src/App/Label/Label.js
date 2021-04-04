import styles from './Label.module.scss';
import classnames from 'classnames';

export default function Label({className, children, text, wide, ...rest}) {
  return <label className={classnames(styles.root, className, wide && styles.wide)} {...rest}>
    {children}
    {!!text && <div className={styles.text}>{text}</div>}
  </label>
}
