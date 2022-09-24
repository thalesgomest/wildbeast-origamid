import * as S from './styles';

import gato1 from '../../assets/imgs/gato1.jpg';
import gato2 from '../../assets/imgs/gato2.jpg';
import gato3 from '../../assets/imgs/gato3.jpg';

function Gato() {
	return (
		<>
			<S.Main>
				<div className="title">
					<h1>Felis silvestris</h1>
					<span>da família felidae</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">7</span>
						<span className="label">kg</span>
					</div>
					<div>
						<span className="number">15</span>
						<span className="label">age</span>
					</div>
				</div>
				<p className="col-wide">
					O gato selvagem (nome científico: Felis silvestris), também
					conhecido como gato-cabeçana ou gato-montês, é um pequeno
					felídeo do gênero Felis, natural da Europa, África e Ásia. A
					espécie é bastante versátil e ocupa habitats diversificados
					como savanas, florestas e estepes.
				</p>
				<img src={gato1} alt="gato-1" />
				<p className="emphasis">
					O gato-doméstico evoluiu a partir do gato selvagem e é
					considerado como sua sub-espécie (Felis silvestris catus).
				</p>
				<img src={gato2} alt="gato-2" />
				<p>
					O gato selvagem é um carnívoro de médio porte, semelhante
					aos gatos-domésticos, porém mais robusto. A cabeça é grande
					e arredondada, com um focinho curto e poderosas mandíbulas.
					Os olhos são geralmente verdes. As patas são curtas e
					fortes. A pelagem é acastanhada e/ou acinzentada, o que
					permite camuflar-se no seu ambiente.
				</p>
				<p>
					A principal característica distintiva é a sua cauda grossa e
					de aspecto tufado, que apresenta 3 a 5 anéis pretos, largos
					e bem espaçados, terminando numa ponta negra arredondada. O
					corpo também tem riscas ao longo dos flancos e patas. Ao
					contrário de muitos gatos-domésticos, a pelagem do
					gato-selvagem não tem pintas.
				</p>
				<blockquote className="quote col-wide">
					<p>
						“Sua passagem sem esforço entre os mundos selvagem e
						doméstico sugere o tipo de graça de que precisamos, como
						espécie, para nos movermos entre a natureza e a cultura”
					</p>
				</blockquote>
				<ul className="atributes">
					<li>Ordem: Carnivora</li>
					<li>Tipo: Mamífero</li>
					<li>Idade Média: 15 anos</li>
					<li>Macho adulto: 5kg</li>
					<li>Fêmea adulta: 3,5kg</li>
					<li>Família: Felidae</li>
				</ul>
				<div className="information">
					<p>
						Os machos têm entre 52 e 65 cm de comprimento e pesam em
						média 5 kg (máximo 7 kg), enquanto as fêmeas medem entre
						48 e 57 cm e pesam cerca de 3,5 kg. O peso dos animais
						varia sazonalmente.
					</p>
					<p>
						O gato-selvagem habita preferencialmente bosques
						fechados, mas também ocorrem em matagais mediterrâneos e
						florestas de coníferas. Durante o dia podem refugiar-se
						em buracos de árvores, fendas nas rochas ou tocas
						abandonadas de outros animais.
					</p>
				</div>
				<img className="col-wide" src={gato3} alt="gato-3" />
			</S.Main>
		</>
	);
}

export default Gato;
