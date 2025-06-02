function FavoriteFood(props){
    return (
        <ul>
            <Food food={props.listFood.map(food => <li key={food}>{food}</li>)}/>
        </ul>
    );
}

function Food(props){
    return <>{props.food}</>;
}

export default FavoriteFood;