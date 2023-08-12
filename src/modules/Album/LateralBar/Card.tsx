import { Text } from "@/components/Text"
import { GET_APODS_RESPONSE } from "./gql"
import { Image } from "@/components/Image"
import * as S from './styles'
import { useContext, useState } from "react"
import { Context } from "../context"

interface Props {
  data: GET_APODS_RESPONSE['getApods'][0]
}
export const Card = ({ data }: Props) => {
  const [readMore, setReadMore] = useState(false)
  const { setData } = useContext(Context)

  return (
    <S.Card
      key={data?.id}
    >
      <Text style={{ color: '#c9c9c9', fontSize: '13px', margin: '10px 0' }}>Name: {data?.title}</Text>
      <Text style={{ color: '#c9c9c9', fontSize: '13px', marginBottom: '20px' }}>Date: {data?.date}</Text>
      <Image
        onClick={() => setData(data)}
        src={data?.url}
        key={data?.id}
        alt={data?.title}
      />
      <Text
        className='explanation'
        style={{
          fontSize: 'max(16px, 1.1vw)',
          color: '#c9c9c9',
          lineHeight: '1.5rem',
          letterSpacing: '2px',
          ...(readMore && { height: 'fit-content' })
        }}
      >
        {data?.explanation}
      </Text>
      <Text
        className='readMore'
        style={{ fontSize: 'max(16px, 1.1vw)', color: '#f3f3f3', lineHeight: '1.5rem', cursor: 'pointer' }}
        onClick={() => {
          setReadMore(!readMore)
        }}
      >
        {readMore ? 'Read Less' : 'Read More'}
      </Text>
    </S.Card>
  )
}