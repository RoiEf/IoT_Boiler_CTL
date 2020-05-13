import { h } from "preact";
// import styles from "../style/styles.css";

const Updates = () => {
  return (
    <div id="basePage">
      <div id="small">
        <h1>Firmware Upload</h1>
        <form>
          <p>
            <input
              type="text"
              placeholder="File"
            />
          </p>
          <p class="submit">
            <input type="submit" name="commit" value="Update" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Updates;
