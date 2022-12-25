import {connect} from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NavigationBar from "./NavigationBar";
import { Footer } from "./Footer";
import Card from 'react-bootstrap/Card';
import Hhh from "../hhh.png"
import Uuu from "../uuu.png"
import Mmm from "../mmm.png"
import Bbb from "../abbakarravatar.jpg"


const Poll = ({question, title, author, timestamp}) => {
  return (
    <div>
   <Card style={{ width: '15rem', height: 'fit-content', margin: '6px'}}>
      <Card.Img variant="top" src={Mmm} />
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text className="text-danger">
          Open to see the poll questions and express your mind.
        </Card.Text>
        <div className="poll-date ">{formatDate(timestamp)}</div>
        <Link to={"questions/" + question.id}>
        <Button className="bg-dark" variant="primary">Open poll</Button></Link>
      </Card.Body>
    </Card>
    </div>
  );  
  }
export default connect()(Poll);
