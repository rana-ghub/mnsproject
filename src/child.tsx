import { ChildFC } from './dumchild';


const child = () => {
    return <div>
        <ChildFC name ="Dylan" onClick ={ () => console.log('clicked')} />
    </div>
}

export default child;