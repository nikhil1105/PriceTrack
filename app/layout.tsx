import Navbar from '@/components/Navbarp'
import { AuthProvider } from "./Providers";
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ReduxProvider } from "../lib/redux/provider";

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'PriceTrack',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='px-[30px] bg-[#fef7f2] xl:px-36'>
        
        <main className="max-w-10xl mx-auto">
          <AuthProvider>
          <ReduxProvider>
          {children}
          </ReduxProvider>
          </AuthProvider>
        </main>

        
      </body>
    </html>
  )
}