import './IconInput.css';

function IconInput(props: any) {
    return (
        <input type={props.type} placeholder={props.placeholder} className={props.className}/>
    );
}

export default IconInput;