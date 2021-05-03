import React,{useEffect,useState} from 'react'


export default function Categories({categories, category, setCategory}) {
  const [loading, setLoading] = useState(false)

  return (
    <form>
      <select value = {category} onChange = {e=>setCategory(e.target.value)}>
        <option value={0}>filter by Category</option>
        {
          categories.map(cat=>(<option key = {cat.id} value={cat.name}>{cat.name}</option>))
        }
      </select>      
    </form>
  )
}
