import { Playfair, Poppins } from 'next/font/google'

export const playFair = Playfair({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
})
