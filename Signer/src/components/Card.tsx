import './Card.css';

function Card(props: any) {
    return (
        <div className={"container card " + props.className} color={props.color}>
            {props.children}
        </div>
    )
}

export default Card;
