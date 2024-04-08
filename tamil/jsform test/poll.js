const question = document.getElementById('question');
const briyani = document.getElementById('briyani');
const savarma = document.getElementById('savarma');
const chicken65 = document.getElementById('chicken65');
const vegtali = document.getElementById('vegtali');

let bcount = 0;
let ccount = 0;
let scount = 0;
let vcount = 0;

let arr = [bcount, ccount, scount, vcount];

function updateval(index) {
    if (index !== -1) {
        arr[index]++;
        localStorage.setItem('foodcount', JSON.stringify(arr));
        updatechart();
    }
}

function updatechart() {
    let chartData = JSON.parse(localStorage.getItem('foodcount'));
    myChart.data.datasets[0].data = chartData;
    myChart.update();
}

let food = ['Briyani', 'Chicken 65', 'Savarma', 'Veg Tali'];

let myChart = new Chart("myChart", {
    type: "pie",
    data: {
        labels: food,
        datasets: [{
            backgroundColor: ["#FF5733", "#33FF57", "#5733FF", "#F3FF33"],
            data: arr
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "FOOD SURVEY"
        }
    }
});
