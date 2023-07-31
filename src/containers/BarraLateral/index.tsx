import FiltroCards from '../../components/FiltroCards'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="buscar" />
    </div>
    <S.Filtros>
      <FiltroCards />
      <FiltroCards />
      <FiltroCards />
      <FiltroCards />
      <FiltroCards />
      <FiltroCards ativo />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
