"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";

export type ConsentService = "googleMaps";
export type Consent = Record<ConsentService, boolean>;

export const CONSENT_STORAGE_KEY = "lbn-consent";
// Bump when the list of services changes, so every visitor is asked again.
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const NO_CONSENT: Consent = { googleMaps: false };
export const FULL_CONSENT: Consent = { googleMaps: true };

type ConsentContextType = {
  consent: Consent;
  // false until the stored choice has been read in the browser
  ready: boolean;
  settingsOpen: boolean;
  save: (consent: Consent) => void;
  grant: (service: ConsentService) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const ConsentContext = createContext<ConsentContextType>({
  consent: NO_CONSENT,
  ready: false,
  settingsOpen: false,
  save: () => {},
  grant: () => {},
  openSettings: () => {},
  closeSettings: () => {},
});

function readStoredConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    const age = Date.now() - Date.parse(data.date);
    if (data.version !== CONSENT_VERSION || !(age >= 0 && age < CONSENT_MAX_AGE_MS)) return null;
    return { googleMaps: data.googleMaps === true };
  } catch {
    return null;
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(NO_CONSENT);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) setConsent(stored);
    setReady(true);
  }, []);

  const save = useCallback(
    (next: Consent) => {
      try {
        window.localStorage.setItem(
          CONSENT_STORAGE_KEY,
          JSON.stringify({ ...next, version: CONSENT_VERSION, date: new Date().toISOString() })
        );
      } catch {
        // Storage unavailable: the choice applies to this page view only.
      }
      const revoked = (Object.keys(next) as ConsentService[]).some((s) => consent[s] && !next[s]);
      if (revoked) {
        // Third-party scripts that already ran cannot be unloaded, so start from a clean page.
        window.location.reload();
        return;
      }
      setConsent(next);
      setSettingsOpen(false);
    },
    [consent]
  );

  const grant = useCallback(
    (service: ConsentService) => save({ ...consent, [service]: true }),
    [consent, save]
  );

  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  return (
    <ConsentContext.Provider
      value={{ consent, ready, settingsOpen, save, grant, openSettings, closeSettings }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}
