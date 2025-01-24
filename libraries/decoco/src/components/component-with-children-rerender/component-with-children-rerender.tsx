import { Component, DecoElement, State } from "@decoco/core";

@Component("component-with-children-rerender")
export class ComponentWithChildrenRerender extends DecoElement {
  @State() count = 1;

  componentDidMount() {
    Promise.resolve().then((_) => this.count++);
  }

  render() {
    return (
      <>
        <ce-with-children id="wc">{this.count}</ce-with-children>
      </>
    );
  }
}
