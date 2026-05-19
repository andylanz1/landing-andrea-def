import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Note Legali | Andrea Lanzone",
  description: "Informazioni legali e dati identificativi del titolare.",
};

export default function NoteLegaliPage() {
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
          Note Legali
        </h1>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl uppercase text-white mb-3">
              Titolare
            </h2>
            <p>
              Andrea Lanzone<br />
              Via G. Marconi, 24<br />
              20090 Trezzano sul Naviglio (MI), Italia<br />
              P.IVA 13967810964<br />
              Email:{" "}
              <a
                href="mailto:info@andrealanzone.it"
                className="text-accent-1 hover:underline"
              >
                info@andrealanzone.it
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl uppercase text-white mb-3">
              Proprietà del sito
            </h2>
            <p>
              Tutti i contenuti pubblicati su questo sito — testi, immagini,
              elementi grafici, layout e codice — sono di proprietà di Andrea
              Lanzone, salvo dove diversamente indicato. La riproduzione,
              anche parziale, è soggetta ad autorizzazione preventiva scritta.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl uppercase text-white mb-3">
              Limitazione di responsabilità
            </h2>
            <p>
              Le informazioni pubblicate hanno scopo informativo. Pur curandone
              accuratezza e aggiornamento, il titolare non garantisce
              completezza assoluta e non risponde di danni derivanti dall'uso
              dei contenuti del sito.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl uppercase text-white mb-3">
              Link esterni
            </h2>
            <p>
              Il sito può contenere link a siti di terze parti. Il titolare non
              è responsabile dei contenuti, della disponibilità o delle
              pratiche di privacy di tali siti.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl uppercase text-white mb-3">
              Foro competente
            </h2>
            <p>
              Per ogni controversia relativa al sito si applica la legge
              italiana e il foro competente è quello di Milano.
            </p>
          </section>

          <p className="font-mono text-xs uppercase tracking-widest text-text-secondary pt-8">
            Ultimo aggiornamento: maggio 2026
          </p>
        </div>
      </div>
    </main>
  );
}
