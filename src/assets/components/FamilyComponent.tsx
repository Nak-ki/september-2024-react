import {simpsons} from "../data/simpsons.ts";
import {CharacterComponent} from "./CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div className='font-mono'>
            {simpsons.map((simpson, index) => <CharacterComponent key={index} simpson={simpson}/>)}
        </div>
    );
};

export {FamilyComponent};
