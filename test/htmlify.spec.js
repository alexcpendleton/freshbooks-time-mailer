const htmlify = require("../htmlify");
const assert = require("assert");
function removeWhitespace(s) {
  return s.replace(/(  )/gi, "").replace(/\n/gi, "");
}
describe("toTable", () => {
  it("should make a table with two HTML rows with the given two entries", () => {
    const entries = [
      {
        project: "Client Name",
        service: "Software Development",
        note: "Did some work",
        date: "Feb 1, 2019",
        duration: "1h 30m"
      },
      {
        project: "iBusiness, LLC",
        service: "Consulting",
        note: "Discussion",
        date: "Jan 10, 2019",
        duration: "8h"
      }
    ];
    // to check that we use the literal value, no summing in htmlify
    const total = "9h 30m or so";
    const actual = removeWhitespace(htmlify.toTable({ entries, total }));
    const expected = removeWhitespace(`<table>
    <thead>
      <tr>
        <td>Client</td>
        <td>Project/Note</td>
        <td>Date</td>
        <td>Time</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Client Name</td>
        <td>
          <div>Software Development</div>
          <div>Did some work</div>
        </td>
        <td>Feb 1, 2019</td>
        <td>1h 30m</td>
      </tr><tr>
        <td>iBusiness, LLC</td>
        <td>
          <div>Consulting</div>
          <div>Discussion</div>
        </td>
        <td>Jan 10, 2019</td>
        <td>8h</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="font-weight:bold">
        <td colspan="3">Total</td>
        <td>9h 30m or so</td>
      </tr>
    </tfoot>
  </table>`);
    assert.equal(expected, actual);
  });
});
