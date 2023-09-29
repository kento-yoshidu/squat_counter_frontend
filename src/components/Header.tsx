"use client"

import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const res = await fetch('http://localhost:8080/fetch/count');
  return res.json();
};

function Header() {
  const result = useQuery('users', fetchUsers);

  console.log(result);

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {/* data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))*/}
      </div>
    </div>
  );
}

export default Header;
