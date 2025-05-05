import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Next.js Tutorial - Codevolution",
        template: "%s | Codevolution"
    },
    description: 'By next,js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <header
                    style={{
                        backgroundColor: 'lightblue',
                        padding: '1rem',
                    }}>
                    Header
                </header>
                <main>{children}</main>
                <footer
                    style={{
                        backgroundColor: 'ghostwhite',
                        padding: '1rem',
                    }}>
                    Footer
                </footer>
            </body>
        </html>
    );
}
