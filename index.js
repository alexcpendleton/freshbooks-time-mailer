/*
const retriever = {retrievePastWeekTimeEntries:()=>{}}; // freshbooks api client
const htmlifier = {convertToHtml:()=>{}};
const mailer = {send:(to, html)=>{}};
*/
async function go({
  to,
  retrievePastWeekTimeEntries,
  convertToHtml,
  sendMail
}) {
  const timeEntries = await retrievePastWeekTimeEntries();
  const html = convertToHtml(timeEntries);
  await sendMail(to, html);
}
