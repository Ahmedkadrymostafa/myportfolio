import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LeftSection from './components/leftsection/LeftSection'
import Menu from './components/menu/Menu'
import Providers from './providers'
import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.akadry.me'),
  title: {
    default: 'Ahmed Kadry',
    template: "%s - Ahmed Kadry"
  },
  description: 'Welcome to my vibrant corner of the internet, where innovation meets expertise! I am thrilled to present my portfolio as a MERN (MongoDB, Express.js, React.js, Node.js) stack developer, showcasing my passion for crafting dynamic and immersive web experiences',
  generator: 'Next.js',
  applicationName: 'Ahmed Kadry portfolio',
  keywords: ['web development', 'mern stack developer', 'full stack developer', 'frontend developer', 'web developer portfolio', 'web development', 'wed developer'],
  authors: [{ name: 'Ahmed Kadry', url: 'https://www.akadry.me' }],
  creator: 'Ahmed Kadry',
  publisher: 'Ahmed Kadry',
  alternates: {
    canonical: '/',
    
  },
  
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" translate='no'>
      <head>
        <meta name='google' content='notranslate' />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <Providers>

            <LeftSection />

            <div className='absolute flex position-right overflow-hidden'>
              <div className='rightSection' style={{scrollBehavior: "smooth"}}>

                <div className="art-bg">
                  <div className="overlay"></div>
                </div>

                {children}
                
              </div>

              <Menu />
            </div>
            
        </Providers>
        
      </body>

      <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-FTYL27SFMN' />
      <Script id='google-analytics' strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FTYL27SFMN');
          `}
      </Script>
      
    </html>
  )
}
