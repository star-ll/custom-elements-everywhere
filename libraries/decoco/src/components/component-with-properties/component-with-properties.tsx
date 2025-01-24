import { Component, State, DecoElement } from "@decoco/core";

@Component("component-with-properties")
export class ComponentWithProperties extends DecoElement {
  @State() bool = true;
  @State() num = 42;
  @State() str = "Decoco";
  @State() arr = "decoco".split("");
  @State() obj = { org: "Deco", repo: "decoco" };
  @State() camelCaseObj = { label: "passed" };

  render() {
    return (
      <>
        <ce-with-properties
          id="wc"
          bool={this.bool}
          num={this.num}
          str={this.str}
          arr={this.arr}
          obj={this.obj}
          camelCaseObj={this.camelCaseObj}
        ></ce-with-properties>
      </>
    );
  }
}
