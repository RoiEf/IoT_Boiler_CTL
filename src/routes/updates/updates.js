import { h } from "preact";
import { useState } from "preact/hooks";

const address = `http://${window.location.hostname}:${80}/updates/firmware`;

const Updates = () => {
  const [firmFile, setfirmFile] = useState();
  const [firmFileName, setfirmFileName] = useState("Choose File");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("FormData created");
    formData.append("firmFile", firmFile, firmFileName);
    console.log("FormData appended");
    fetch(address, { method: "post", body: formData }).catch(console.error);
    console.log("Fetch sent");
  };
  const handleChange = (e) => {
    console.log("file upload handle change: ", e.target.files[0]);
    setfirmFile(e.target.files[0]); //{ file: URL.createObjectURL(e.target.files[0]) }
    setfirmFileName(e.target.files[0].name);
    // console.log("file hook: ", firmFile);
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
