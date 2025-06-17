import { useState } from 'react'

export default function App() {
  const [fruits, setFruits] = useState<string[]>([])
  const [inputText, setInputText] = useState('')

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return
    if (event.key === 'Enter') {
      // fruits.push(inputText)
      setFruits([...fruits, inputText])
      // setFruits(fruits.concat([inputText]))
      setInputText('')
    }
  }

  return (
    <>
      <button onClick={() => setFruits(['Apple', 'Banana'])}>
        과일 한 번에 추가!
      </button>
      <div>
        <input
          value={inputText}
          onChange={event => setInputText(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}

// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = [...numbers, 6]
// // const newNumbers = [1, 2, 3, 4, 5, 6]

// const abc = { a: 1, b: 2, c: 3 }
// const xy = { x: 7, y: 8 }
// const abcxy = { ...abc, ...xy }
// abcxy = { a: 1, b: 2, c: 3, x: 7, y: 8 }
// 정답: { a: 1, b: 2, c: 3, x: 7, y: 8 }
