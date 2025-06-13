import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from 'react-cookie-consent';

export const metadata: Metadata = {
  title: 'Silver Rubanza - Data Scientist & Machine Learning Engineer',
  description: 'Portfolio website of Silver Rubanza - Data Scientist, Machine Learning Engineer, and Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="cookieConsentForm"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          We and our partners collect cookies, access and use non-sensitive information from your device 
          with your permission to enhance the content and experience on this website. To learn more about 
          cookies, partners, and how we use your data, to review your options or these operations for each 
          partner, visit the{' '}
          <span style={{ fontSize: "14px" }}>
            <a href="https://www.privacypolicygenerator.info/live.php?token=thOvKkcSSYlpzMYn3DDGCokLUszPQ2de">
              Privacy Policy
            </a>
          </span>
          .
        </CookieConsent>
      </body>
    </html>
  );
}