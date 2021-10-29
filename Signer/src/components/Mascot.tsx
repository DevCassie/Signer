import './Mascot.css';

function Mascot(props: any) {
    return (
        <div className={`container circle ${props.className}`}>
            <img src="../../assets/mascot/mascot.svg" alt="" />
        </div>
    );
}

export default Mascot;