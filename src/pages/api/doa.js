export default async function getServerSideProps() {

    const res = await fetch('https://rafed.net/mafatih/ziarat-ashoora-fa')
    const dataDoa = await res.json()
  
    return { props: {dataDoa} }
  }