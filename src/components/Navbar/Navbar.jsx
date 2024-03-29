import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import LogoNavBar from './assets/logotipo_aluant_horizontal.webp'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from "../../services/firebase/firebaseConfig"
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore"

const Navbar = () => {

  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const categoriesCollection = query(collection(db, 'categories'), orderBy('order'), limit(3))

    getDocs(categoriesCollection)
      .then(QuerySnapshot => {
        const categoriesAdapted = QuerySnapshot.docs.map(doc => {

          const data = doc.data()

          return { id: doc.id, ...data }

        })

        setCategories(categoriesAdapted)

      })

      .catch(error => {
        console.error('error')
      })

  }, [])

  return (
    <header className={classes.header}>

      <img onClick={() => navigate('/')} src={LogoNavBar} alt="logotipo aluminios antioquia" />

      <nav>
        {
          categories.map(cat => {
            return <Link className={classes.navItem} key={cat.id} to={`/category/${cat.slug}`}> { cat.name } </Link>
          })
        }
      </nav>

      < CartWidget />
      
    </header>
  )
}

export default Navbar