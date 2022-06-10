const allowed_origin = () => {
  let ALLOWED_ORIGINS;
  if (process.env.NODE_ENV === 'production') {
    ALLOWED_ORIGINS = [
      "https://doc.theppbs.com", "https://trialinformatics.com",
      "https://auth.trialinformatics.com", "https://crf.pdcode.info",
      "https://rms.theppbs.com", "https://rms-staging.theppbs.com",
      "https://chm.theppbs.com", "https://chm-staging.theppbs.com",
      "https://center.hapakristin.co.kr", "https://staging.hapakristin.co.kr",
      "https://www.hapakristin.co.kr", "https://c.hapakristin.co.kr",
      "https://hapakristin.co.kr", "https://rms.srf.co.kr"
    ];
  } else {
    ALLOWED_ORIGINS = [
      "http://localhost", "http://localhost:2021",
      "http://localhost:2030", "http://localhost:2040",
      "http://localhost:2050", "http://localhost:2070",
      "http://localhost:8000", "https://dev.hapakristin.co.kr",
      "https://center-dev.hapakristin.co.kr", "https://chm-dev.theppbs.com",
      "https://doc.theppbs.com", "http://localhost:3000"
    ];
  }
  return ALLOWED_ORIGINS;
}

module.exports = allowed_origin;