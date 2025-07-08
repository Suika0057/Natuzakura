import { createApp } from "vue";
import APP from "../App.vue";

import { createI18n } from "vue-i18n";
import messages from "./index.js";

const app = createApp(APP);

const locale_config = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") || "en",
    messages
})

export default function (app) {
    app.use(locale_config);
} 