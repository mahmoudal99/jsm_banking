'use client';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ accounts } : DoughnutChartProps) {
  const accountsNames = accounts.map(account => account.name);
  const accountBalances = accounts.map(account => account.currentBalance);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: accountBalances,
        backgroundColor: [
          '#0747B6',
          '#2265D8',
          '#2f91FA',
        ],
      }
    ],
    labels : accountsNames
  }

  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      width={300}
      height={300}
    />
  );
}