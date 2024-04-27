import { createSignal, type Component } from "solid-js";
import { ngettext, msgid } from "ttag";

import styles from "./App.module.css";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(1);
  // Make a proxy to access the signal via object getter, since ttag does not allow function calls inside the message id
  // Ref: https://ttag.js.org/docs/tag-gettext.html#invalid
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  const _ttagSignalProxy = {
    get count() {
      return count();
    },
  };

  return (
    <div>
      <div class={styles.button_group}>
        <button onclick={() => setCount((c) => c + 1)}>+</button>
        <button disabled={count() === 1} onclick={() => setCount((c) => c - 1)}>
          -
        </button>
      </div>

      {ngettext(
        msgid`${_ttagSignalProxy.count} thing`,
        `${_ttagSignalProxy.count} things`,
        _ttagSignalProxy.count,
      )}
    </div>
  );
};
