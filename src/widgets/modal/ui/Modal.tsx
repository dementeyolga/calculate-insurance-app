import clsx from 'clsx';
import s from './Modal.module.scss';
import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { TextInput } from '@/shared/ui/input';
import phoneIcon from '@images/phone.svg';
import emailIcon from '@images/email.svg';
import closeIcon from '@images/close.svg';
import { Button } from '@/shared/ui/button';
import { useMask } from '@react-input/mask';

interface ModalProps {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ isActive, setActive }) => {
  const inputRef = useMask({
    mask: '+375 (__) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
  });
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      disableModal();
    }
  };

  const disableModal = () => {
    if (modalRef.current) {
      modalRef.current.addEventListener(
        'animationend',
        () => {
          setActive(false);
          modalRef.current?.classList.remove(s.inactive);
        },
        {
          once: true,
        }
      );

      modalRef.current.classList.add(s.inactive);
    }
  };

  return (
    <div
      ref={modalRef}
      className={clsx(s.wrapper, isActive ? s.active : s.inactive)}
      onClick={handleWrapperClick}
    >
      <div className={s.modal}>
        <div className={s.closeBtn} onClick={() => disableModal()}>
          <img src={closeIcon} alt="close icon" />
        </div>
        <form className={s.form}>
          <div>
            <div className={s.info}>
              <h3>Заказать звонок</h3>
              <p className="secondary-text">
                Введите ваши данные и наш менеджер свяжется с вами
              </p>
            </div>
            <div className={s.inputGroup}>
              <TextInput
                reference={inputRef}
                withVisiblePlaceholder
                name="Телефон"
                placeholder="Введите номер телефона"
              />
              <TextInput
                withVisiblePlaceholder
                name="Имя"
                placeholder="Введите имя"
              />
            </div>
          </div>
          <div className={s.contact}>
            <p className="secondary-text">или свяжитесь с нами</p>

            <p className="flex">
              Контакт-центр:
              <a className={s.link} href="tel:+375291111111">
                +375 (29) 111-11-11 <img src={phoneIcon} alt="" />
              </a>
            </p>
            <p className="flex">
              Эл.почта:
              <a className={clsx(s.link, s.mail)} href="mailto:+375291111111">
                email@mail.com <img src={emailIcon} alt="" />
              </a>
            </p>
          </div>
          <Button type="submit" primary className={s.button}>
            Заказать звонок
          </Button>
        </form>
      </div>
    </div>
  );
};
