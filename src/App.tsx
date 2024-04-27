import type { Component } from "solid-js";
import { Show } from "solid-js";
import { jt, t } from "ttag";
import { loadLocale, localeSignal } from "./i18n";
import { Counter } from "./Counter";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [locale] = localeSignal;
  const appFile = <code>src/App.tsx</code>;

  return (
    <Show when={locale()} keyed>
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />

          <p>{jt`Edit ${appFile} and save to reload.`}</p>

          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t`Learn Solid`}
          </a>

          <Counter />

          <select
            class={styles.i18n_select}
            value={locale()}
            onchange={(e) => {
              const nextLocale = e.currentTarget.value;
              loadLocale(nextLocale);
            }}
          >
            <option value="en">English</option>
            <option value="zh_HK">中文(香港)</option>
          </select>
        </header>
      </div>
    </Show>
  );
};

export default App;
