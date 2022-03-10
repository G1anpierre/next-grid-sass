import React from 'react'
import styles from './Story.module.scss'

export const Story = () => {
  return (
    <div className={styles.container}>
      <div className={styles.story__picturs}>Picture</div>
      <div className={styles.story__content}>Content</div>
    </div>
  )
}
