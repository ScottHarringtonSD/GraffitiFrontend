import React from "react";
import { UploadButton } from "../graffitis/uploadthing";
import PropTypes from "prop-types";

function UploadPage({ setUrl }) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        console.log(res[0].url);
        console.log("https://utfs.io/f/", res.key);
        setUrl(res[0].url);
      }}
      onUploadError={(error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}

UploadPage.propTypes = {
  setUrl: PropTypes.func.isRequired,
};

export default UploadPage;
