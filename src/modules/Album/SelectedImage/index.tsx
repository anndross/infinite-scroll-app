import { Image } from '@/components/Image'
import { Text } from '@/components/Text'
import { useContext } from 'react'
import { Context } from '../context'
import * as S from './styles'

export const SelectedImage = () => {
  const { data } = useContext(Context)
  return (
    <S.Container>
      <Text style={{ fontSize: 'max(18px, 2vw)', color: '#2c4566', fontWeight: '500', marginTop: '20px' }}>
        {data?.title}
      </Text>
      <S.Content>
        <Image alt='astronomic image' style={{ borderRadius: '6px', cursor: 'default', width: '100%' }} src={data?.url} />
        <Text style={{ fontSize: 'max(16px, 1.1vw)', textAlign: 'left', lineHeight: '1.5rem', letterSpacing: '2px' }}>{data?.explanation}</Text>
      </S.Content>
    </S.Container >
  )
}