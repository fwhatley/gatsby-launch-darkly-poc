module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-launchdarkly',
            options: {
                clientSideID: '',
                options: {
                    // any LaunchDarkly options you may want to implement
                    bootstrap: 'localstorage', // caches flag values in localstorage
                },
            },
        },
    ]
}