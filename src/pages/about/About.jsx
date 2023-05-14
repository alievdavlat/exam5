import React from "react";
import './About.css'
import { Product } from "../../components";
import axios from "axios";
function About() {
const [data , setData] = React.useState([])


const getData = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/popular`)
    setData(res.data)
    
  } catch (error) {
  console.log(error);    
  }
}

React.useEffect(() => {
  getData()
}, [])

  return (
    <div className="container">

    <div className="about-page">
      <p>
        Some express themselves through the word, the author creates whole new
        worlds and characters. Others express themselves through music,
        composers convey beautiful stories through sound. How do you choose a
        book or a song for yourself, what feelings do you experience? You can
        see and hear, but how do you enjoy it? Confectioner Sergiu tells his
        story through his exquisite taste. It all started with family dinners,
        baking for holidays and birthdays, sweet gifts for relatives and close
        friends. On one of these evenings, we met Sergiu and I immediately fell
        in love with what he does. In just one week, we worked out the first
        menu, filmed material for the site and launched the NapoleonCake Bakery
        and Confectionery. Sergiu, like many pastry chefs, is known for his
        passion. From orders for birthdays and holidays, to large corporate
        events, gifts and supplies to cafes and restaurants, his desserts began
        to sell like hot cakes on a frosty day. Sergiu always controls the
        production process - from the purchase of products to packaging. This is
        the only way to guarantee the always top quality taste of our cakes and
        desserts. We are very glad that you came to visit us and we will be
        happy to make for you the most delicious dessert in your life. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Culpa, minus fugit
        neque molestias sapiente illum aspernatur, architecto vel saepe, a nisi
        enim ab dolores consequuntur quo cumque eaque rerum veniam obcaecati?
        Mollitia culpa quasi non maxime voluptates, quas molestiae quod, dolores
        iste ipsam assumenda at ab expedita quia architecto aut.
        Some express themselves through the word, the author creates whole new
        worlds and characters. Others express themselves through music,
        composers convey beautiful stories through sound. How do you choose a
        book or a song for yourself, what feelings do you experience? You can
        see and hear, but how do you enjoy it? Confectioner Sergiu tells his
        story through his exquisite taste. It all started with family dinners,
        baking for holidays and birthdays, sweet gifts for relatives and close
        friends. On one of these evenings, we met Sergiu and I immediately fell
        in love with what he does. In just one week, we worked out the first
        menu, filmed material for the site and launched the NapoleonCake Bakery
        and Confectionery. Sergiu, like many pastry chefs, is known for his
        passion. From orders for birthdays and ho
      </p>
    </div>
    <h2>Our Products</h2>
    <Product data={data} show={4} />
    </div>

  );
}

export default About;
