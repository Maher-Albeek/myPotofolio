import TextPressure from '../components/TextPressure';
import './Tiltle.css';



const Title = ({ title }: { title: string }) => {
    
    return (
        <div
            className='title-bg-pattern flex w-full items-center justify-center'
            style={{ position: 'relative', minHeight: 'clamp(64px, 8vw, 150px)', 
                height: '100%', width: '100%' }}
        >
            <TextPressure
                text={title}
                flex={false}
                alpha={false}
                stroke={true}
                width={false}
                weight
                italic
                textColor="#ffffff"
                strokeColor="#ff730066"
                minFontSize={24}
                maxFontSize={84}
            />
        </div>
    );
}

export default Title;