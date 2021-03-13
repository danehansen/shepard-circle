import styles from './Button.module.scss';
import classnames from 'classnames';

export default function Button({
  className,
  href,

  component:Component = href ? 'a' : 'button',
  target = href && '_blank',
  ...rest
}) {
  return <Component className={classnames(styles.root, className)} target={target} href={href} {...rest} />
}
