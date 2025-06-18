import styles from './Button.module.css'
import Loader from '@/components/Loader'

export default function Button({
  color,
  loading,
  children,
  ...restProps
}: {
  color: 'primary' | 'secondary' | 'danger'
  loading: boolean
  children: React.ReactNode
}) {
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
