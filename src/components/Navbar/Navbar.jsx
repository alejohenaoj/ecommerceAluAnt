import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <header className={classes.header}>
                <h4>Ecommerce</h4>
                <nav>
                    <a className={classes.prueba}> Celulares </a>
                    <a className="btn btn-primary"> Tablets </a>
                    <a> Notebook </a>
                </nav>
            </header>
        </>
    )
}

export default Navbar