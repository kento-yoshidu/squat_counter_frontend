"use client"

import { useQuery } from "react-query"
import Count from "./DisplayCount"

const fetchToday = async () => {
  const res = await fetch("http://localhost:8080/fetch/today")
  return res.json()
}

const Today = () => {
  const { data, isLoading, isError } = useQuery("today", fetchToday)

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <h1>Today(/fetch/today)</h1>

      {data && (
        <Count
          date={data.date}
          count={data.count}
          userName={data.user_name}
        />
      )}
    </>
  )
}

export default Today
