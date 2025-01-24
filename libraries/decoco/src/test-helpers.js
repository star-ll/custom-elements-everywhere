// Substitute for updateComplete
export async function waitForRender(element) {
  return new Promise((resolve) => {
    element.$nextTick(resolve);
  });
}
