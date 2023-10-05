"use client"

import { Count } from '@/types/type'
import { useQuery } from 'react-query'
import DisplayCount from './DisplayCount'

const fetchUsers = async () => {
  const res = await fetch('http://localhost:8080/fetch/count')

  console.log(res)

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
    <div>
      <div>
        {data.map((count: Count) => (
          <DisplayCount
            key={count.id}
            date={count.date}
            count={count.count}
            userName={count.user_name}
          />
        ))}
      </div>
    </div>
  )
}

export default Header
