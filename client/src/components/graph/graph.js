import React, { Component } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

class Graph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["Jun 19'", "Jul 19'", "Aug 19'", "Sep 19'", "Oct 19'", "Nov 19'", "Dec 19'"],
                datasets: [
                    {
                       label: "Winnings (USD)",
                       backgroundColor: "rgba(255, 215, 0, 0.75)",
                        data: [60, -50, 75, 140, 150, -90, 220]
                    }
                    // {
                    //     label: "Months",
                    //     backgroundColor: "rgba(0, 255, 0, 0.75)",
                    //     data:[15, 50, 50, 155, 510, 150, 50, 220]
                    // }
                ]
            }
        }
    };
    render() {
        
        return (
            <div style={{position: "relative", width: "100%", height: "100%",
             textAlign: "center", paddingTop: "45px" }}>
                {/* <h2>Total Earnings for </h2> */}
                <Bar
                    options={{
                        responsive:true,
                        legend: {
                            position: "bottom",
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    }}
                    data={this.state.data}
                />
            </div>
        )

    }

};

export default Graph;
