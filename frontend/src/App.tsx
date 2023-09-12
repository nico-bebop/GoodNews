import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        populateNewsData()
    }, []);

    return (
    <>    
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

async function populateNewsData() {
    const response = await fetch('api/news/top-headlines?country=ar&page=1&pageSize=10');
    console.log(response);
    //const data = await response.json();
    //this.setState({ newsResult: data, loading: false });
}

export default App
