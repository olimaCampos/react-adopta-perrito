import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Tag(props) {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg={props.color}>{props.text}</Badge>
    </Stack>
  );
}

export default Tag;