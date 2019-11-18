import React from "react";

import {
    FormattedMessage,
    IntlContextConsumer,
    changeLocale,
} from "gatsby-plugin-intl";

import { NavigationLink } from "./header";

const LOCALE_JA = "ja";
const LOCALE_EN = "en";

const Language = () => (
    <IntlContextConsumer>
        {({ language: currentLocale }) => (
            <NavigationLink
                onClick={() => {
                    changeLocale(
                        currentLocale === LOCALE_EN ? LOCALE_JA : LOCALE_EN
                    );
                }}
            >
                <FormattedMessage id="nav.toggleLanguage" />
            </NavigationLink>
        )}
    </IntlContextConsumer>
);

export default Language;
