import * as S from './styles';
import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';

import leao1 from '../../assets/imgs/leao1.jpg';
import leao2 from '../../assets/imgs/leao2.jpg';
import leao3 from '../../assets/imgs/leao3.jpg';

function Leao() {
	return (
		<S.Structure>
			<Header />
			<Sidenav page={'leao'} />
			<S.Main>
				<div className="title">
					<h1>Panthera leo</h1>
					<span>da família felidae</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">250</span>
						<span className="label">kg</span>
					</div>
					<div>
						<span className="number">14</span>
						<span className="label">age</span>
					</div>
				</div>
				<p className="col-wide">
					O leão (nome científico: Panthera leo) é uma espécie de
					mamífero carnívoro do gênero encontrada na África
					subsaariana e na Ásia, com uma única população remanescente
					em perigo, no Parque Nacional da Floresta de Gir, Gujarat,
					Índia.
				</p>
				<img src={leao1} alt="leao-1" />
				<p className="emphasis">
					A pelagem é unicolor de coloração castanha, e os machos
					apresentam uma juba característica.
				</p>
				<img src={leao2} alt="leao-2" />
				<p>
					Foi extinto na África do Norte e no Sudoeste Asiático em
					tempos históricos, e até o Pleistoceno Superior, há cerca de
					10 000 anos, era o mais difundido grande mamífero terrestre
					depois dos humanos. Esses grandes felinos vivem em bandos de
					5 a 40 indivíduos, sendo os únicos felinos de hábitos
					gregários.
				</p>
				<p>
					Em um bando, há divisão de tarefas: as fêmeas são
					encarregadas da caça e do cuidado dos filhotes, enquanto o
					macho é responsável pela demarcação do território e pela
					defesa do grupo de animais maiores ou mais numerosos (contra
					eventuais ataques de hienas, búfalos, elefantes e outros
					leões machos).
				</p>
				<blockquote className="quote col-wide">
					<p>
						“Se um leão pudesse falar, não poderíamos entendê-lo.”
					</p>
				</blockquote>
				<ul className="atributes">
					<li>Ordem: Carnivora</li>
					<li>Tipo: Mamífero</li>
					<li>Idade Média: 14 anos</li>
					<li>Macho adulto: 250kg</li>
					<li>Fêmea adulta: 180kg</li>
					<li>Família: Felidae</li>
				</ul>
				<div className="information">
					<p>
						Habita preferencialmente as savanas e pastagens abertas,
						mas pode ser encontrado em regiões mais arbustivas. É um
						animal sociável que vive em grupos que consiste das
						leoas e suas crias, o macho dominante e alguns machos
						jovens que ainda não alcançaram a maturidade sexual.
					</p>
					<p>
						A espécie está classificada como "vulnerável" pela União
						Internacional para a Conservação da Natureza e dos
						Recursos Naturais (IUCN), e sofreu um declínio
						populacional de 30-50% nas últimas duas décadas no
						território africano.
					</p>
				</div>
				<img className="col-wide" src={leao3} alt="leao-3" />
			</S.Main>
			<Aside />
			<Footer />
		</S.Structure>
	);
}

export default Leao;
