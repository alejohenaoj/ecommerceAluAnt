import classes from "./ItemListContainer.module.css"

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className={classes.tituloH1}> {props.greeting} </h1>
        </>
    )
}

export default ItemListContainer;