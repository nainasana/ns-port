export const API_MAX_REQ_TIME_OUT_MS = 250000;
export const LS_KEY_USER_TOKENS = "";
export const G_DEFAULT_ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "React Native Developer",
];

// The CV lives in Drive and its id comes from VITE_CV_ID on Netlify. Fall back
// to the known id so a missing env var cannot silently render a link to
// ".../file/d/undefined/view", which is what happens in a local build.
const CV_FILE_ID = import.meta.env.VITE_CV_ID || "15cDF-PVzWS8kCdOILEUBkO9HmcIDIBd0";

export const CV_URL = `https://drive.google.com/file/d/${CV_FILE_ID}/view`;
