import React from "react";
import styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import { Pagination } from "@/app/ui/dashboard/pagination/pagination";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Desc</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>$1500</td>
            <td>13.02.2024</td>
            <td>734</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
