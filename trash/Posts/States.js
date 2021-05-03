import React,{useEffect,useState} from 'react'


export default function States({states, edo, setEdo}) {
  const [loading, setLoading] = useState(false)

  return (
    <form>
      <select value = {edo} onChange = {e=>setEdo(e.target.value)}>
        <option value={0}>filter by State</option>
        {
          states.map(cat=>(<option key = {cat.id} value={cat.name}>{cat.name}</option>))
        }
      </select>      
    </form>
  )
}
