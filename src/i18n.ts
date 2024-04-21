import { createSignal } from "solid-js";
import { addLocale, useLocale } from "ttag";

export const DEFAULT_LOCALE = "en";

export async function loadLocale(locale: string = DEFAULT_LOCALE) {
  const [, setLocale] = localeSignal;
  const { default: localeFile } = await import(`./locales/${locale}.json`);
  addLocale(locale, localeFile);
  useLocale(locale);
  setLocale(locale);
}

export const localeSignal = createSignal(DEFAULT_LOCALE);
