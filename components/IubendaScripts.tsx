'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Componente per l'integrazione degli script Iubenda
 * Include: Cookie Solution (GDPR banner) e script base per Privacy/Cookie Policy
 */
export default function IubendaScripts() {
    useEffect(() => {
        // Configurazione Iubenda Cookie Solution
        if (typeof window !== 'undefined') {
            (window as any)._iub = (window as any)._iub || [];
            (window as any)._iub.csConfiguration = {
                floatingPreferencesButtonDisplay: "bottom-right",
                perPurposeConsent: true,
                siteId: 2544054,
                whitelabel: false,
                cookiePolicyId: 54151139,
                cookiePolicyUrl: "https://www.iubenda.com/privacy-policy/54151139/cookie-policy",
                banner: {
                    acceptButtonDisplay: true,
                    closeButtonRejects: true,
                    customizeButtonDisplay: true,
                    explicitWithdrawal: true,
                    position: "bottom",
                    rejectButtonDisplay: true
                }
            };

            (window as any)._iub.csLangConfiguration = {
                it: {
                    cookiePolicyId: 54151139,
                    cookiePolicyUrl: "https://www.iubenda.com/privacy-policy/54151139/cookie-policy"
                }
            };
        }
    }, []);

    return (
        <>
            {/* Script base Iubenda per Privacy e Cookie Policy */}
            <Script
                id="iubenda-base"
                strategy="afterInteractive"
                src="https://cdn.iubenda.com/iubenda.js"
            />

            {/* Cookie Solution - Sync Script */}
            <Script
                id="iubenda-cs-sync"
                strategy="afterInteractive"
                src="//cs.iubenda.com/sync/2544054.js"
            />

            {/* Cookie Solution - Main Script */}
            <Script
                id="iubenda-cs-main"
                strategy="afterInteractive"
                src="//cdn.iubenda.com/cs/iubenda_cs.js"
                async
            />
        </>
    );
}
