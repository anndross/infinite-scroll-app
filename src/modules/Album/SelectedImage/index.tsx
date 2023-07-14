import { Image } from '@/components/Image'
import { Text } from '@/components/Text'
import { useContext } from 'react'
import { Context } from '../context'
import * as S from './styles'

export const SelectedImage = () => {
  const { data } = useContext(Context)
  return (
    <S.Container>
      <Text style={{ fontSize: '30px', color: '#2c4566', fontWeight: '500', marginTop: '20px' }}>
        {data?.title}
      </Text>
      <S.Content>
        <Image style={{ borderRadius: '6px', cursor: 'default', width: '100%' }} src={data?.url} />
        <Text style={{ textAlign: 'left' }}>{data?.explanation}</Text>
        <Text style={{ textAlign: 'left' }}>{data?.copyright}</Text>
      </S.Content>
    </S.Container >
  )
}