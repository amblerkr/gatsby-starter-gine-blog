module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/amblerkr/bfb747c619744612945914702fa4f503?v=f305ac06c55a418c9ba2ca036138007b"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/amblerkr/ed7644b071d642c88663744159b2e0cf?v=8d0c3481a3824293af0a969bd6bd7a57"
            }
        }
    ],
}
