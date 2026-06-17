import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Tools Hub',
  description: 'Privacy Policy for AI Tools Hub',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p><strong>Last Updated:</strong> June 2026</p>
        <p>
          At AI Tools Hub, accessible from our website, one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by AI Tools Hub 
          and how we use it.
        </p>

        <h2>Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2>Information we collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
          will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you such as your name, email address, 
          phone number, the contents of the message and/or attachments you may send us, and any other information you 
          may choose to provide.
        </p>

        <h2>How we use your information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Log Files</h2>
        <p>
          AI Tools Hub follows a standard procedure of using log files. These files log visitors when they visit 
          websites. All hosting companies do this and a part of hosting services' analytics. The information collected 
          by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date 
          and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any 
          information that is personally identifiable.
        </p>

        <h2>Cookies and Web Beacons</h2>
        <p>
          Like any other website, AI Tools Hub uses "cookies". These cookies are used to store information including 
          visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is 
          used to optimize the users' experience by customizing our web page content based on visitors' browser type 
          and/or other information.
        </p>

        <h2>Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads 
          to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may 
          choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the 
          following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
        </p>

        <h2>Children's Information</h2>
        <p>
          Another part of our priority is adding protection for children while using the internet. We encourage parents 
          and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          AI Tools Hub does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
          If you think that your child provided this kind of information on our website, we strongly encourage you to 
          contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
      </div>
    </div>
  );
}
