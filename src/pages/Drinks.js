import Header from "../components/Header/Header";
  import headerImage from "../assets/header.jpg";
  import DrinksList from "../components/DrinksList/DrinksList";
  import { getProducts } from "../data/drinks";
  
  function Drinks() {
    return (
      <>
        <Header
          title="Pizza"
          image={headerImage}>
         In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand.
        </Header>
  
        <DrinksList products={getProducts()} />
      </>
    );
  }
  
  export default Drinks;
