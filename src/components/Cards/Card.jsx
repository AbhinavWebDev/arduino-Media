import Card from "react-bootstrap/Card";

function BgColorExample() {
  return (
    <>
      <Card
        bg={"Primary".toLowerCase()}
        key={"Primary"}
        text={"Primary".toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{"Primary"} Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default BgColorExample;
