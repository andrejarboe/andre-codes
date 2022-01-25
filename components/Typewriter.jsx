import {useState, useEffect} from 'react';
const text = 'a web developer.'
export const Typewriter = () => {
    const [type, setType] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setType(text)
        }, 1000)
    }, []);
    return (
        <span className="blinking-cursor">
            {type}
        </span>
    );
}

export default Typewriter;
