import { appendBody, Grid, Label, WebGenTheme } from 'webgen/mod.ts'

appendBody(
    WebGenTheme(
        Grid(
            Label("Welcome to SuperMDM")
                .setFontWeight("bold").setTextSize("4xl"),
            Label("Please contact Sales for more information"),
            Label("Email: hey@supermdm.app")
        )
            .setGap()
            .setJustifyItems("center")
    )
)