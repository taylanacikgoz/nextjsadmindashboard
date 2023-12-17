import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id}></input>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title}></input>
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price}></input>
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock}></input>
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color}></input>
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size}
          ></textarea>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description of Product"
          ></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
