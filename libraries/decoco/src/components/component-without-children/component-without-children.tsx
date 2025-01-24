import { Component, DecoElement } from "@decoco/core";

@Component("component-without-children")
export class ComponentWithoutChildren extends DecoElement {
  render() {
    return (
      <>
        <ce-without-children id="wc"></ce-without-children>
      </>
    );
  }
}
