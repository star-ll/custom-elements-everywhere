import { Component, DecoElement } from "@decoco/core";

@Component("component-with-children")
export class ComponentWithChildren extends DecoElement {
  render() {
    return <ce-with-children id="wc"></ce-with-children>;
  }
}
