function toRow({ project, service, note, date, duration }) {
  return `<tr>
  <td>${project}</td>
  <td>
    <div>${service}</div>
    <div>${note}</div>
  </td>
  <td>${date}</td>
  <td>${duration}</td>
</tr>`;
}
function toRows(entries) {
  return entries.map(toRow).join("");
}
function toTable({ entries, total }) {
  return `<table>
  <thead>
    <tr>
      <td>Client</td>
      <td>Project/Note</td>
      <td>Date</td>
      <td>Time</td>
    </tr>
  </thead>
  <tbody>
    ${toRows(entries)}
  </tbody>
  <tfoot>
    <tr style="font-weight:bold">
      <td colspan="3">Total</td>
      <td>${total}</td>
    </tr>
  </tfoot>
</table>`;
}

exports.toTable = toTable;
