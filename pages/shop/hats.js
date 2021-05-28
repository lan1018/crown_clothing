import Layout from '../../components/layout/Layout'
import ItemContainer from '../../components/shop/item_container'


export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/hats');
  const categories = await response.json();
  console.log('categories', categories)

  return {
    props: {
      categories,
    }
  }
}

export default function Home({categories}) {
  return (
    <Layout>
      <ItemContainer key={categories[0].cid} categories={categories} />
    </Layout>
  )
}
