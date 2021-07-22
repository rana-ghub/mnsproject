interface ChildProps {
    name : string;
    onClick: () => void;
}

// export const Child = ({name}: ChildProps) =>{
//     return <div>
//         { name }
//     </div>
// };


export const ChildFC: React.FC<ChildProps> = ({ name, onClick }) =>{
    return <div>
        { name }
        <button onClick = {onClick}>XD</button>
    </div>
}