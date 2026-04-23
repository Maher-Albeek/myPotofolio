const Title = ({ title }: { title: string }) => {
    return (
        <div className="title h-30 items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-900/90">{title}</h1>
        </div>
    );
}

export default Title;