import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="he" dir="rtl">
                <meta charSet="utf-8" />
                <link rel="shortcut icon" type="image/x-icon" href="https://cdn.menoramivt.co.il/public/favicon.ico" />

                <Head />
                <body dir="rtl">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument