import TextPressure from '../components/TextPressure';

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used



const Title = ({ title }: { title: string }) => {
    return (
        <div
            className='flex w-full items-center justify-center'
            style={{ position: 'relative', minHeight: 'clamp(64px, 8vw, 150px)', height: '100%' }}
        >
            <TextPressure
                text={title}
                flex={false}
                alpha={false}
                stroke={false}
                width={true}
                weight
                italic
                textColor="#ffffff"
                strokeColor="#5227FF"
                minFontSize={24}
                maxFontSize={84}
            />
        </div>
    );
}

export default Title;