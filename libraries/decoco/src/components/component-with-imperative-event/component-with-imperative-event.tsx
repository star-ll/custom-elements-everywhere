import { Component, DecoElement, State } from "@decoco/core";

@Component("component-with-imperative-event")
export class ComponentWithImperativeEvent extends DecoElement {
  @State() eventHandled = false;

  render() {
    return (
      <>
        <div id="handled">{this.eventHandled.toString()}</div>
        <ce-with-event
          id="wc"
          on-camelEvent={() => (this.eventHandled = true)}
        ></ce-with-event>
      </>
    );
  }
}
