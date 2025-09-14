'use client'

import { CacheProvider } from "@emotion/react";

import createEmotionCache from "../../createEmotionCache";

const clientSideEmotionCache = createEmotionCache()

const CacheProviderMui = ({ children }) => {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            {children}
        </CacheProvider>
    )
}

export default CacheProviderMui