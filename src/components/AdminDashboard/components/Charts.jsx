
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Bar } from 'react-chartjs-2';
import {
    Chart as Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const ChartData = {
    labels: [],
    datasets: [{
        label: '',
        data:'',
        borderColor:'',
        backgroundColor:'',
    }],
}

const Charts = () => {
    const [chartData, setChartData] = useState<ChartData>({
        datasets: [{
            label: '',
            data: [],
            borderColor: '',
            backgroundColor: '',
        }],
        labels: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Plants', 'Medicinal Plants', 'Animals', 'Cultures'],
            datasets: [
                {
                    label: 'No of Entries',
                    data: [150, 30, 80, 100],
                    borderColor: 'rgb(211,211,211)',
                    backgroundColor: 'rgb(120,81,169)',
                },
            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Categories Entered'
                },
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, []);

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-gray-200'>
                {chartOptions && Object.keys(chartOptions).length > 0 && (
                    <Bar data={chartData} options={chartOptions} />
                )}
            </div>
        </>
    );
};

 
export default Charts;