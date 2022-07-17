import React from 'react';

type DonutNamePropsType = {
    donutName: string
}

export const DonutName = ({donutName}: DonutNamePropsType) => {
    return (
        <>
            {donutName === 'scenarios' ? <span>Сценарии</span>
                : donutName === 'lists' ? <span>Списки</span>
                    : donutName === 'dialogs' && <span>Диалоги</span>}
        </>
    );
};