import stock1 from './images/stock1.jpg'
import stock2 from './images/stock2.jpg'
import heroBG from './images/heroBG.png'

export interface SlideType {
    title: string
    /**
     * Rich text expansion on the title
     */
    text: string
    BGImage: string
    image?: string
    align: 'center' | 'left' | 'right'
    theme?: 'glassBlack' | 'glassWhite'
}

export const slides: SlideType[] = [
    {
        title: 'Quantum Computing',
        text: `The study of quantums in computing`,
        BGImage: heroBG,
        align: 'center',
    },
    {
        title: 'This is the title',
        text: `This is the description <br /> and it should be rich text?`,
        BGImage: stock1,
        image: stock2,
        align: 'left',
        theme: 'glassBlack',
    },
    {
        title: 'This is the title',
        text: `This is the description <br /> and it should be rich text?`,
        BGImage: stock2,
        align: 'right',
    },
]