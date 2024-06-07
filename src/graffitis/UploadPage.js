import React from "react";
import { UploadButton } from "../graffitis/uploadthing";
import PropTypes from "prop-types";

function UploadPage({ setUrl }) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
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
