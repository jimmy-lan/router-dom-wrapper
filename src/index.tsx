import React, { FunctionComponent } from "react";

interface Props {}

type IndexProps = Props;

const Welcome: FunctionComponent<IndexProps> = (props) => {
  return <div>Hello from Router Dom Wrapper!</div>;
};

export { Welcome };
