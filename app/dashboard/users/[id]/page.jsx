import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe"></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
          ></input>
          <label>Password</label>
          <input type="password" name="password" placeholder=""></input>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="Phone"></input>
          <label>Address</label>
          <textarea type="text" name="address" placeholder=""></textarea>
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
