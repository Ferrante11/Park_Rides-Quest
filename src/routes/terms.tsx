import { createFileRoute } from "@tanstack/react-router";
import SiteShell from "../components/SiteShell";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function H2({ children }: { children: string }) {
  return <h2 className="text-2xl font-black mt-8 mb-3">{children}</h2>;
}
function P({ children }: { children: any }) {
  return <p className="text-white/85 font-semibold leading-relaxed">{children}</p>;
}

function TermsPage() {
  return (
    <SiteShell title="Terms of Use" subtitle="Last updated: January 1, 2026">
      <H2>1. Agreement to Terms</H2>
      <P>
        By accessing or using Park Rides Quest (“the app”), you agree to these Terms of Use.
        If you do not agree, do not use the app.
      </P>

      <H2>2. Eligibility</H2>
      <P>
        You must be at least 13 years old to use this app. If you are under 18, you represent that
        you have permission from a parent or guardian.
      </P>

      <H2>3. License to Use</H2>
      <P>
        We grant you a limited, non-exclusive, non-transferable, revocable license to use the app
        for personal, non-commercial purposes, subject to these Terms.
      </P>

      <H2>4. Acceptable Use</H2>
      <P>You agree not to:</P>
      <ul className="mt-3 space-y-2 text-white/85 font-semibold list-disc pl-6">
        <li>Misuse the app, attempt unauthorized access, or disrupt the service</li>
        <li>Upload unlawful, abusive, or infringing content</li>
        <li>Impersonate others or misrepresent your identity</li>
        <li>Use automated scraping or exploitation tools</li>
      </ul>

      <H2>5. User-Generated Content</H2>
      <P>
        You retain ownership of content you submit (e.g., ratings and optional comments). By
        submitting content, you grant us a worldwide, non-exclusive, royalty-free license to store,
        display, and process it solely to operate and improve the app and deliver features (such as
        results and session summaries).
      </P>

      <H2>6. Entertainment-Only Results</H2>
      <P>
        Personality outcomes and descriptions are fictional and for entertainment only. They are not
        scientific assessments and do not provide medical, psychological, legal, or professional advice.
      </P>

      <H2>7. Disclaimer of Warranties</H2>
      <P className="font-black text-white">
        THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
      </P>

      <H2>8. Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, we are not liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of data, profits, or goodwill
        arising from use of the app.
      </P>

      <H2>9. Termination</H2>
      <P>
        We may suspend or terminate access to the app at any time if we reasonably believe you violated
        these Terms or misused the service.
      </P>

      <H2>10. Changes to the App or Terms</H2>
      <P>
        We may update the app or these Terms from time to time. Continued use after changes means you
        accept the updated Terms.
      </P>

      <H2>11. Governing Law and Venue</H2>
      <P>
        These Terms are governed by the laws of the State of California (excluding conflict-of-law rules).
        If a dispute cannot be resolved informally, you agree that any legal action will be brought in
        state or federal courts located in Los Angeles County, California, and you consent to personal
        jurisdiction there.
      </P>

      <H2>12. Contact</H2>
      <P>
        <span className="text-white font-black">support@parkridesquest.com</span>
      </P>
    </SiteShell>
  );
}
