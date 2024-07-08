import React, { useEffect, useRef } from "react";

const CandidateDashboardChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 400,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          barHeight: "20%",
          horizontal: true,
        },
      },
      legend: {
        show: true,
        position: "top",
        containerMargin: {
          top: -10,
        },
      },
      grid: {
        show: true,
        borderColor: "#ebedf2",
      },
      colors: ["#21c87a"],
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200],
        },
      ],
      xaxis: {
        categories: [
          "Sale associate",
          "Architecture",
          "Python engineer",
          "IT Contractor",
          "Front-end developer",
          "Python engineer",
          "Engineering",
          "Closed projects",
          "Education",
        ],
        axisBorder: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              height: 400,
              type: "bar",
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
          },
        },
      ],
    };

    if (window.ApexCharts) {
      const chart = new window.ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="user-dashboard-info-box bg-white p-4 shadow-sm">
      <div id="chart" ref={chartRef}></div>
    </div>
  );
};

export default CandidateDashboardChart;
