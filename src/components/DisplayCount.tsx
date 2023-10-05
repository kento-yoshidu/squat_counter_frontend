import AddButton from "./addButton"

import styles from "@/styles/display-count.module.css"

const DisplayCount = ({ date, count, userName }: { date: string, count: number, userName: string }) => {
  return (
    <div className={styles.wrapper}>
      <p>date: {date}</p>
      <p>count: {count}</p>
      <p>userName: {userName}</p>

      <hr />

      <AddButton />
    </div>
  )
}

export default DisplayCount
