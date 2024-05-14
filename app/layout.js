import { Playfair_Display, Open_Sans, Inconsolata } from 'next/font/google'

const headingText = Playfair_Display({ subsets: ['latin'] })
const bodyText = Open_Sans({ subsets: ['latin'] })
const linkText = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'The Disgruntled Philosopher',
  description:
    'A former seminary student, former student of philosophy, former Christian. Currently? Agnostic, a student of life, and disgruntled in the most hopeful way. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${bodyText.className} ${headingText.className} ${linkText.className}`}
      >
        {children}
      </body>
    </html>
  )
}
