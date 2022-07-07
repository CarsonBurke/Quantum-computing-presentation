import stock1 from './images/stock1.jpg'
import stock2 from './images/stock2.jpg'
import hero from './images/heroBG.png'
import eagle from './images/eagle.png'
import basicMechanics from './images/basicMechanics.png'
import qubitChip from './images/qubitChip.png'

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
        text: `The utilization of qubits to perform computational tasks`,
        BGImage: hero,
        align: 'center',
        theme: 'glassBlack',
    },
    {
        title: 'Basic mechanics',
        text: `This is the description <br /> and it should be rich text?`,
        BGImage: basicMechanics,
        image: qubitChip,
        align: 'left',
        theme: 'glassWhite',
    },
    {
        title: 'IBM Eagle',
        text: `The world's most powerful 127 qubit quantum computer`,
        BGImage: eagle,
        align: 'right',
        theme: 'glassBlack',
    },
]