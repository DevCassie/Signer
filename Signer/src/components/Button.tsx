import { IonButton } from '@ionic/react';

function Button(props: any) {
    return (
        <IonButton size={props.size} className={props.className} href={props.href}>{props.text}</IonButton>
    )
}

export default Button;
