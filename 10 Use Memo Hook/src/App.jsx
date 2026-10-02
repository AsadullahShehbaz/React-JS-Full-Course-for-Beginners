import React , {useState,useMemo} from 'react'

const generateProducts = ()=>{
  const items = []
  for (let i=1; i<=100000; i++){
    items.push(
      {
        id: i,
        name: `Product ${i}`,
        category: i%2 ===0? "Electronices": "Clothing"
      }
    )

  }
  return items
}

const allProducts = generateProducts()

function App(){

  const [count,setCount] = useState(0)
  const [searchTerm,setSearchTerm] = useState("")
  
  const {filteredProduct,searchTime} = useMemo(()=>{
     console.log("Starting Filtering...")

    const start = performance.now()
    const filtered = allProducts.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const end = performance.now()
    console.log("Filtering Done...")

    return {
      filteredProduct: filtered,
      searchTime : (end-start).toFixed(2)
    }
  },[searchTerm])

  return (
    <div>
      <h1>React Use Memo Product Search</h1>

      <h3>Count : {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>

      <div>
        <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>

        <p><strong>Search Time: </strong>{searchTime} ms</p>
      </div>
    </div>
  )
}
export default App