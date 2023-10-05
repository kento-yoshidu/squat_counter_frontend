"use client"

const AddButton = () => {
  const handleClick = async () => {
    const res = await fetch("http://localhost:8080/add/count", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        count: "9999999",
        user_name: "takashi"
      })}
    )

    console.log(res)
  }

  return (
    <button onClick={handleClick}>
      +10
    </button>
  )
}

export default AddButton
