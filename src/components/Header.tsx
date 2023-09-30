"use client"

import { Count } from '@/types/type'
import { useQuery } from 'react-query'

const fetchUsers = async () => {
  const res = await fetch('http://localhost:8080/fetch/count')
  return res.json();
}

function Header() {
  const { data, isLoading, isError } = useQuery('count', fetchUsers)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error! 👹</p>
  }

  return (
    <div style={{ border: "1px soli red" }}>
      <h2>ユーザ一覧</h2>
      <div>
        {data.map((count: Count) => (
          <div key={count.id}>
            <p>id: {count.id}</p>
            <p>date: {count.date}</p>
            <p>count: {count.count}</p>
            <p>username: {count.user_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
