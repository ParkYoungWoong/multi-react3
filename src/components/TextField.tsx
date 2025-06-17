import styles from './TextField.module.css'

type Props = {
  label: string
  hint?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextField({ label, hint, ...restProps }: Props) {
  return (
    <>
      <label className={styles.textfield}>
        <span className={styles.label}>{label}</span>
        <input
          {...restProps}
          className={styles.input}
        />
        {hint && <div className={styles.hint}>{hint}</div>}
      </label>
    </>
  )
}
