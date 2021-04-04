import styles from './Input.module.scss';
import classnames from 'classnames';

export default function Input({className, ...rest}) {
  return <input className={classnames(styles.root, className)} {...rest} />
}
