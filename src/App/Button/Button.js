import styles from './Button.module.scss';
import classnames from 'classnames';

export default function Button({
  className,
  href,
  isActive,

  component:Component = href ? 'a' : 'button',
  target = href && '_blank',
  ...rest
}) {
  return <Component className={classnames(styles.root, className, isActive && styles.isActive)} target={target} href={href} {...rest} />
}
