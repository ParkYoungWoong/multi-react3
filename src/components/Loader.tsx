import styles from './Loader.module.css'

export default function Loader({
  color = '#e96900',
  size = 30,
  width = 4
}: {
  color?: string
  size?: number
  width?: number
}) {
  return (
    <>
      <div
        style={
          {
            '--hloader-color': color,
            '--hloader-size': `${size}px`,
            '--hloader-weight': `${width}px`
          } as React.CSSProperties
        }
        className={styles.hloader}></div>
    </>
  )
}
