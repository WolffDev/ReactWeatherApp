var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to my small Weather app, using ReactJS and <a href="http://www.openweathermap.org" target="_blank">Openweathermap.org</a></p>
    </div>
  )
};

module.exports = About;
