export const metadata = {
    title: 'Next.js',
    description: 'Created',
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
