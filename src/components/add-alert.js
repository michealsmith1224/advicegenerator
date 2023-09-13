import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import "animate.css";

function AlertDismissible({ color, text, heading }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 7000);
  });

  if (show) {
    return (
      <Alert
        className="animate__animated animate__slideInRight"
        variant={color}
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>{heading}</Alert.Heading>
        <p className="mb-0">{text}</p>
      </Alert>
    );
  }
}

export default AlertDismissible;
