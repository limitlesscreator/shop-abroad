import React from 'react';
import s from './Information.module.sass'

export const Information = () => {
    return (
        <div className={s.main}>
            <h2 className={s.title}>Информация</h2>
            <div className={s.buttons}>
                <div>
                    <button>О нас</button>
                    <button>Тарифы и комиссия</button>
                    <button>Возврат</button>
                </div>
                <div>
                    <button>FAQ</button>
                    <button>Список запрещённых товаров</button>
                    <button>Политика</button>
                </div>
            </div>
        </div>
    );
};
