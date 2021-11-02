import './Mascot.css';

function Mascot(props: any) {
    return (
        <div className={`container circle ${props.className}`}>
            <img src="../../assets/mascot/Mascot_1.svg" alt="" />
        </div>
    );
}

export default Mascot;