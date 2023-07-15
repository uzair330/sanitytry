
import { client } from "../../sanity/lib/client";

export const getData = async () => {
  const result =
    await client.fetch(`*[_type == "products"] {
    _id,
    title,
    tag,
    price,
    image,
    category,

  }`);
  return result;
};

export default async function Home() {
  const data = await getData();

  

  return (
    <section className="py-12 flex justify-center flex-wrap gap-8">
      
      
     
    </section>
    
    )
}
