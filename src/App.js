import React from "react";
import DonutChart from "react-donut-chart";
import "./styles.css";

class App extends React.Component {
  dataItems = [
    {
      label: "1",
      name: "abc",
      age: "22",
      phone: "1234567890",
      value: 30000
    },
    {
      label: "1_01",
      name: "abcf",
      age: "22",
      phone: "1235674890",
      value: 36000
    },
    {
      label: "2",
      name: "abcd",
      age: "23",
      phone: "1243567890",
      value: 40000
    },
    {
      label: "2_01",
      name: "abc",
      age: "22",
      phone: "1235678940",
      value: 380000
    },
    {
      label: "3",
      name: "abdc",
      age: "24",
      phone: "1235467890",
      value: 33000
    },
    {
      label: "4",
      name: "asbc",
      age: "21",
      phone: "1245367890",
      value: 35000
    },
    {
      label: "4_03",
      name: "zabc",
      age: "27",
      phone: "1234678950",
      value: 30000
    },
    {
      label: "6",
      name: "abcz",
      age: "26",
      phone: "1234567890",
      value: 40000
    }
  ];

  render() {
    return (
      <div classlabel="App">
        <DonutChart data={this.dataItems} />
      </div>
    );
  }
}

export default App;
