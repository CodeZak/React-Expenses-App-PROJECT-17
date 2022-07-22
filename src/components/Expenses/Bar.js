import "./Bar.css";

export default function Tube(props) {
    const style = {
        height:
            props.maxValue !== 0
                ? `${(props.Amount * 100) / props.maxValue}%`
                : `${0}%`,
    };

    return (
        <div className="bar-container">
            <div className="bar">
                <div className="liquid" style={style}></div>
            </div>
            <div className="month">
                {" "}
                <span>{props.month}</span>
            </div>
        </div>
    );
}
