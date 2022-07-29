import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32}></CloseOutline>
    </LinkWrapper>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptatem corrupti est iusto accusantium excepturi deleniti a libero
        quaerat quae reiciendis dolorum ipsam mollitia error debitis nisi,
        dolorem quasi reprehenderit.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
