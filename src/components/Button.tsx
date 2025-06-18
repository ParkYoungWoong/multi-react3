import styles from './Button.module.css'
import Loader from '@/components/Loader'

type Props = {
  color?: 'primary' | 'secondary' | 'danger'
  loading?: boolean
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  color = 'secondary',
  loading,
  children,
  ...restProps
}: Props) {
  return (
    <>
      <button
        {...restProps}
        className={`${styles.button} ${styles[color]}`}>
        {loading ? (
          <Loader
            color="#fff"
            size={16}
            width={3}
          />
        ) : (
          children
        )}
      </button>
    </>
  )
}
