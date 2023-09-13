import Spinner from "react-bootstrap/Spinner";

function Loadingcomp() {
  return (
    <>
      <p variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </p>
    </>
  );
}

export default Loadingcomp;
