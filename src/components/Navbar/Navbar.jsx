import LogoNavBar from './assets/logotipo_aluant_horizontal.webp'
import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header className={classes.header}>

      <img src={LogoNavBar} alt="logotipo aluminios antioquia" />

      <nav>
        <Link to='/category/Aluminio Fundido' className={classes.navItem}> Aluminio Fundido </Link>
        <Link to='/category/Madera' className={classes.navItem}> Madera </Link>
        <Link to='/category/Aluminio Repujado' className={classes.navItem}> Aluminio Repujado </Link>
      </nav>

      < CartWidget />
      
    </header>
  )
}

export default Navbar