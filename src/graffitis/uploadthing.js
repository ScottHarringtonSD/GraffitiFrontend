import { generateUploadButton } from "@uploadthing/react";

const connectionString = `${process.env.REACT_APP_API_URL}/api/uploadthing`;

export const UploadButton = generateUploadButton({
  url: connectionString,
});
