import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const Charts = (props) => {
  const categoryData = props.category.map((x) => x.name);
  let total = 0;

  const expenseData = props.category.map((category) => {
    const v = props.expense.filter(
      (expense) => expense.category === category.id
    );
    return console.log(v.amount);
  });
  console.log(total);
  console.log(categoryData);
  console.log(expenseData);

  const state = {
    labels: [categoryData],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [1, 1, 1, 1],
      },
    ],
  };
  return (
    <div>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default Charts;
