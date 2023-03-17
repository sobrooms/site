const axios = require("axios");

// npm install form-data
const FormData = require("form-data");
const url = process.env.beta
let extraOptionalDetails = "";
export default async function handler(req: any, res:any) {
  if (process.env.NODE_ENV == "development") {
    extraOptionalDetails = "Sent from development build..."
  }
  if (req.method === "POST") {
    const { title, email, message, attachment } = req.body;
    if (attachment) {
      const buffer = Buffer.from(attachment.split(",")[1], "base64");
      const formData = new FormData();
      formData.append("file", buffer);
      formData.append(
          "content",
          `
          **username**:\n${title}
          \n\n**email**: ${email}
          \n\n**reason**:\n${message}
          ${extraOptionalDetails}`
      );
      await axios
        .post(url, formData, {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        })
        .then((response: any) => {
          res.status(200).json({ success: true });
        })
        .catch((error: any) => {
          res.status(500).json({ error: error.message });
        });
    } else {
      await axios
        .post(url, {
          "embeds": [{
            "fields": [
              {
                "name": "discord tag",
                "value": title,
                "inline": true
              },
              {
                "name": "email",
                "value": email,
                "inline": true
              },
              {
                "name": "reason",
                "value": message
              }
            ],
            "color": "14177041"
          }]
        })
        .then((response: any) => {
          res.status(200).json({ success: true });
        })
        .catch((error: any) => {
          res.status(500).json({ error: error.message });
        });
    }
  } else {
    res.status(405).json({ success: false });
  }
}