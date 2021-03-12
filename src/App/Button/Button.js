import styles from './Button.module.scss';
import classnames from 'classnames';

export default function Button({className, ...rest}) {
  return <button className={classnames(styles.root, className)} {...rest} />
}
