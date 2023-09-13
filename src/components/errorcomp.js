import AlertDismissible from "./add-alert";

export const Errorcomp = () => {
  return (
    <>
      <div className="ad-gen-error-alert">
        <div className="ad-gen-error">
          <AlertDismissible
            heading="Error!!!"
            color="danger"
            text="Check Your Data Connection !!!"
          />
        </div>
      </div>
    </>
  );
};
