// import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Card, CardHeader, CardBody, Container, Button } from "reactstrap";

// class Results extends React.Component {
//   state = {
//     title: "",
//     date: "",
//     url: ""

//   };
//   componentDidMount() {
//     axios.get(`/api/${this.props.match.params.id}`)
//     .then(res => {
//       this.setState(res.data);
//     })
//     .catch(err => console.log(err));
//   }


//   render() {
//       return (
//           <Card>
//             <CardHeader>
//                 <h4>{this.state.title}</h4>
//             </CardHeader>
//           </Card>  
//       )
//   }


// export default Results;