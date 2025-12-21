import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Service - Nusantara",
  description:
    "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  keywords:
    "Nusantara, Nusantarahosting, Nusantara hosting, game server hosting, ARK server, Rust server, Minecraft server, Valheim server, multiplayer gaming, friends gaming, instant server setup, user-friendly gaming, website hosting, domain hosting, gaming community, online gaming, dedicated servers, server management, hosting solutions, cheap",
  openGraph: {
    title: "Terms Of Service - Nusantara",
    description:
      "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
  },
  twitter: {
    title: "Terms Of Service - Nusantara",
    description:
      "The best Minecraft Server Hosting with the #1 unlimited support and modpack hosting. Sign up today with plans starting at just $2.99/month",
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
                  { id: "header1", label: "Definitions" },
                  { id: "header2", label: "Account Creation and Usage" },
                  { id: "header3", label: "Service Provision" },
                  { id: "header4", label: "Payments and Billing" },
                  { id: "header5", label: "Intellectual Property" },
                  { id: "header6", label: "Limitation of Liability" },
                  { id: "header7", label: "Indemnification" },
                  { id: "header8", label: "Amendments and Termination" },
                  { id: "header9", label: "Governing Law and Jurisdiction" },
                  { id: "header10", label: "General Provisions" },
                  { id: "header11", label: "Trademark" },
                  { id: "header12", label: "Confidentiality" },
                  { id: "header13", label: "Payment and Card Information" },
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
              Effective Date: <strong>24/10/2024</strong>
            </p>

            <Section
              id="header1"
              title="Definitions"
              content={
                <>
                  <p>
                    <strong>1.1.</strong> &quot;Nusantara,&quot; &quot;we,&quot;
                    &quot;us,&quot; or &quot;our&quot; refers to Nusantara, the
                    Game Server Provider (GSP) offering game server hosting
                    services.
                  </p>
                  <p>
                    <strong>1.2.</strong> &quot;Services&quot; refer to the game
                    server hosting services provided by Nusantara, including
                    software, hardware, network infrastructure, and related
                    components required for hosting game servers.
                  </p>
                  <p>
                    <strong>1.3.</strong> &quot;User,&quot; &quot;you,&quot; or
                    &quot;your&quot; refers to any individual or entity
                    accessing or using our Services.
                  </p>
                </>
              }
            />

            <Section
              id="header2"
              title="Account Creation and Usage"
              content={
                <>
                  <p>
                    <strong>2.1.</strong> Eligibility: To use our Services, you
                    must be at least 18 years old or have the necessary legal
                    capacity to enter into this Agreement.
                  </p>
                  <p>
                    <strong>2.2.</strong> Account Registration: You agree to
                    provide accurate and complete information when creating an
                    account. You are responsible for maintaining the
                    confidentiality of your account credentials and for all
                    activities that occur under your account.
                  </p>
                  <p>
                    <strong>2.3.</strong> Prohibited Activities:
                  </p>
                  <ul className="ml-5 list-decimal">
                    {[
                      "Violating any applicable laws or regulations.",
                      "Infringing upon the intellectual property rights of others.",
                      "Engaging in any activity that may disrupt or interfere with the operation of our Services or network.",
                      "Transmitting or storing any illegal, harmful, or offensive content.",
                      "Using our Services for any illegal or unauthorized purposes.",
                      "Attempting to gain unauthorized access to any system, network, or data.",
                      "Engaging in any form of harassment, spamming, or sending unsolicited messages.",
                      "Misrepresenting your identity or affiliation with any person or entity.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>2.4.</strong> Suspension or Termination: We reserve
                    the right to suspend or terminate your account or access to
                    our Services if we determine, in our sole discretion, that
                    you have violated any provision of this Agreement.
                  </p>
                </>
              }
            />

            <Section
              id="header3"
              title="Service Provision"
              content={
                <>
                  <p>
                    <strong>3.1.</strong> Service Availability: We strive to
                    provide uninterrupted access to our Services. However, we
                    cannot guarantee that the Services will be error-free,
                    secure, or available at all times. Maintenance, upgrades, or
                    other technical issues may require periodic downtime.
                  </p>
                  <p>
                    <strong>3.2.</strong> Game Server Management: Nusantara
                    provides tools and interfaces to manage your game servers.
                    You are responsible for configuring and managing your game
                    servers, including game-specific settings, mod
                    installations, and content uploads.
                  </p>
                  <p>
                    <strong>3.3.</strong> Third-Party Software: Nusantara may
                    provide support for certain third-party software, plugins,
                    or modifications. However, we do not guarantee compatibility
                    with all third-party software or the performance of such
                    software on our Services.
                  </p>
                  <p>
                    <strong>3.4.</strong> Data Backup: Nusantara regularly backs
                    up server data as a precautionary measure. However, you are
                    solely responsible for maintaining up-to-date backups of
                    your game server data. We recommend regular backups to
                    safeguard against data loss.
                  </p>
                  <p>
                    <strong>3.5.</strong> Resource Usage: You agree not to
                    misuse or overuse our Services or the underlying resources.
                    Excessive resource usage, including CPU, RAM, or bandwidth,
                    may result in temporary or permanent restrictions on your
                    account.
                  </p>
                  <p>
                    <strong>3.6.</strong> User&apos;s Responsibility: As a User,
                    you acknowledge and agree that you are solely responsible
                    for any data loss or corruption that occurs as a result of
                    actions initiated by you.
                  </p>
                  <p>
                    <strong>3.7.</strong> Prohibited Actions: Engaging in
                    activities that knowingly cause data corruption or loss is
                    strictly prohibited.
                  </p>
                </>
              }
            />

            <Section
              id="header4"
              title="Payments and Billing"
              content={
                <>
                  <p>
                    <strong>4.1.</strong> Pricing and Payment: The pricing for
                    our Services is outlined on our website or as otherwise
                    communicated to you. You agree to pay all fees associated
                    with your use of our Services as specified in our pricing
                    structure.
                  </p>
                  <p>
                    <strong>4.2.</strong> Billing and Renewals: Services are
                    typically billed on a recurring basis, as specified during
                    the order process.
                  </p>
                  <p>
                    <strong>4.3.</strong> Refunds: We offer a refund policy
                    based on the terms specified on our website.
                  </p>
                  <p>
                    <strong>4.4.</strong> Initial Purchase: We offer refunds for
                    the first 48 hours after the initial purchase of our
                    Services.
                  </p>
                  <p>
                    <strong>4.5.</strong> Exclusions: Please note that we do not
                    offer refunds for upgrades, location transfers, configurable
                    options, or funds added into the client wallet.
                  </p>
                </>
              }
            />

            <Section
              id="header5"
              title="Intellectual Property"
              content={
                <>
                  <p>
                    <strong>5.1.</strong> Ownership: You retain all ownership
                    rights in the content and data you upload or transmit
                    through our Services.
                  </p>
                  <p>
                    <strong>5.2.</strong> License Grant: By using our Services,
                    you grant Nusantara a worldwide, royalty-free,
                    sublicensable, and transferable license to host, reproduce,
                    distribute, and display your content solely for the purpose
                    of providing the Services.
                  </p>
                  <p>
                    <strong>5.3.</strong> Data Privacy: Nusantara respects your
                    privacy and is committed to protecting your personal data.
                  </p>
                  <p>
                    <strong>5.4.</strong> Data Security: We implement reasonable
                    security measures to safeguard your content and data hosted
                    on our servers.
                  </p>
                </>
              }
            />

            <Section
              id="header6"
              title="Limitation of Liability"
              content={
                <p>
                  <strong>6.1.</strong> Disclaimer: Nusantara provides the
                  Services &quot;as is&quot; and disclaims all warranties,
                  whether express or implied.
                </p>
              }
            />

            <Section
              id="header7"
              title="Indemnification"
              content={
                <p>
                  <strong>7.0.</strong> You agree to indemnify, defend, and hold
                  Nusantara harmless from any claims, losses, or damages arising
                  out of or in connection with your use of our Services.
                </p>
              }
            />

            <Section
              id="header8"
              title="Amendments and Termination"
              content={
                <>
                  <p>
                    <strong>8.1.</strong> Amendments: Nusantara may modify this
                    Agreement from time to time by posting the revised terms on
                    our website or notifying you through other means.
                  </p>
                  <p>
                    <strong>8.2.</strong> Termination: Either party may
                    terminate this Agreement for any reason by providing written
                    notice to the other party.
                  </p>
                </>
              }
            />

            <Section
              id="header9"
              title="Governing Law and Jurisdiction"
              content={
                <p>
                  <strong>9.1.</strong> This Agreement shall be governed by and
                  construed in accordance with the laws of The United Kingdom.
                </p>
              }
            />

            <Section
              id="header10"
              title="General Provisions"
              content={
                <>
                  <p>
                    <strong>10.1.</strong> Entire Agreement: This Agreement
                    constitutes the entire agreement between you and Nusantara
                    concerning the subject matter herein and supersedes all
                    prior or contemporaneous agreements, understandings, or
                    representations.
                  </p>
                  <p>
                    <strong>10.2.</strong> Severability: If any provision of
                    this Agreement is found to be invalid, illegal, or
                    unenforceable, the remaining provisions shall continue in
                    full force and effect.
                  </p>
                </>
              }
            />

            <Section
              id="header11"
              title="Trademark"
              content={
                <>
                  <p>
                    <strong>11.1.</strong> Nusantara Trademark:
                    &quot;Nusantara&quot; is a registered trademark owned by PT.
                    Nusantara.
                  </p>
                  <p>
                    Please refrain from using our trademark or any associated
                    intellectual property without obtaining proper authorization
                    from PT. Nusantara.
                  </p>
                </>
              }
            />

            <Section
              id="header12"
              title="Confidentiality"
              content={
                <>
                  <p>
                    <strong>12.1.</strong> Confidential Information: Nusantara
                    and the User acknowledge that during the course of using our
                    Services, each party may have access to certain confidential
                    and proprietary information (&quot;Confidential
                    Information&quot;) of the other party.
                  </p>
                  <p>
                    <strong>12.2.</strong> Obligations: Each party agrees to
                    maintain the confidentiality of the other party&apos;s
                    Confidential Information and not to disclose or use such
                    information for any purpose other than as necessary to
                    fulfil their obligations under this Agreement.
                  </p>
                </>
              }
            />

            <Section
              id="header13"
              title="Payment and Card Information"
              content={
                <>
                  <p>
                    <strong>13.1.</strong> Payment Processing: When making
                    payments through Stripe using your credit card, Nusantara
                    ensures that all payment information is securely
                    transmitted.
                  </p>
                  <p>
                    <strong>13.2.</strong> Automatic Card Payments: By providing
                    your credit card information, you authorize Nusantara to
                    capture and securely store your card details for future
                    automatic payment processing.
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
