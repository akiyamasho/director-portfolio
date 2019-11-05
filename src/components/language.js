import React from "react";

import {
    FormattedMessage,
    IntlContextConsumer,
    changeLocale,
} from "gatsby-plugin-intl";

import { TextBtn } from "./shared/button";

const LOCALE_JA = "ja";
const LOCALE_EN = "en";

const Language = () => (
    <IntlContextConsumer>
        {({ language: currentLocale }) => (
            <TextBtn
                onClick={() => {
                    changeLocale(
                        currentLocale === LOCALE_EN ? LOCALE_JA : LOCALE_EN
                    );
                }}
            >
                <FormattedMessage id="nav.toggleLanguage" />
            </TextBtn>
        )}
    </IntlContextConsumer>
);

export default Language;
