import './AboutMe.css';
import React from 'react';

function AboutMe() {
    return (
        <div className='student' id='student'>
            <h2 className='student__title'>Студент</h2>
            <div>
                <img src="../../../images/student.jpeg" alt='Ekaterina L.' />
                <div>
                    <h3 className='student__name'>Екатерина</h3>
                    <p className="techs__text techs__text_title">Фронтенд-разработчик</p>
                    <p>Интересуюсь наукой и технологиями. Люблю учиться, пробовать новое и исследовать свои границы (на текущий момент не обнаружены).

                        Из любопытства начала самостоятельно изучать программирование на JavaScript и осознала, что, наконец, нашла инструмент для самовыражения и реализации своих творческих идей. Решила серьезно погрузиться в тему программирования с Яндекс.Практикумом. Теперь кайфую от создания, организации и написания аккуратного кода.

                        В свободное время люблю решать задачи на codeWars, занимаюсь спортом и слушаю подкасты от студии Либо/Либо, АйТиБорода, Мы обречены, Трёп Себранта, Фронтенд Юность. Вдохновляюсь интервью с разработчиками, которые много работали, многого достигли и сейчас полны идей о том, как можно улучшить наш мир.
                        В ближайшем будущем планирую пополнить их ряды.

                        Для достижения этой цели стремлюсь развиваться в опытной команде, экспериментировать под присмотром увлеченных специалистов, внедрять современные знания при разработке крупных и полезных проектов. Хочу видеть результаты своей кропотливой работы в виде продуманного, быстрого и дружелюбного интерфейса.
                    </p>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <ul className='techs__skills-container'>
                <li className='techs__skill'>HTML</li>
                <li className='techs__skill'>CSS</li>
                <li className="techs__skill">JS</li>
                <li className="techs__skill">React</li>
                <li className='techs__skill'>Git</li>
                <li className="techs__skill">Express.js</li>
                <li className="techs__skill">mongoDB</li>
            </ul>
        </div>
    )
};

export default AboutMe;