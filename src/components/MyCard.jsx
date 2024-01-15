import Card from "react-bootstrap/Card";
import Tag from "./Tags";

function DogCard(props) {
  const source = props.source;
  const title = props.title;
  const description = props.description;
  const text = props.text
  const color = props.color
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={source} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tag text={text} color={color}/>
      </Card.Body>
    </Card>
  );
}

export default DogCard;
