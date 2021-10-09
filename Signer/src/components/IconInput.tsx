import './IconInput.css';

function IconInput(props: any) {
    return (
        <div className="container input">
            <i className={props.iconclassName}></i>
            <input type={props.type} placeholder={props.placeholder} className={props.className}/>
        </div>
    );
}

export default IconInput;