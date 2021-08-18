import "./custom-button.scss";

const CustomButton = ({ children, isGoogleBtn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleBtn ? "google-btn" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
