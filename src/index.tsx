import React, { FunctionComponent } from "react";

interface Props {}

type IndexProps = Props;

const Index: FunctionComponent<IndexProps> = (props) => {
  return <div>Hello from Router Dom Wrapper!</div>;
};

export { Index };
