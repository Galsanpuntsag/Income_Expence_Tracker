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
    <div className="flex justify-center gap-20 my-30 w-full mr-20">
      <div className="flex-1 lg:h-[370px] 2xl:h-[385px] bg-white ml-10 rounded-lg">
        <h1 className="border-b-2 pb-3 font-semibold mb-1">Income - Expense</h1>
        <div className="py-10 lg:w-[300px] lg:h-[320px] ml-10 md:w-[270px]  ">
          <Doughnut data={data2} options={options2} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
