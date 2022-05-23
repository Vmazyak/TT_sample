export function randomValue() {
  return Math.random().toString(36).substring(2, 9);
}

export function todaysData() {
  const isoDate = new Date().toISOString();
  const currentDate = `${isoDate.slice(0, 10)}`;
  return currentDate;
}

export function consoleErrorVerification() {
  cy.window().then((win) => {
    expect(win.console.error).to.have.callCount(0);
  });
}
