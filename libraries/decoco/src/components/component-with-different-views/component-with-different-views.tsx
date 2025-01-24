import { Component, State, DecoElement } from "@decoco/core";

@Component("component-with-different-views")
export class ComponentWithDifferentViews extends DecoElement {
  @State() showWC = true;

  async toggle() {
    this.showWC = !this.showWC;
  }

  render() {
    return (
      <>
        {this.showWC ? (
          <ce-with-children id="wc"></ce-with-children>
        ) : (
          <div id="dummy">Dummy view</div>
        )}
      </>
    );
  }
}
