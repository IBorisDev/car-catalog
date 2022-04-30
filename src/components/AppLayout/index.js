import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div className="application">
      <section className="content container">{children}</section>
    </div>
  );
};

export default AppLayout;
