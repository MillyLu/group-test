import styles from "./index.module.css";
import Phone from "../../assets/image/Phone.png";
import Email from "../../assets/image/Email.png";

export function ContentPartner({email, phone}) {
  return (
    <div className={styles.content}>
      <div className={styles.content_about}>
        <p className={styles.content_about__text}>
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
        </p>
        <p className={styles.content_about__text}>
          В работе с клиентами недостаточно просто решить конкретную проблему
          или помочь справиться с трудностями. Не менее важно уделять внимание
          обмену знаниями: "Один из самых позитивных моментов — это осознание
          того, что ты помог клиенту перейти на совершенно новый уровень
          компетентности, уверенность в том, что после окончания проекта у
          клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".{" "}
        </p>
        <p className={styles.content_about__text}>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
      </div>
      <div className={styles.content_contacts}>
        <div className={styles.content_contacts__block}>
          <img
            className={styles.content_contacts__image}
            src={Phone}
            alt="phone"
          />

          <a className={styles.content_contacts__link} href='tel:${phone}'>
            {phone}
          </a>
        </div>
        <div className={styles.content_contacts__block}>
          <img
            className={styles.content_contacts__image}
            src={Email}
            alt="mail"
          />
          <a
            className={styles.content_contacts__link}
            href="mailto:sykfafkar@gmail.com"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
