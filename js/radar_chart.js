
const CHART = document.getElementById("radar_chart");


const data = {
  labels: [
    'HTML5',
    'CSS3',
    'JAVASCRIPT',
    'BOOTSTRAP',
    'REACT'
  ],
  datasets: [{
    label: 'CODING SKILLS',
    data: [10, 10, 7, 7, 5],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};


let radar = new Chart(CHART, {
  type: 'polarArea',
  data: data,
  options: {}
});
