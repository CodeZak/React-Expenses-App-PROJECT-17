import "./ExpensesChart.css";
import Bar from "./Bar";

export default function ExpensesChart(props) {

    return (
        <div className="card chart">
            {props.chartStat.map((bar) => (
                <Bar
                    month={bar.label}
                    Amount={bar.Amount}
                    key={bar.label}
                    maxValue={props.maxValue}
                />
            ))}
        </div>
    );
}
