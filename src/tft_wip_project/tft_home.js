import React from "react";
import { Card , Button} from "react-bootstrap";
import './tftstyling.css';
import tftlogo from "../assets/tftpenguin.jpg";

export default function TFTHome() {
  return (
    <div id="tft-home" className="tftcontainer">
      {/* <div id="col1"> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} width="auto" height="auto"/>
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>
      {/* </div> */}

      {/* <div id="col2"> */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>
      {/* </div> */}

      {/* <div id="col3"> */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>EXTREMELY LONG TOURNAMENT NAME</Card.Title>
          <Card.Text>
            Registration Closes: Dynamic date
          </Card.Text>
          <Card.Text>
            Prize Pool: $ Dynamic amount
          </Card.Text>
          <Card.Text>
            Teams: Dynamic team size
          </Card.Text>
          <Button variant="primary">REGISTER</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tftlogo} />
        <Card.Body>
          <Card.Title>New Tournament</Card.Title>
          
          <Button variant="primary">Create A NEW</Button>
        </Card.Body>
        </Card>
      {/* </div> */}
    </div>
  );
}