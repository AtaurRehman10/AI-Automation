import './globals.css'

export const metadata = {
  title: 'AL Automation | Revolutionary AI Solutions for Modern Business',
  description: 'Leading the future with AL Automation - cutting-edge AI solutions that transform businesses. Streamline operations, boost efficiency, and unlock exponential growth with our intelligent automation systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}