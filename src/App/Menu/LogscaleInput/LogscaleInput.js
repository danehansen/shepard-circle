export default function LogscaleInput({min, max, step, value, ...rest}) {
  const v = value;
  const s = step;

  // TODO do i need to change the events emmitted?
  // onChange={function({target: {value}}){}}
  return <input value={v} step={s} min={min} max={max} {...rest} />
}
