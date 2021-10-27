
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
      '#d84924',
      '#4563da',
      '#ead41c',
      '#8138db',
      '#77d4f2'
    ],
    borderWidth: 3,
    borderColor: '#777',
    hoverBorderWidth: 5,
    hoverBorderColor: '#000'
  }]
};


let radar = new Chart(CHART, {
  type: 'polarArea',
  data: data,
  options: {}
});
