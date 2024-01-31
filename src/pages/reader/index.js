import React from 'react'
import FooterReader from '../../../components/reader/footer';
import { useRouter } from 'next/router';

export async function getServerSideProps(ctx) {
  
  // const res = await fetch(`https://rafed.net/mafatih/${ctx.params.prayerName}`);
  // const data = await res.json();
  const data = "dalma"
  console.log(ctx.query)
  return { props: { data } };
}

export default function ReaderPage({data}) {
  const router = useRouter()



  return (
    <>
    <div>salam</div>
    <div>{data}</div>
    <FooterReader/>
    </>
  )
}
