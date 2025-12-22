import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Terms of Service",
  description:
  "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  keywords:
  "game server hosting, Minecraft hosting, web hosting, game hosting, 99.99% uptime, cheap Minecraft hosting, high-performance hosting, 24/7 support, affordable hosting plans, lodestone",
  openGraph: {
    title: "Lodestone | Terms of Service",
    description:
    "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  },
  twitter: {
    title: "Lodestone | Terms of Service",
    description:
    "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  },
};

const TermsOfService = () => {
  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="border-secondary-400 sticky top-20 max-w-[250px] rounded-xl border p-5">
              <span className="text-secondary-200 mb-1 block text-sm font-medium">
                Table of Contents
              </span>
              <ul className="ml-5 flex list-decimal flex-col gap-2">
                {[
                  { id: "header1", label: "Agreement To Terms" },
                  { id: "header2", label: "Changes & Updates" },
                  { id: "header3", label: "Age Condition & Authority" },
                  { id: "header4", label: "Payments & Changes of Services" },
                  { id: "header5", label: "Refunds & Cancellation" },
                  { id: "header6", label: "Our Obligations" },
                  { id: "header7", label: "Your Obligations" },
                  { id: "header8", label: "Data" },
                  { id: "header9", label: "Content & Use of Services" },
                  { id: "header10", label: "Other Policies" },
                  { id: "header11", label: "Enforcement" },
                  { id: "header12", label: "Governing Law" },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="documentStyling col-span-4 lg:col-span-3">
            <h1>Terms of Service</h1>
            <p>
              Last Updated: <strong>22 May 2025</strong>
            </p>
            <br></br>
            <p>
              Please send all legal enquiries to: legal@lodestonetechnologies.co.uk
            </p>
<br></br>
            <Section
              id="header1"
              title="Agreement To Terms"
              content={
                <>
                  <p>
                    <strong>1.1.</strong> By creating a Lodestone account and using the services, you are deemed to have accepted these Terms of Service and all other legal policies. The terms “We”, “Our” or “Us” shall refer to Lodestone Technologies Ltd T/A Lodestone, and “You”, “Your” or “Customer” shall be deemed as the person/company representative accepting these Terms of Service. These terms constitute a binding and enforceable legal agreement between Lodestone and any associated group companies/brands and you.
                  </p>
                </>
              }
            />

            <Section
              id="header2"
              title="Changes & Updates"
              content={
                <>
                  <p>
                    <strong>2.1.</strong> We reserve the right to, with or without notice, change or update these Terms of Service, the Privacy Policy, the Service Level Agreement, and any information relating to the services, from time to time, to comply with law or to meet our changing business requirements.
                  </p>
                </>
              }
            />

            <Section
              id="header3"
              title="Age Condition & Authority"
              content={
                <>
                  <p>
                    <strong>3.1.</strong> You represent and warrant that by signing up to our services, you are at least eighteen (18) years of age or thirteen (13) years of age with consent from a legal adult.
                  </p>
                  <p>
                    <strong>3.2.</strong> Alternatively, if you are purchasing services on behalf of a company/third party, you represent and warrant that you have the authority to do so, which in turn is bound by these Terms of Service.
                  </p>
                </>
              }
            />

            <Section
              id="header4"
              title="Payments & Changes of Services"
              content={
                <>
                  <p>
                    <strong>4.1.</strong> All services must be paid for in advance, unless otherwise stated differently.
                  </p>
                  <p>
                    <strong>4.2.</strong> Lodestone will automatically generate an invoice in respect of the next period at the end of the current period unless you have cancelled your services.
                  </p>
                  <p>
                    <strong>4.3.</strong> Payment will be taken via the chosen payment methods specified within the Client Portal and will be non-refundable. In cases of failed payment, the invoice will be considered overdue and immediately payable.
                  </p>
                  <p>
                    <strong>4.4.</strong> You are required to have a valid payment method registered to your account at all times. Failure to do so will result in restricted access to your account. If you cancel your payment method, you must update your account and provide details of a current valid payment method.
                  </p>
                  <p>
                    <strong>4.5.</strong> Lodestone reserves the right to change the prices and/or nature of our services by giving you 14 days written notice of those changes. Notice of changes to prices and/or services will be given by email to the email address we hold for your account. Any price change only becomes effective when the service reaches the end of its current term. You will be charged the new price when the service is automatically renewed at the end of the current term.
                  </p>
                  <p>
                    <strong>4.6.</strong> We reserve the right to interrupt, cancel or suspend all services until payment is received in full and all outstanding charges are cleared. Any non-payment of a recurring invoice may be subject to a late fee worth 25% of the invoice total. You are responsible for all money owed to us under these terms until your service is terminated. You are also responsible for any additional costs incurred by us in taking steps to recover any sums due by you.
                  </p>
                  <p>
                    <strong>4.7.</strong> We reserve the right to pass your debt onto a third party recovery agent and you accept all liability for the recovery of our costs from you.
                  </p>
                  <p>
                    <strong>4.8.</strong> If you withdraw any payments made via a bank, credit card or PayPal (a &quot;chargeback&quot;), we reserve the right to interrupt, suspend or cancel your services and/or charge a fee. Such action is without prejudice to our right to recover any and all outstanding sums from you and your obligation to pay the same to us.
                  </p>
                </>
              }
            />

            <Section
              id="header5"
              title="Refunds & Cancellation"
              content={
                <>
                  <p>
                    <strong>5.1.</strong> All additional setup fees for services are strictly non-refundable.
                  </p>
                  <p>
                    <strong>5.2.</strong> You are entitled to a full refund within 24 hours of initial purchase of the service(s). Dedicated servers are strictly non-refundable, and this will be clearly stated on the website.
                  </p>
                  <p>
                    <strong>5.3.</strong> If you breach these terms, you will not be entitled to a refund, in the event of a cancellation/termination.
                  </p>
                  <p>
                    <strong>5.4.</strong> Account credit can only be used for payment (or partial payment) of your service, and is non-refundable.
                  </p>
                  <p>
                    <strong>5.5.</strong> Lodestone will provide the services for the period stated on the order confirmation, which shall then automatically renew for further periods, subject to termination by you requesting cancellation prior to renewal.
                  </p>
                  <p>
                    <strong>5.6.</strong> We do not allow product tasting (purchasing a service with the intention of testing and then cancelling it). We reserve the right to refuse a refund where product tasting is suspected of taking place.
                  </p>
                  <p>
                    <strong>5.7.</strong> We reserve the right to refuse any cancellation or refund request as deemed appropriate.
                  </p>
                </>
              }
            />

<Section
              id="header6"
              title="Our Obligations"
              content={
                <>
                  <p>
                    <strong>6.1.</strong> We agree to provide the services to you in accordance with these terms.
                  </p>
                  <p>
                    <strong>6.2.</strong> We will use reasonable endeavours to supply the services to you as soon as it is reasonably practicable and in the event that we become aware of any reason for delay, we shall notify you.
                  </p>
                  <p>
                    <strong>6.3.</strong> We will not be liable to you if we, using our endeavours, fail to supply the services within a specific timescale.
                  </p>
                  <p>
                    <strong>6.4.</strong> We reserve the right to improve, modify or change the services provided to you and we will use reasonable endeavours to notify you as soon as it is reasonably practicable to do so.
                  </p>
                  <p>
                    <strong>6.5.</strong> We will provide the services to you using reasonable skill and care but at all times this will be subject to any downtime caused by scheduled or emergency maintenance or repair. We will use our reasonable endeavours to ensure that any disruption to the services is minimal and any scheduled work takes place during off-peak hours when possible. We will not be liable to you or any third party for losses whatsoever caused by any such downtime; whether emergency or scheduled.
                  </p>
                </>
              }
            />

<Section
              id="header7"
              title="Your Obligations"
              content={
                <>
                  <p>
                    <strong>7.1.</strong> You agree to use the services in line with our policies. Lodestone reserves the right to remove content from the services or suspend the services immediately where it reasonably suspects such content breaches the policies.
                  </p>
                  <p>
                    <strong>7.2.</strong> You shall indemnify Lodestone against all damages, losses and expenses arising as a result of any action or claim that the data, content and/or any other material breaches the policies.
                  </p>
                  <p>
                    <strong>7.3.</strong> You agree that you are solely responsible for the use of your Lodestone account and the services, including any content that you submit.
                  </p>
                  <p>
                    <strong>7.4.</strong> All services are intended for use by you only. Should you choose to resell, store or give away services to other parties you agree that such activity will be undertaken at your own risk. You also accept responsibility for ensuring that all end users abide by all of our terms.
                  </p>
                  <p>
                    <strong>7.5.</strong> You accept full responsibility for any purchases or modifications made within the Client Portal by you or by third parties using your account.
                  </p>
                  <p>
                    <strong>7.6.</strong> You warrant that the contact information that you provide to us is correct, and that you accept responsibility for keeping this information up to date at all times. You agree that we may suspend access to your account and the services if we reasonably believe that the information you have supplied is inaccurate.
                  </p>
                  <p>
                    <strong>7.7.</strong> You agree that you will immediately notify Lodestone on becoming aware of any unauthorised use of all or any of the services and/or the Client Portal.
                  </p>
                </>
              }
            />

            <Section
              id="header8"
              title="Data"
              content={
                <>
                  <p>
                    <strong>8.1.</strong> You are responsible for ensuring that you maintain adequate and up to date copies of all of your data that you upload onto our servers.
                  </p>
                  <p>
                    <strong>8.2.</strong> In the event of loss of or damage to your data arising out of your actions or actions undertaken on your behalf, we will not provide you with access to any data stored by us for archiving or backup procedures except at our sole discretion.
                  </p>
                  <p>
                    <strong>8.3.</strong> In the event of loss of or damage to your data, howsoever caused, we, in no circumstances, will be liable to recover your data. We will not provide you with access to any data stored by us for the purposes of our own platform stability and business continuity.
                  </p>
                  <p>
                    <strong>8.4.</strong> You shall indemnify us and hold us harmless against all damages, losses and expenses arising out of a third party claim of intellectual property infringement in respect of your content or data.
                  </p>
                  <p>
                    <strong>8.5.</strong> You acknowledge and agree to our Privacy Policy in regards to the processing and storage of your personal data.
                  </p>
                </>
              }
            />

<Section
              id="header9"
              title="Content & Use of Services"
              content={
                <>
                  <p>
                    <strong>9.1.</strong> All information hosted on Lodestone systems must be deemed accurate (when stating facts) and must comply with all applicable laws.
                  </p>
                  <p>
                    <strong>9.2.</strong> Material hosted on Lodestone systems must not be obscene, offensive or inflammatory. This includes defamation of any person or entity.
                  </p>
                  <p>
                    <strong>9.3.</strong> Material must not contain any adult content with the exception of content hosted on .XXX domains. All adult content (including pornography) must not violate any of the IFFOR policies. These policies relate to the prevention against child sexual exploitation.
                  </p>
                  <p>
                    <strong>9.4.</strong> Material must not infringe copyright, be likely to deceive any person (misinformation/disinformation), promote or assist illegal activities or be threatening or abusive.
                  </p>
                  <p>
                    <strong>9.5.</strong> Lodestone offers unlimited web space and bandwidth with some account types. By this, we mean unlimited space for legitimate web site content and bandwidth for visitors to view it. All files on a domain must be part of the active website and linked to the site.
                  </p>
                  <p>
                    <strong>9.6.</strong> Lodestone offer large numbers of mailboxes with some account types subject to fair use. Mailboxes are intended for direct use by the service owner and should not be resold or offered for use by third parties.
                  </p>
                  <p>
                    <strong>9.7.</strong> Using our services for Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks is strictly prohibited.
                  </p>
                  <p>
                    <strong>9.8.</strong> Using our services for cryptocurrency mining is strictly prohibited unless you select the additional crypto mining fee (if available) at checkout. 
                  </p>
                </>
              }
            />

            <Section
              id="header10"
              title="Other Policies"
              content={
                <>
                  <p>
                    <strong>10.1.</strong> Your right to privacy is extremely important to us. Please review our Privacy Policy to learn how we store, handle, and process personal data. By agreeing to these terms, you also agree to the Privacy Policy.
                  </p>
                  <p>
                    <strong>10.2.</strong> We offer a network uptime guarantee for all services. Please review our Service Level Agreement (SLA) to learn more. By agreeing to these terms, you also agree to the SLA.
                  </p>
                </>
              }
            />

            <Section
              id="header11"
              title="Enforcement"
              content={
                <>
                  <p>
                    <strong>11.1.</strong> We will determine, in our discretion, whether there has been a breach of this policy through your use of Lodestone services. When a breach of this policy has occurred, we may take action deemed appropriate by us.
                  </p>
                  <p>
                    <strong>11.2.</strong> Such actions may include service suspension, a warning being issued, service termination, issue of legal proceedings against you, or disclosure of information to law enforcement authorities.
                  </p>
                  <p>
                    <strong>11.3.</strong> We exclude liability for actions taken in response to breaches of this policy. The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate.
                  </p>
                  <p>
                    <strong>11.4.</strong> Lodestone has a police liason function and we are committed to assisting, and cooperating with, all law enforcement and government agencies in helping to reduce cyber crime.
                  </p>
                </>
              }
            />

            <Section
              id="header12"
              title="Governing Law"
              content={
                <>
                  <p>
                    <strong>12.1.</strong> Your rights and obligations under these terms shall be governed by English law and you submit to the exclusive jurisdiction of the English Courts. This agreement supersedes any prior agreements, representations, statements, negotiations, understandings, proposals or undertakings, oral or written, with respect to the subject matter expressly set forth herein.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => (
  <>
    <h2 id={id}>{title}</h2>
    {content}
    <br />
  </>
);

export default TermsOfService;
