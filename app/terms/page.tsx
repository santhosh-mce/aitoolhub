import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AI Tools Hub',
  description: 'Terms and Conditions for using AI Tools Hub',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p><strong>Last Updated:</strong> June 2026</p>
        <p>
          Welcome to AI Tools Hub! These terms and conditions outline the rules and regulations for the use of 
          AI Tools Hub's Website.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use 
          AI Tools Hub if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing AI Tools Hub, you agreed to use cookies in agreement 
          with the AI Tools Hub's Privacy Policy.
        </p>

        <h2>License</h2>
        <p>
          Unless otherwise stated, AI Tools Hub and/or its licensors own the intellectual property rights for 
          all material on AI Tools Hub. All intellectual property rights are reserved. You may access this from 
          AI Tools Hub for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from AI Tools Hub</li>
          <li>Sell, rent or sub-license material from AI Tools Hub</li>
          <li>Reproduce, duplicate or copy material from AI Tools Hub</li>
          <li>Redistribute content from AI Tools Hub</li>
        </ul>

        <h2>User Comments and Submissions</h2>
        <p>
          Parts of this website offer an opportunity for users to submit links, descriptions, and comments. 
          AI Tools Hub does not filter, edit, publish or review Comments prior to their presence on the website. 
          Comments do not reflect the views and opinions of AI Tools Hub, its agents and/or affiliates.
        </p>
        <p>
          AI Tools Hub reserves the right to monitor all Comments and to remove any Comments which can be considered 
          inappropriate, offensive or causes breach of these Terms and Conditions.
        </p>

        <h2>Hyperlinking to our Content</h2>
        <p>
          The following organizations may link to our Website without prior written approval:
        </p>
        <ul>
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <p>
          As long as the website and the information and services on the website are provided free of charge, 
          we will not be liable for any loss or damage of any nature.
        </p>
      </div>
    </div>
  );
}
