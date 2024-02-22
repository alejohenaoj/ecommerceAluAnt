import LogoNavBar from './assets/logotipo_aluant_horizontal.webp'
import classes from "./Navbar.module.css"
import CardWidget from "../CardWidget/CardWidget"

const Navbar = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={LogoNavBar} alt="logotipo aluminios antioquia" />
        <nav>
          <a href="#" className={classes.navItem}> Aluminio Fundido </a>
          <a href="#" className={classes.navItem}> Madera </a>
          <a href="#" className={classes.navItem}> Aluminio Repujado </a>
        </nav>
        < CardWidget />
      </header>
    </>
  )
}

export default Navbar