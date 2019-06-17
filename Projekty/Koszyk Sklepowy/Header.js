const Header = (props) =>{

    const activeItems = props.items.filter(item => item.active)
    return(
        <header>
            <h2>Wielkość zamówienia: {activeItems.length}</h2>
            <h2>Do zapłaty {activeItems.length ?  `${activeItems.length *10}` : 0} złotych</h2>
        </header>
    )
} 