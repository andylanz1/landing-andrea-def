import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Andrea Lanzone",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-accent-1 transition-colors"
        >
          ← Torna alla home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight mt-8 mb-12">
          Privacy Policy
        </h1>

        <a
          href="https://www.iubenda.com/privacy-policy/54151139"
          className="iubenda-white iubenda-noiframe iubenda-embed iub-body-embed"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`,
          }}
        />
      </div>
    </main>
  );
}
