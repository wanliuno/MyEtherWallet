require('jest-fetch-mock').enableMocks()
fetchMock.dontMock()
function noOp() {}
if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
}
window.Worker = noOp;


