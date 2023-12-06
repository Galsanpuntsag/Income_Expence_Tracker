import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data2 = {
    datasets: [
      {
        data: [1000000, 5000000, 5000000, 5000000, 5000000],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Bill", "Food ", "Shopping", "Insurance", "Clothing"],
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        boxWidth: 15,
        padding: 15,
        display: false,
      },
    },
  };

  return (
    <div className="flex justify-center gap-20 w-1/2">
      <div className="flex-1 p-3 bg-white ml-5 lg:h-[360px] rounded-lg 2xl:h-[500px] 2xl:w-1/2">
        <h1 className="border-b-2 lg:mb-5  border-slate-950 font-semibold mb-1">
          Income - Expense
        </h1>
        <div className="lg:w-[200px] ml-10 2xl:w-[270px]  ">
          <Doughnut data={data2} options={options2} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
