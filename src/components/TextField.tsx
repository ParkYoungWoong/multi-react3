import styles from './TextField.module.css'

type Props = {
  ref?: React.RefObject<HTMLInputElement | null>
  label: string
  hint?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextField({ ref, label, hint, ...restProps }: Props) {
  return (
    <>
      <label className={styles.textfield}>
        <span className={styles.label}>{label}</span>
        <input
          ref={ref}
          {...restProps}
          className={styles.input}
        />
        {hint && <div className={styles.hint}>{hint}</div>}
      </label>
    </>
  )
}
