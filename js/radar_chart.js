
const CHART = document.getElementById("radar_chart");

// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';

const data = {
  labels: [
    'HTML5',
    'CSS3',
    'JAVASCRIPT',
    'BOOTSTRAP',
    'REACT'
  ],
  datasets: [{
    labels: 'CODING SKILLS',
    data: [10, 10, 7, 7, 5],
    backgroundColor: [
      '#d84924',
      '#4563da',
      '#ead41c',
      '#8138db',
      '#77d4f2'
    ],
    borderWidth: 2,
    borderColor: '#777',
    hoverBorderWidth: 4,
    hoverBorderColor: '#000'
  }]
};


let radar = new Chart(CHART, {
  type: 'polarArea',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'My SkillSets',
        font: {
          size: 16,
          family: 'Roboto Mono'
        }
      },
      legend: {
        display: true,
        position: 'top',
      }
    }
  }
});

