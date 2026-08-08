import React, { useEffect, useState } from "react";

import { FormattedMessage, useIntl } from "gatsby-plugin-intl";

import { NavigationLink } from "./header";

const LOCALE_JA = "ja";
const LOCALE_EN = "en";

export const localeHref = (location, targetLocale) => {
    const pathWithoutLocale = location.pathname.replace(
        /^\/(?:en|ja)(?=\/|$)/,
        ""
    );
    const pathname = pathWithoutLocale || "/";

    return `/${targetLocale}${pathname}${location.search || ""}${
        location.hash || ""
    }`;
};

const Language = () => {
    const intl = useIntl();
    const currentLocale = intl.locale === LOCALE_JA ? LOCALE_JA : LOCALE_EN;
    const targetLocale = currentLocale === LOCALE_EN ? LOCALE_JA : LOCALE_EN;
    const [href, setHref] = useState(`/${targetLocale}/`);

    useEffect(() => {
        setHref(localeHref(window.location, targetLocale));
    }, [targetLocale]);

    const switchLocale = (event) => {
        event.preventDefault();
        const targetHref = localeHref(window.location, targetLocale);
        localStorage.setItem("gatsby-intl-language", targetLocale);
        window.location.assign(targetHref);
    };

    return (
        <NavigationLink
            href={href}
            hrefLang={targetLocale}
            lang={targetLocale}
            onClick={switchLocale}
        >
            <FormattedMessage id="nav.toggleLanguage" />
        </NavigationLink>
    );
};

export default Language;
