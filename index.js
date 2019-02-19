/*
const retriever = {retrievePastWeekTimeEntries:()=>{}}; // freshbooks api client
const htmlifier = {convertToHtml:()=>{}};
const mailer = {send:(to, html)=>{}};
*/
async function go({to, retriever, htmlifier, mailer}) {
  const timeEntries = await retriever.retrievePastWeekTimeEntries();
  const html = htmlifier.convertToHtml(timeEntries);
  await mailer.send(to, html);
}
