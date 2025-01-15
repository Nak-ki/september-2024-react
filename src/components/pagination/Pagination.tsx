import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const [query, setQuery] = useSearchParams()

    const prev = () =>  {
        setQuery(value => {
            value.set('skip', `${+value.get('skip') - 30}`)
            return value
        })

    }
    const next = () =>  {
        setQuery(value => {
            value.set('skip', `${+value.get('skip') + 30}`)
            return value
        })
    }

    return (
        <div>
            <button className='m-2 p-2 border-2  border-indigo-200' onClick={prev} disabled={+query.get('skip') === 30}>PREV</button>
            <button className='m-2 p-2 border-2 border-indigo-200' onClick={next}>NEXT</button>

        </div>
    );
};

export {Pagination};
