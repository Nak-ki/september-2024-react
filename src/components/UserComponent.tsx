import {FC, memo} from "react";
type UserPropsType={
    foo: () => void
    arr: number[]
}

// При использовании memo страница не рендерится если не будет изменений; но может отягощать компонент
const UserComponent:FC<UserPropsType> = memo(() => {
    console.log('user');
    console.log('arr');
    return (
        <div>
            UserComponent
        </div>
    );
})

export {UserComponent};
