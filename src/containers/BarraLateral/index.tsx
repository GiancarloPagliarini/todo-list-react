import FiltroCards from '../../components/FiltroCards'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="buscar" />
    </div>
    <S.Filtros>
      <FiltroCards legenda="pendentes" contador={3} />
      <FiltroCards legenda="concluídas" contador={4} />
      <FiltroCards legenda="urgentes" contador={2} />
      <FiltroCards legenda="importantes" contador={2} />
      <FiltroCards legenda="normal" contador={3} />
      <FiltroCards ativo legenda="todas" contador={7} />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
