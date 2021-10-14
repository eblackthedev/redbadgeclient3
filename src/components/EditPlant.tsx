import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, InputBase } from "@mui/material";
import { TextField } from "@mui/material";
import APIURL from "../helpers/environment";

type PlantInfo = {
  id: number;
  plantName: string;
  plantType: string;
};
// type stateType = {
//   plants: [PlantInfo];
// };
type AcceptedProps = {
  sessionToken: string;
  plantId: number;
};
export default class EditPlant extends React.Component<
  AcceptedProps,
  PlantInfo
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      id: 0,
      plantName: "",
      plantType: "",
    };
  }

  editPlants = () => {
    console.log(this.props);
    fetch(`${APIURL}/plant/update/${this.props.plantId}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
      body: JSON.stringify({
        plant: {
          plantName: this.state.plantName,
          plantType: this.state.plantType,
        },
      }),
    })
      .then((res) => res.json())
      .then((plantData) => {
        console.log(plantData);
        // this.props.fetchPlants();
      });
  };

  componentWillMount() {
    console.log("Ran before component mounted");
  }

  componentDidMount() {
    console.log(this.props.sessionToken);
    // const url = "http://localhost:4000/plant/all";
    // const response = await fetch(url);
    // const plant = await response.json();
    console.log("props", this.props);

    // console.log(this.state.plant);
    // console.log("Ran after component mounted");
  }

  render() {
    return (
      <>
        <div>
          <TextField
            fullWidth
            label="Edit Plant Name"
            id="fullWidth"
            value={this.state.plantName}
            onChange={(e) => this.setState({ plantName: e.target.value })}
          />
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            paddingTop="30px"
            className="prompt"
          >
            <TextField
              fullWidth
              label="Edit Plant Type"
              id="fullWidth"
              value={this.state.plantType}
              onChange={(e) => this.setState({ plantType: e.target.value })}
            />
            {/* <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
              paddingTop="30px"
              className="prompt"
            > */}
            <div>
              <Button onClick={(e) => this.editPlants()} variant="contained">
                Edit Plant
              </Button>
            </div>
          </Typography>
          {/* </Typography> */}
        </div>
      </>
    );
  }
}
