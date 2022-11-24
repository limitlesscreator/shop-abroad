import React, {SetStateAction, useState} from 'react';
import s from './Accordion.module.sass'
import plus from '../../img/accordionPlus.svg'
import minus from '../../img/accordionMinus.svg'

export const Accordion = ()=> {

  const [selected, setSelected] = useState('')

  const toggle = (i) => {
    if(selected === i){
      return setSelected('')
    }

    setSelected(i)
  }

  const data = [
    {
      question: 'Стандартный',
      answer: 'А также активно развивающиеся страны третьего мира и по сей день остаются уделом либералов, которые жаждут быть функционально разнесены на независимые элементы. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством.'},
    {
      question: 'Экспресс',
      answer: 'А также активно развивающиеся страны третьего мира и по сей день остаются уделом либералов, которые жаждут быть функционально разнесены на независимые элементы. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством.'},
  ]


  return (
    <div className={s['wrapper']}>
      <div className={s['container']}>
        <div tag={"h2"} fontSize={'44px'} marginTop={'80px'} fontWeight={700}>FAQ</div>


        <br/>

        <div className={s['accordion']}>
          {data.map((item,i) => (
            <div key={i} className={s['item']}>
              <div className={s['title']} onClick={() => toggle(`${i}`)}>
                <div tag={'h2'} fontWeight={'700'} fontSize={'24px'}>{item.question}</div>
                {selected === `${i}` ?<img className={s['imgPointer']} src={minus} alt={'plus'} width={30} height={30}/> : <img className={s['imgPointer']} src={plus} alt={'plus'} width={30} height={30}/>}
              </div>
              <div className={selected === `${i}` ? s['contentShow'] : s['content']}>
                <div tag={'h3'} marginTop={'20px'} lineHeight={'25px'} fontSize={'18px'} >{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
