import { Component, DecoElement, State } from "@decoco/core";

@Component("component-with-declarative-event")
export class ComponentWithDeclarativeEvent extends DecoElement {
  @State() lowercaseHandled = false;
  @State() kebabHandled = false;
  @State() camelHandled = false;
  @State() capsHandled = false;
  @State() pascalHandled = false;

  render() {
    return (
      <>
        <div id="lowercase">{this.lowercaseHandled.toString()}</div>
        <div id="kebab">{this.kebabHandled.toString()}</div>
        <div id="camel">{this.camelHandled.toString()}</div>
        <div id="caps">{this.capsHandled.toString()}</div>
        <div id="pascal">{this.pascalHandled.toString()}</div>
        <ce-with-event
          id="wc"
          on-lowercaseevent={() => (this.lowercaseHandled = true)}
          on-kebab-event={() => (this.kebabHandled = true)}
          on-camelEvent={() => (this.camelHandled = true)}
          on-CAPSevent={() => (this.capsHandled = true)}
          on-PascalEvent={() => (this.pascalHandled = true)}
        ></ce-with-event>
      </>
    );
  }
}
