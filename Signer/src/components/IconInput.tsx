import { IonInput } from '@ionic/react';
import './IconInput.css';

function IconInput(props: any) {
    return (
        <div className="container input">
            <i className={props.iconclassName}></i>
            <IonInput type={props.type} placeholder={props.placeholder} className={props.className} value={props.value} onIonChange={props.onIonChange} />
        </div>
    );
}

export default IconInput;