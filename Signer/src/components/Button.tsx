import { IonButton } from '@ionic/react';

import './Button.css';

function Button(props: any) {
    return (
        <IonButton size={props.size} className={'button ' + props.className} href={props.href}>{props.text}</IonButton>
    )
}

export default Button;
