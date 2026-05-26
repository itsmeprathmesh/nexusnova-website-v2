import { Resend } from 'resend';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const from = process.env.RESEND_FROM || 'NexusNova Studio <onboarding@resend.dev>';
export async function sendLeadEmails(input:{name:string; email:string; phone:string; business_name:string; service_needed:string; budget:string; timeline:string; message:string;}){
  if(!resend) return { skipped:true };
  const notify = process.env.LEAD_NOTIFY_EMAIL || process.env.ADMIN_EMAIL;
  const adminHtml = `<h2>New NexusNova Lead</h2><p><b>Name:</b> ${input.name}</p><p><b>Email:</b> ${input.email}</p><p><b>Phone:</b> ${input.phone}</p><p><b>Business:</b> ${input.business_name}</p><p><b>Service:</b> ${input.service_needed}</p><p><b>Budget:</b> ${input.budget}</p><p><b>Timeline:</b> ${input.timeline}</p><p><b>Message:</b><br/>${input.message}</p>`;
  const clientHtml = `<div style="font-family:Inter,Arial,sans-serif;background:#0A0A0F;color:#fff;padding:32px;border-radius:20px"><h1>Thanks, ${input.name}.</h1><p>We received your project inquiry for <b>${input.service_needed}</b>. NexusNova Studio will review your details and contact you shortly.</p><p style="color:#a9a9b5">Reply to this email or message us on WhatsApp for urgent requirements.</p><hr style="border-color:#242433"/><p>NexusNova Studio — Premium Websites & AI Systems</p></div>`;
  const tasks=[] as Promise<any>[];
  if(notify) tasks.push(resend.emails.send({from,to:notify,subject:`New Lead: ${input.name} - ${input.service_needed}`,html:adminHtml}));
  tasks.push(resend.emails.send({from,to:input.email,subject:'We received your NexusNova Studio inquiry',html:clientHtml}));
  await Promise.allSettled(tasks);
  return { sent:true };
}
