import './Categories.style.css'
import type { Category } from '../../../types/category.types'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { capitalize } from '../../../helpers/captalize'

const Categories = () => {
  const [category, setCategory] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const queryFirestore = await getDocs(collection(db, 'categories'))
      const categoriesList = queryFirestore.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        imageUrl: doc.data().imageUrl
      }))
      setCategory(categoriesList)
      console.log('Fetched categories:', categoriesList)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories()
    }
    fetchData()
  }, [])

  return (
    <div className='container-categories'>
      <div className='categories-content'>
        {category.map((category, index) => (
          <div className='item-grid' id={`item${index + 1}`} key={category.id}>
            <h3>{capitalize(category.name)}</h3>
            <img src={category.imageUrl} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
