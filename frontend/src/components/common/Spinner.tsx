import React from "react";
import "./Spinner.scss";

interface ComponentProps {
  className?: string;
  style?: any;
}

const Spinner = (props: ComponentProps) => {
  const { className, style } = props;

  return (
    <div style={style} className={`spinner ${className}`}>
      <div className="loader" />
    </div>
  );
};

export default Spinner;
