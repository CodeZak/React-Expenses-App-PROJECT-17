import ExpensesChart from "./ExpensesChart";

export default function Chart(props) {
    console.log(props.filteredExpenses);
    let chartStat = [
        { label: "Jan", Amount: 0 },
        { label: "Fev", Amount: 0 },
        { label: "Mar", Amount: 0 },
        { label: "Apr", Amount: 0 },
        { label: "May", Amount: 0 },
        { label: "Jun", Amount: 0 },
        { label: "Jul", Amount: 0 },
        { label: "Aug", Amount: 0 },
        { label: "Sep", Amount: 0 },
        { label: "Oct", Amount: 0 },
        { label: "Nov", Amount: 0 },
        { label: "Dec", Amount: 0 },
    ];

    for (const item of props.filteredExpenses) {
        const i = item.date.getMonth()
        chartStat[i].Amount += item.amount
    }

    let totalAmount2 = chartStat.map(item => item.Amount)
    let maxValue = Math.max(...totalAmount2)

/*     let monthsNum = props.filteredExpenses.map((item) => {
        return item.date.getMonth();
    });

    let listo = [];
    let m = 0;
    for (let i = 0; i < monthsNum.length; i++) {
        for (let j = 0; j < monthsNum.length; j++) {
            if (monthsNum[i] === monthsNum[j]) {
                m++;
            }
        }
        listo.push({ Month: monthsNum[i], NumOfTimes: m });
        m = 0;
    }

    let listo2 = listo.map((element) => {
        return JSON.stringify(element);
    });

    let UniqueListo = [...new Set(listo2)];
    let finalList = UniqueListo.map((element) => {
        return JSON.parse(element);
    });
 */
    return <ExpensesChart chartStat={chartStat} maxValue={maxValue} />;
}
