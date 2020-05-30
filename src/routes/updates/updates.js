import { h } from "preact";
import { useState } from "preact/hooks";

import useUpdate from "../../context/useUpdate";

const Updates = () => {
  const { saveData } = useUpdate();
  const [firmFile, setfirmFile] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("FormData created");
    formData.set("firmFile", firmFile, firmFile.name);
    console.log("FormData set");
    saveData({ body: formData });
    // fetch(address, { method: "post", body: formData }).catch(console.error);
    // console.log("Fetch sent");
    console.log("saveData sent");
  };
  const handleChange = (e) => {
    console.log("file upload handle change: ", e.target.files[0]);
    setfirmFile(e.target.files[0]);
  };
  return (
    <div id="basePage">
      <div id="small">
        <h1>Firmware Upload</h1>
        <form onSubmit={onSubmit}>
          <p>
            <input type="file" onChange={handleChange} />
          </p>
          <p class="submit">
            <input type="submit" name="commit" value="Update" />
          </p>
        </form>
        <h2></h2>
      </div>
    </div>
  );
};

export default Updates;
