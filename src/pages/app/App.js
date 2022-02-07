import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import jutsoSound from '../../sounds/jutso.mp3';
import { Quotes } from '../../components';

const audio = new Audio(jutsoSound);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function App() {
  
  const isMounted = useRef(true);
  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const response = [
      {speaker: "Naruto Uzumaki", quote: "Trabalho duro é inútil para aqueles que não acreditam em si mesmos."},
    {speaker: "Naruto Uzumaki", quote: "Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas."},
    {speaker: "Naruto Uzumaki", quote: "Lar é onde tem alguém sempre pensando em você"},
    {speaker: "Naruto Uzumaki", quote: "Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem de mudá-lo do jeito que você quer que ele seja."},
    {speaker: "Naruto Uzumaki", quote: "Os sentimentos que uma pessoa tem quando ama alguém, nunca vão deixar que seus corações se tornem negros!"},
    {speaker: "Naruto Uzumaki", quote: "Desista de me fazer desistir!"},
    {speaker: "Naruto Uzumaki", quote: "Enquanto você está vivo, você precisa de uma razão para sua existência. Ser incapaz de encontrar uma razão é o mesmo que estar morto."},
    {speaker: "Pain", quote: "Aqueles que não entendem a verdadeira dor nunca vão entender a verdadeira paz."},
    {speaker: "Pain", quote: "Por vezes você precisa de sofrer para saber, cair para crescer, perder para ganhar porque as maiores lições na vida são aprendidas através da dor."},
    {speaker: "Pain", quote: "Somos apenas pessoas comuns impelidas a usar a vingança pelo nome da justiça. Mas se a vingança é chamada de justiça, então a justiça apenas cria mais vingança. E se torna uma corrente de ódio."},
    {speaker: "Pain", quote: "Se você não compartilha a dor de alguém, você nunca poderá entendê-los."},
    {speaker: "Madara Uchiha", quote: "Quando um homem aprende a amar, ele deve suportar o risco de ser odiado."},
    {speaker: "Madara Uchiha", quote: "O conceito de esperança não é mais do que desistir. Uma palavra que não contém qualquer significado."},
    {speaker: "Madara Uchiha", quote: "Neste mundo, onde quer que exista luz, existem também sombras. Enquanto o conceito de vencedores existir, precisam também existir derrotados. O desejo egoísta de proteger a paz causa guerras e o ódio nasce para proteger o amor."},
    {speaker: "Madara Uchiha", quote: "Quanto mais você vive, mais você entende que a realidade é feita de dor, sofrimento e vazio."},
    {speaker: "Madara Uchiha", quote: "Se você se concentrar em algo, poderá fazer qualquer coisa."},
    {speaker: "Obito Uchiha", quote: "No mundo ninja, aqueles que quebram as regras e as lei são vistos como escória, mas aqueles que abandonam até um de seus amigos são piores que escória."},
    {speaker: "Obito Uchiha", quote: "Ninguém se importava com quem eu era até eu colocar uma máscara."},
    {speaker: "Obito Uchiha", quote: "No momento em que as pessoas passam a conhecer o amor, elas também correm o risco de carregar o ódio."},
    {speaker: "Hatake Kakashi", quote: "Saber o que é certo e escolher ignorá-lo é um ato de covardia."},
    {speaker: "Hatake Kakashi", quote: "Desde que você não desista, vai sempre existir salvação"},
    {speaker: "Hatake Kakashi", quote: "Na sociedade, aqueles que não possuem muitas habilidades, tendem a reclamar mais."},
    {speaker: "Hatake Kakashi", quote: "Eu não vou permitir que meus companheiros morram. Eu vou proteger você com minha vida. Confie em mim."},
    {speaker: "Hatake Kakashi", quote: "Esqueça a vingança. O destino dos que procuram a vingança é sombrio. É trágico e você vai acabar sofrendo e se machucando ainda mais. Mesmo que você consiga sua vingança, a única coisa que vai persistir é o vazio."},
    {speaker: "Shikamaru Nara", quote: "Não há vantagem alguma em viver a vida correndo."},
    {speaker: "Shikamaru Nara", quote: "Independentemente das nossas limitações, nós sempre podemos ser de alguma utilidade. Nosso poder pode parecer insignificante, mas ele pode se revelar útil no grande esquema das coisas."},
    {speaker: "Shikamaru Nara", quote: "Não é porque eu sou preguiçoso é porque eu não me importo."},
    {speaker: "Shikamaru Nara", quote: "Mantenha o foco. Nunca desvie seus olhos, porque se uma abertura surge, mesmo nosso poder insignificante pode ser suficiente para determinar o destino do mundo. É por isso que todos devem ficar alertas e prontos a atacar a qualquer momento!"},
    //{speaker: "teste3", quote: "teste2"},

  
    ]
    audio.play()
    let x = parseInt( getRandomArbitrary(0,response.length) )
    console.log(x)
    console.log(response[x])
    setQuote(response[x])
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <NarutoImg alt="Naruto holding a kunai" src={narutoImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
