import anuncio1 from '../../assets/imgs/anuncio-1.jpg';
import anuncio2 from '../../assets/imgs/anuncio-2.jpg';
import * as S from './styles';

const Aside = () => {
	return (
		<S.Aside>
			<div className="advertisement">
				<img src={anuncio1} alt="anuncio-1" />
			</div>
			<div className="advertisement">
				<img src={anuncio2} alt="anuncio-2" />
			</div>
		</S.Aside>
	);
};

export default Aside;
