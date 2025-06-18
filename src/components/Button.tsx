import styles from './Button.module.css'
import Loader from '@/components/Loader'

export default function Button({
  color,
  loading,
  children
}: {
  color: 'primary' | 'secondary' | 'danger'
  loading: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`}>
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
